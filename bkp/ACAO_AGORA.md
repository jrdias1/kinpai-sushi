# 🎯 PLANO DE AÇÃO - O QUE FAZER AGORA

## Passo 1: HOJE (Agora) - 5 Minutos

```
1. Abra: START_HERE.md
2. Leia: README_DEPLOY.md (visual gráfico)
3. Salve: HOSTINGER_RAILWAY_CHECKLIST.md (vai usar)
```

---

## Passo 2: HOJE (Próximos 30 Minutos)

### A. Preparar Projeto
```bash
cd "c:\Users\Jr Dias\Documents\Jf auto center\jr\Nova pasta"
pnpm install --save-dev @types/node @types/vite
pnpm run check
pnpm run build
```

**Verificar:**
- ✅ Sem erros TypeScript
- ✅ Criou pasta `dist/`
- ✅ Criou `dist/public/index.html`
- ✅ Criou `dist/index.js`

### B. Criar Conta Railway
1. Ir para: https://railway.app
2. Clicar "Start for Free"
3. Login com GitHub
4. Autorizar Railway

### C. Deploy em Railway
```bash
npm i -g @railway/cli
railway login
railway up
```

**Verificar:**
- ✅ Deploy sucesso
- ✅ Railway gerou URL (ex: `https://seu-app-xxxxxx.up.railway.app`)
- ✅ Copie essa URL!

### D. Configurar Variáveis Railway
No dashboard Railway:
- Ir para: Your App → Variables
- Adicionar cada uma:

```
VITE_OAUTH_PORTAL_URL = https://seu-oauth-portal.com
VITE_APP_ID = seu-app-id
VITE_FRONTEND_FORGE_API_KEY = sua-api-key-google-maps
VITE_FRONTEND_FORGE_API_URL = https://forge.butterfly-effect.dev
NODE_ENV = production
ALLOWED_ORIGINS = https://seu-dominio-hostinger.com
```

- Clicar "Deploy"

---

## Passo 3: HOJE (Próximos 10 Minutos)

### A. Upload em Hostinger
1. Login: https://hostinger.com
2. Dashboard → Meu Hosting
3. Gerenciador de Arquivos
4. Abrir pasta: `public_html/`
5. **Deletar** tudo que estiver lá
6. Upload de: `dist/public/*`
   - Ou fazer ZIP de `dist/public/` e extrair

### B. Criar .htaccess
No Hostinger, em `public_html/`:
1. Criar novo arquivo: `.htaccess`
2. Copiar conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [QSA,L]
</IfModule>
```

3. Salvar

---

## Passo 4: HOJE (Próximos 5 Minutos) - Testar

### A. Testar Frontend
```
Abrir: https://seu-dominio-hostinger.com
Clicar em "Menu"
Navegar entre páginas
✅ Deve funcionar!
```

### B. Testar Backend
```bash
curl https://seu-app-xxxxxx.up.railway.app/api/health
```

**Resposta esperada:**
```json
{
  "status": "ok",
  "timestamp": "2026-02-04T...",
  "environment": "production"
}
```

### C. Testar CORS
Abrir DevTools (F12) e executar:
```javascript
fetch('https://seu-app-xxxxxx.up.railway.app/api/health')
  .then(r => r.json())
  .then(d => console.log('✅ CORS OK:', d))
  .catch(e => console.error('❌ Erro:', e))
```

✅ Deve mostrar: `✅ CORS OK: { status: "ok" }`

---

## ✅ PRONTO!

Se tudo passou nos testes, **site está LIVE**! 🎉

```
https://seu-dominio-hostinger.com ✅ (Frontend)
https://seu-app-xxxxxx.up.railway.app ✅ (Backend)
```

---

## 🆘 Se Algo Falhar

### Frontend não carrega
→ Ler: **TROUBLESHOOTING.md** (seção "Frontend não carrega")

### CORS Error
→ Ler: **TROUBLESHOOTING.md** (seção "CORS Error")

### API não responde
→ Ler: **TROUBLESHOOTING.md** (seção "API não responde")

### Outro problema
→ Usar: **QUICK_COMMANDS.md** (tem tudo)

---

## 📋 Checklist Final

```
[ ] Projeto buildado com sucesso
[ ] Railway conta criada
[ ] Railway app deployado
[ ] Env vars Railway configuradas
[ ] Frontend uploaded em Hostinger
[ ] .htaccess criado em public_html
[ ] https://seu-dominio-hostinger.com carrega
[ ] /api/health responde
[ ] CORS teste passou
[ ] Menu funciona
[ ] Carrinho funciona
[ ] Integrações funcionam
```

Quando TODOS estiverem marcados ✅ = **READY FOR PRODUCTION**

---

## 🎯 Resultado Final

```
✅ Site carregando
✅ Backend respondendo
✅ CORS funcionando
✅ Menu carregando
✅ Carrinho salvando
✅ WhatsApp/iFood linkando
✅ Google Maps funcionando

🎉 PARABÉNS! Seu site está em produção!
```

---

## 📞 Agora Que Está Pronto

### Monitoramento Diário
```bash
# Verificar saúde
curl https://seu-app-xxxxxx.up.railway.app/api/health

# Ver logs Railway
railway logs --tail 100
```

### Updates Futuros
```bash
# Fazer mudanças no código
# Fazer git push
# Railway faz deploy automático!
```

### Manutenção
- SSL automático (Hostinger + Railway)
- Backups automáticos (Hostinger + Railway)
- Logs disponíveis (ambos dashboards)

---

## 🚀 Você está pronto!

**Tempo total: ~45 minutos**  
**Dificuldade: ⭐⭐ (Fácil)**  
**Custo: R$ 15-30/mês**  

Qualquer dúvida, volte aqui e leia o arquivo específico!

Boa sorte! 🍀

