# 📋 Checklist: Hostinger Single + Railway

## ✅ Passo 1: Preparar Projeto (5 min)

```bash
# 1. Instalar tipos faltando
pnpm install --save-dev @types/node @types/vite

# 2. Verificar build
pnpm run check
pnpm run build

# 3. Verificar se criou dist/
ls dist/

# 4. Confirmar arquivos criados
ls dist/public/index.html      # Deve existir
ls dist/index.js               # Deve existir
```

---

## ✅ Passo 2: Criar Conta Railway (5 min)

1. Ir para https://railway.app
2. Clicar "Start for Free"
3. Login com GitHub
4. Autorizar Railway

---

## ✅ Passo 3: Deploy no Railway (10 min)

### Opção A: Deploy via CLI (Recomendado)

```bash
# 1. Instalar Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Criar novo projeto
railway init

# 4. Link projeto
railway link

# 5. Deploy
railway up
```

**Resultado:** URL como `https://seu-app-xxxxxx.up.railway.app`

### Opção B: Deploy via GitHub

1. Fazer push para GitHub
2. No Railway: "New Project"
3. "Deploy from GitHub"
4. Selecionar seu repositório
5. Confirmar

Railway faz deploy automático a cada push!

---

## ✅ Passo 4: Configurar Environment no Railway

No dashboard Railway:

1. Selecionar aplicação
2. Variables
3. Adicionar:

```
VITE_OAUTH_PORTAL_URL=https://seu-oauth-portal.com
VITE_APP_ID=seu-app-id
VITE_FRONTEND_FORGE_API_KEY=sua-api-key-google-maps
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev
NODE_ENV=production
ALLOWED_ORIGINS=https://seu-dominio-hostinger.com
```

4. Deploy se necessário

---

## ✅ Passo 5: Configurar Hostinger

### 5.1 Upload do Frontend

```bash
# 1. Build final
pnpm run build

# 2. Será criado dist/public/ com:
#    - index.html
#    - assets/
#    - menu_data.json
```

### 5.2 Acessar Hostinger cPanel

1. Login em hostinger.com
2. Meu Hosting
3. Gerenciador de Arquivos
4. Navegar para `public_html/`

### 5.3 Upload dos Arquivos

**Opção 1: Gerenciador de Arquivos**
1. Fazer upload de `dist/public/*` para `public_html/`
2. Ou: Criar ZIP de dist/public e extrair em public_html

**Opção 2: FTP**
```bash
# Conectar via FTP
# Host: seu-dominio.com (ou ftp.seu-dominio.com)
# User: seu-usuario-hostinger
# Pass: sua-senha
# Folder: public_html/

# Upload: dist/public/* → public_html/
```

### 5.4 Criar .htaccess para SPA

1. No Gerenciador de Arquivos cPanel
2. Criar novo arquivo: `.htaccess`
3. Conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Não reescrever se for arquivo real
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # Reescrever para index.html
  RewriteRule ^ index.html [QSA,L]
</IfModule>
```

4. Salvar

---

## ✅ Passo 6: Conectar Frontend ↔ Backend

### 6.1 Atualizar arquivo const.ts

Editar: `client/src/const.ts`

```typescript
// Mudar para sua URL Railway
const RAILWAY_API_URL = 'https://seu-app-xxxxxx.up.railway.app';

export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  
  // ... resto continua igual
};
```

### 6.2 Criar arquivo de config de API

Criar: `client/src/config.ts`

```typescript
// API URL baseado em ambiente
export const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3000'
  : 'https://seu-app-xxxxxx.up.railway.app';
```

### 6.3 Usar em componentes

Exemplo em `client/src/pages/Menu.tsx`:

```typescript
useEffect(() => {
  // Mudar de:
  fetch("/menu_data.json")
  
  // Para:
  fetch(`${API_URL}/api/menu`)
    .then(res => res.json())
    .then(data => setMenuData(data))
    .catch(err => {
      // Fallback para JSON estático
      fetch("/menu_data.json")
        .then(res => res.json())
        .then(data => setMenuData(data));
    });
}, []);
```

### 6.4 Rebuild e Deploy

```bash
# Build novo
pnpm run build

# Upload novo em Hostinger
# dist/public/* → public_html/

# Ou, se em Railway, apenas fazer git push
git add .
git commit -m "Update API URLs"
git push
# Railway faz deploy automaticamente!
```

---

## ✅ Passo 7: Teste Completo

### 7.1 Testar Frontend
- Acessar: `https://seu-dominio-hostinger.com`
- Deve carregar site normalmente
- Clicar em "Menu" - deve funcionar
- Navegar em rotas (/) e (/menu) - deve funcionar

### 7.2 Testar Backend
```bash
# Health check
curl https://seu-app-railway.up.railway.app/api/health
# Resposta: { "status": "ok", ... }
```

### 7.3 Testar CORS
1. Abrir DevTools (F12)
2. Console
3. Executar:
```javascript
fetch('https://seu-app-railway.up.railway.app/api/health')
  .then(r => r.json())
  .then(d => console.log('✅ CORS OK:', d))
  .catch(e => console.error('❌ CORS Error:', e));
```

Deve aparecer: `✅ CORS OK: { status: "ok" }`

### 7.4 Testar Carrinho
1. Adicionar item ao carrinho
2. Refresh na página
3. Carrinho deve permanecer (localStorage)

### 7.5 Testar Integrações
- [ ] WhatsApp: clique em "Pedir via WhatsApp"
- [ ] iFood: clique em "Pedir no iFood"
- [ ] Mapa: verificar se carrega
- [ ] Menu: carregar categoria diferente

---

## ✅ Passo 8: Domínio Customizado (Opcional)

Se quiser sair da URL `railway.up.railway.app`:

### 8.1 Usar Railway + Seu Domínio

1. Railway Dashboard
2. Sua aplicação
3. Settings
4. Custom Domain
5. Adicionar: `api.seu-dominio-hostinger.com`
6. Copiar CNAME que aparece
7. Ir ao Hostinger DNS
8. Adicionar registro CNAME

### 8.2 Usar Cloudflare (Grátis)

1. Criar conta cloudflare.com
2. Adicionar site
3. Mudar nameservers no Hostinger
4. Cloudflare → DNS
5. Adicionar:
   - **Type:** CNAME
   - **Name:** api
   - **Content:** seu-app-xxxxxx.up.railway.app
   - **Proxy:** DNS only

Resultado: `https://api.seu-dominio-hostinger.com`

---

## ✅ Passo 9: Monitoramento

### Railway Dashboard
- https://railway.app/dashboard
- Ver logs em tempo real
- Monitoring
- Alert se crash

### Hostinger cPanel
- Estatísticas de tráfego
- Logs de erro
- Performance

---

## 🆘 Troubleshooting

### Frontend não carrega
```
❌ Erro: Cannot GET /
✅ Solução: Verificar .htaccess em public_html/
```

### CORS Error
```
❌ Erro: Access-Control-Allow-Origin
✅ Solução: Adicionar origem em ALLOWED_ORIGINS no Railway
```

### API não responde
```
❌ Erro: Failed to fetch
✅ Solução: Railway down? Ver logs em railway.app dashboard
```

### Menu não carrega
```
❌ Erro: Erro ao carregar menu
✅ Solução: API retornando erro? Testar endpoint direto
```

---

## 📊 Custo Estimado

| Serviço | Plano | Custo/mês |
|---------|-------|-----------|
| Hostinger Single | Single | R$ 15-30 |
| Railway | Hobby (FREE) | R$ 0 |
| Railway | Hobby (pago) | R$ 30+ |
| **Total** | | **R$ 15-60** |

Railway oferece FREE tier com limites, ótimo para começar!

---

## ✅ Checklist Final

- [ ] TypeScript OK (pnpm run check)
- [ ] Build OK (pnpm run build)
- [ ] Railway conta criada
- [ ] Railway app em produção
- [ ] Env vars Railway configuradas
- [ ] Frontend em Hostinger
- [ ] .htaccess em public_html
- [ ] Domínio Hostinger apontando
- [ ] API URLs atualizadas
- [ ] CORS testado
- [ ] Carrinho funcionando
- [ ] Integrações (WhatsApp, iFood) OK

---

**Parabéns! 🎉 Seu site está em produção!**

Agora manter:
- Certificado SSL ✅ (automático Hostinger + Railway)
- Backups ✅ (automático ambos)
- Monitoramento ✅ (ambos dashboards)

