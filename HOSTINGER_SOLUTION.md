# 🚀 Deploy em Railway (Recomendado para Hostinger Single)

Se não quiser mudar de Hostinger, use Railway para seu backend.

## Setup Rápido Railway

### 1. Criar conta
https://railway.app - Sign in com GitHub

### 2. Conectar repositório
- Novo projeto
- Conectar repositório GitHub
- Selecionar `kinpai-web`

### 3. Configurar
Railway detecta automaticamente Node.js

- **Start command:** `node dist/index.js`
- **Build command:** `pnpm install && pnpm run build`

### 4. Environment Variables
```
VITE_OAUTH_PORTAL_URL=https://seu-oauth-portal.com
VITE_APP_ID=seu-app-id
VITE_FRONTEND_FORGE_API_KEY=sua-api-key
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev
NODE_ENV=production
```

### 5. Deploy
- Click "Deploy"
- Esperar ~5 minutos
- URL gerada: `https://seu-app-railway.up.railway.app`

---

## Frontend em Hostinger Single

### 1. Build
```bash
pnpm run build
```

### 2. Upload do dist/public/ para Hostinger
Via cPanel File Manager ou FTP:
```
dist/public/* → public_html/
```

### 3. Configurar .htaccess para SPA
Criar arquivo `.htaccess` em `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Não reescrever se for arquivo ou pasta real
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # Reescrever tudo para index.html
  RewriteRule ^ index.html [QSA,L]
</IfModule>
```

### 4. Atualizar API URLs
Em `client/src/const.ts`:

```typescript
// Mudar de localhost para Railway URL
const API_BASE_URL = 'https://seu-app-railway.up.railway.app/api';

export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  // ... resto do código
};
```

---

## Resultado Final

```
Hostinger Single (Frontend estático)
- seu-dominio.com
- Arquivo HTML, CSS, JS puro
- SEM processamento no servidor

+

Railway (Backend Node.js)
- seu-app-railway.up.railway.app
- API REST
- Express server
```

Ambos se comunicam via API!

---

## Problema: CORS

Seu frontend em `seu-dominio.com` chamando `seu-app-railway.up.railway.app`

Solução no `server/index.ts`:

```typescript
import cors from 'cors';

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || [
    'https://seu-dominio.com',
    'http://localhost:3000'
  ],
  credentials: true
}));
```

---

## Checklist Hostinger + Railway

- [ ] Criar conta Railway
- [ ] Conectar GitHub
- [ ] Configurar variáveis de ambiente
- [ ] Deploy automático
- [ ] Notar URL Railway
- [ ] Build frontend: `pnpm run build`
- [ ] Upload dist/ para Hostinger
- [ ] Criar .htaccess em public_html
- [ ] Atualizar API URLs no frontend
- [ ] Testar CORS
- [ ] Domínio Hostinger apontando correto

---

**Custo Total:**
- Hostinger Single: ~$3-5/mês
- Railway: FREE (até limites) ou $5/mês
- **Total: $3-10/mês**

Muito mais barato e funcional!
