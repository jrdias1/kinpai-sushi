import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { isAdminEmailEnv } from "../shared/admin-config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// ============================================================================
// Middleware
// ============================================================================

// CORS - Permitir requisições de domínios diferentes
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:3000").split(",");
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin || "")) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ============================================================================
// Health Check
// ============================================================================

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// ============================================================================
// API Routes
// ============================================================================

// Admin email permission check
// SECURITY NOTE: This endpoint is for internal use only.
// In production, add authentication and rate limiting to prevent email enumeration.
app.post("/api/auth/check-admin", (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const isAdmin = isAdminEmailEnv(email);

    // Return only the boolean result to prevent email enumeration
    res.json({
      isAdmin,
      message: isAdmin
        ? "Email has admin permissions"
        : "Email does not have admin permissions",
    });
  } catch (error) {
    console.error("Admin check error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Exemplo de rota de pedido
app.post("/api/orders", (req, res) => {
  try {
    const { items, customer } = req.body;

    // Validação básica
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Items are required" });
    }

    // TODO: Salvar pedido no banco de dados
    console.log("New order received:", { items, customer });

    res.json({
      success: true,
      orderId: `ORD-${Date.now()}`,
      message: "Pedido recebido com sucesso!",
    });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ============================================================================
// Frontend SPA Fallback
// ============================================================================

// Servir a página de SPA para todas as rotas não-API
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ============================================================================
// Error Handler
// ============================================================================

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Server error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// ============================================================================
// Server Start
// ============================================================================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});
