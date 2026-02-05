# ⚡ COMANDOS RÁPIDOS - Hostinger + Railway

## 🏃 Quick Start (Copie e Cole)

### 1. Preparar Projeto
```bash
pnpm install --save-dev @types/node @types/vite
pnpm run check
pnpm run build
```

### 2. Verificar Build
```bash
# Deve criar dist/ com:
ls dist/public/index.html      # ✅ Frontend pronto
ls dist/index.js               # ✅ Backend pronto
```

### 3. Deploy Railway (via CLI)
```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy (na pasta do projeto)
railway up
```

### 4. Pegar URL Railway
```bash
railway open
# Copiar URL que aparecer
# Exemplo: https://seu-app-xxxxxx.up.railway.app
```

### 5. Configurar Env no Railway
No dashboard Railway:
- Project → Variables
- Adicionar:
```
VITE_OAUTH_PORTAL_URL=https://seu-oauth-portal.com
VITE_APP_ID=seu-app-id
VITE_FRONTEND_FORGE_API_KEY=sua-api-key
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev
NODE_ENV=production
ALLOWED_ORIGINS=https://seu-dominio-hostinger.com
```

### 6. Build Frontend FINAL
```bash
pnpm run build
# Usar dist/public/ para upload
```

### 7. Upload em Hostinger (via cPanel)
```
1. Abrir: cPanel → File Manager
2. Navegar: public_html/
3. Fazer upload de dist/public/*
4. Ou fazer ZIP e extrair
```

### 8. Criar .htaccess
Em `public_html/.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [QSA,L]
</IfModule>
```

### 9. Testar
```bash
# Frontend
open https://seu-dominio-hostinger.com

# Backend
curl https://seu-app-xxxxxx.up.railway.app/api/health

# CORS
curl -X OPTIONS \
  -H "Origin: https://seu-dominio-hostinger.com" \
  https://seu-app-xxxxxx.up.railway.app/api/health
```

---

## 🐛 Troubleshooting Rápido

### Railway não faz deploy
```bash
railway up --force
```

### Frontend retorna 404 em rotas
```
Verificar .htaccess em public_html/
Deve reescrever para index.html
```

### CORS Error
```
Adicionar em Railway → Variables:
ALLOWED_ORIGINS=https://seu-dominio-hostinger.com
Depois: railway up
```

### API não responde
```bash
# Verificar status
railway status

# Ver logs
railway logs

# Restart
railway restart
```

### Site muito lento
```
Verificar Railway:
- Memory usage
- CPU usage
- Network

Pode precisar upgrade do Railway
```

---

## 🔍 Verificação Rápida

```bash
# TypeScript OK?
pnpm run check

# Build OK?
pnpm run build && echo "✅ Build OK"

# Arquivos criados?
test -f dist/index.js && echo "✅ Backend OK"
test -f dist/public/index.html && echo "✅ Frontend OK"
```

---

## 📱 Testar em Celular

```bash
# Descobrir IP local
ipconfig getifaddr en0              # Mac
hostname -I | awk '{print $1}'     # Linux
ipconfig                            # Windows (procure IPv4)

# Acessar de outro dispositivo:
http://<SEU_IP>:3000
```

---

## 🚀 Deploy Automático Railway

Se usar GitHub:

```bash
# 1. Fazer push para main
git add .
git commit -m "Deploy"
git push

# 2. Railway faz deploy automático!
# Ver em: railway.app → Deployments

# Sem fazer nada a mais!
```

---

## 💾 Backup Rápido

```bash
# Backup local
tar -czf kinpai-backup-$(date +%Y%m%d).tar.gz \
  client/ server/ .env.production

# Backup Hostinger (cPanel)
# Backup → Download Backups

# Backup Railway (automático)
# Histórico de deployments em railway.app
```

---

## 📊 Monitoramento Rápido

```bash
# Railway
railway status

# Hostinger (via cPanel)
# Disk usage: cPanel → File Manager
# Tráfego: cPanel → Bandwidth

# Frontend (DevTools)
F12 → Network → Ver requisições

# Backend (Logs Railway)
railway logs --tail 100
```

---

## 🔐 Segurança Rápida

```bash
# Verificar certificado SSL
curl -I https://seu-dominio-hostinger.com
# Procure por: "HTTP/2 200" ou "HTTP/1.1 200"

# Verificar CORS
curl -I -X OPTIONS https://seu-app-railway.up.railway.app/api
# Procure por: "Access-Control-Allow-Origin"

# Verificar headers
curl -I https://seu-dominio-hostinger.com | grep -i "x-"
```

---

## 📞 Suporte Rápido

| Problema | Solução |
|----------|---------|
| Railway down | `railway status` ou railway.app/status |
| Hostinger SSH | cPanel → Terminal |
| DNS não funciona | Aguardar 24-48h ou ver cPanel |
| Email não funciona | cPanel → Email Accounts |
| Domínio não aponta | Verificar nameservers no Hostinger |

---

## 🎯 Checklist Minimalista

- [ ] `pnpm run build` ✅
- [ ] `railway up` ✅
- [ ] Upload em Hostinger ✅
- [ ] .htaccess criado ✅
- [ ] CORS testado ✅
- [ ] `https://seu-dominio-hostinger.com` ✅

**PRONTO!** 🎉

---

## 📌 Comandos Que Mais Usa

```bash
# Desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Deploy Railway
railway up

# Ver logs Railway
railway logs

# Verificar saúde API
curl https://seu-app-xxxxxx.up.railway.app/api/health

# Atualizar código (GitHub)
git push
# Railway faz deploy automaticamente
```

---

**Salve este arquivo e use como referência! 📌**

Qualquer dúvida, volta aqui!

