# 🚀 PREPARAR PARA PRODUÇÃO - Hostinger + Railway

## ✅ Fase 1: Testes Locais (Concluída!)

Seu site está **rodando perfeitamente** em http://localhost:3000

✅ Frontend carregando  
✅ Backend respondendo  
✅ API disponível  

---

## 🎯 Fase 2: Preparação para Produção

Agora vamos deixar pronto para fazer o deploy final.

### Passo 1: Criar arquivo .env.production

**Localização:** `c:\Users\Jr Dias\Documents\Jf auto center\jr\Nova pasta\.env.production`

**Conteúdo:**
```env
# OAuth / Autenticação
VITE_OAUTH_PORTAL_URL=https://seu-oauth-portal.com
VITE_APP_ID=seu-app-id

# Google Maps
VITE_FRONTEND_FORGE_API_KEY=sua-google-maps-api-key
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev

# Ambiente
NODE_ENV=production

# CORS para comunicação frontend + backend
ALLOWED_ORIGINS=https://seu-dominio-hostinger.com
```

**Preencha:**
- `VITE_OAUTH_PORTAL_URL` - URL do seu portal OAuth
- `VITE_APP_ID` - ID da sua aplicação
- `VITE_FRONTEND_FORGE_API_KEY` - Chave API do Google Maps
- `ALLOWED_ORIGINS` - Seu domínio em Hostinger

### Passo 2: Verificar Arquivos de Configuração

Verifique se esses arquivos existem:

```
✅ .gitignore                  (criado)
✅ server/index.ts              (criado com CORS)
✅ shared/const.ts              (criado)
✅ client/index.html            (criado)
✅ patches/wouter@3.7.1.patch   (criado)
✅ dist/                         (build pronto)
✅ dist/public/                  (frontend)
✅ dist/index.js                 (backend)
```

### Passo 3: Arquivos Prontos para Produção

Esses arquivos já existem e estão prontos:

```
✅ .env.example                 (template)
✅ Dockerfile                   (para Docker)
✅ docker-compose.yml           (Docker local)
✅ nginx.conf.example           (Nginx config)
✅ ecosystem.config.cjs         (PM2 config)
```

---

## 📋 Checklist Pré-Deploy

```
[ ] .env.production preenchido com valores reais
[ ] Variáveis de ambiente revisadas
[ ] Build funcionando: pnpm run build
[ ] Servidor rodando: node dist/index.js
[ ] Frontend carrega: http://localhost:3000
[ ] API responde: http://localhost:3000/api/health
[ ] Sem erros no console
[ ] Menu funciona
[ ] Carrinho funciona
[ ] Rotas funcionam
```

---

## 🔐 Dados Sensíveis - IMPORTANTE

### ⚠️ NÃO faça commit de:
- `.env.production` (tem dados sensíveis)
- Chaves API
- Dados de autenticação

### ✅ Use:
- `.env.example` como template
- `.gitignore` já configurado
- Variáveis de ambiente via Railway

---

## 📦 Arquivos para Fazer Upload

### Em Hostinger (Frontend):
```
dist/public/
├── index.html
├── assets/
│   ├── index-CrWUHzcG.js
│   └── index-C2T0hYyI.css
├── menu_data.json
└── images/
```

### Em Railway (Backend):
```
Fazer push para GitHub
Railway faz deploy automático
```

---

## 🌐 URLs Finais

Depois de fazer deploy:

```
Frontend: https://seu-dominio-hostinger.com
Backend:  https://seu-app-xxxxxx.up.railway.app
API:      https://seu-app-xxxxxx.up.railway.app/api
```

---

## 🔄 Processo de Deploy

### 1. GitHub (se usar)
```bash
git add .
git commit -m "Production ready"
git push origin main
```

### 2. Railway
- Conectar repositório GitHub
- Railway faz deploy automático

### 3. Hostinger
- Upload `dist/public/*` via cPanel
- Criar `.htaccess` para SPA routing

### 4. DNS
- Apontar domínio para Hostinger

### 5. Testar
- Frontend: https://seu-dominio-hostinger.com
- API: https://seu-app-railway.up.railway.app/api/health

---

## 📊 Resumo Pronto para Produção

| Item | Status |
|------|--------|
| Código | ✅ Pronto |
| Build | ✅ Funciona |
| Server | ✅ Rodando |
| Env vars | ⏳ Preencher |
| Deploy | ⏳ Próximo |
| Domínio | ⏳ Hostinger |

---

## 🎯 Próximo Passo

👉 **Seguir:** `HOSTINGER_RAILWAY_CHECKLIST.md` (9 passos finais)

Tempo: ~40 minutos  
Resultado: Site em produção! 🚀

---

## 💡 Se Precisa Mais Informações

- Build issues? → Ver `TROUBLESHOOTING.md`
- Comandos? → Ver `QUICK_COMMANDS.md`
- Detalhes técnicos? → Ver `HOSTINGER_SOLUTION.md`

---

**Seu site está pronto para o mundo! 🌍**

Vamos fazer o deploy? 🚀

