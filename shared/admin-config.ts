/**
 * Admin Configuration
 * 
 * Lista de emails autorizados para acesso administrativo ao sistema.
 * 
 * IMPORTANTE: Emails nesta lista têm permissões administrativas completas.
 */

export const ALLOWED_ADMIN_EMAILS = [
  "sitekinpaisushibar@gmail.com",
];

/**
 * Verifica se um email tem permissão de administrador
 */
export function isAdminEmail(email: string): boolean {
  return ALLOWED_ADMIN_EMAILS.includes(email.toLowerCase().trim());
}

// Cache para emails de ambiente (otimização)
let cachedEnvEmails: string[] | null = null;

/**
 * Get admin emails from environment or use default list
 * Útil para ambientes de produção onde emails são configurados via variáveis de ambiente
 * Results are cached for performance
 */
export function getAdminEmails(): string[] {
  // Return cached value if available
  if (cachedEnvEmails !== null) {
    return cachedEnvEmails;
  }
  
  const envEmails = process.env.ALLOWED_ADMIN_EMAILS;
  
  if (envEmails) {
    cachedEnvEmails = envEmails
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter((e) => e.length > 0);
  } else {
    cachedEnvEmails = ALLOWED_ADMIN_EMAILS;
  }
  
  return cachedEnvEmails;
}

/**
 * Check if email is admin using environment-aware configuration
 */
export function isAdminEmailEnv(email: string): boolean {
  const adminEmails = getAdminEmails();
  return adminEmails.includes(email.toLowerCase().trim());
}
