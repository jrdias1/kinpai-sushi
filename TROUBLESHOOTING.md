# 🔧 QUICK FIXES & TROUBLESHOOTING

## Problemas Comuns e Soluções Rápidas

---

## 1. Build Falha

### Erro: "Cannot find module 'server/index.ts'"

```bash
# Causa: Pasta server não existe
# Solução: Já criada! Atualizar do git

# Se ainda falhar:
mkdir -p server
touch server/index.ts
```

### Erro: "Cannot find type definitions for 'node'"

```bash
# Solução:
pnpm install --save-dev @types/node @types/vite

# Depois:
pnpm run check
```

---

## 2. Variáveis de Ambiente

### Mapa não carrega

```bash
# Erro: "API_KEY is undefined"

# Solução:
cp .env.example .env.production

# Editar:
VITE_FRONTEND_FORGE_API_KEY=sua-api-key-aqui
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev

# Rebuild:
pnpm run build
```

### OAuth não funciona

```bash
# Erro: Login redirecionando errado

# Solução:
VITE_OAUTH_PORTAL_URL=https://seu-oauth-portal.com
VITE_APP_ID=seu-app-id

# Verificar .env.production está carregado
echo $VITE_OAUTH_PORTAL_URL  # Deve mostrar valor
```

---

## 3. Performance

### Site lento carregando menu

```tsx
// Problema: 1500 items sendo renderizados

// Solução 1: Lazy Load
import { Suspense } from 'react';

<Suspense fallback={<div>Carregando...</div>}>
  <MenuList items={items} />
</Suspense>

// Solução 2: Paginação
const [page, setPage] = useState(0);
const ITEMS_PER_PAGE = 20;
const paginated = items.slice(
  page * ITEMS_PER_PAGE,
  (page + 1) * ITEMS_PER_PAGE
);

// Solução 3: Virtual List
import { FixedSizeList } from 'react-window';
```

### Build muito grande

```bash
# Verificar size
pnpm run build

# Analisar:
npm install -g source-map-explorer
source-map-explorer dist/public/index-*.js

# Otimizar:
1. Code splitting
2. Lazy loading de rotas
3. Remover dependências não-usadas
```

---

## 4. Servidor

### Aplicação não inicia com PM2

```bash
# Verificar erro
pm2 logs kinpai-web

# Testar node diretamente
node dist/index.js

# Se falha, verificar:
1. Node version (deve ser 20+)
   node --version

2. Arquivo dist existe?
   ls -la dist/

3. Porta 3000 está livre?
   lsof -i :3000

4. Todas as dependências instaladas?
   pnpm install --prod
```

### Porta 3000 já está em uso

```bash
# Encontrar processo
sudo lsof -i :3000

# Matar
sudo kill -9 <PID>

# Ou mudar porta em ecosystem.config.cjs
env: {
  PORT: 3001  // mudou para 3001
}
```

---

## 5. Nginx

### Nginx retorna 502 Bad Gateway

```bash
# Verificar se backend está rodando
pm2 status

# Se não está:
pm2 restart kinpai-web

# Verificar logs nginx
sudo tail -100 /var/log/nginx/kinpai.error.log

# Verificar se localhost:3000 responde
curl http://localhost:3000/api/health

# Se não responder, aplicação está down
```

### HTTPS não funciona

```bash
# Verificar certificado
sudo certbot certificates

# Se expirado, renovar:
sudo certbot renew

# Se certificate path errado no nginx
sudo nano /etc/nginx/sites-available/kinpai-sushi
# Verificar paths em ssl_certificate

# Recarregar nginx
sudo systemctl reload nginx
```

### Static files retornam 404

```bash
# Verificar se dist/public existe
ls -la dist/public/

# Se vazio, fazer build
pnpm run build

# Verificar permissões
sudo chown -R www-data:www-data /var/www/kinpai

# Recarregar nginx
sudo systemctl reload nginx
```

---

## 6. Banco de Dados (quando implementar)

### Conexão recusada

```bash
# Verificar DATABASE_URL
echo $DATABASE_URL

# Testar conexão
psql $DATABASE_URL -c "SELECT 1"

# Se falha:
1. BD está rodando? (ps aux | grep postgres)
2. Firewall bloqueando? (sudo ufw status)
3. Usuário/senha correto?
```

### Migrations falhando

```bash
# Se usar Prisma
pnpm run prisma:migrate

# Se usar TypeORM
pnpm run typeorm:migrate

# Rollback se necessário
# (Depende da ferramenta usada)
```

---

## 7. SSL/TLS

### Certificado vencido

```bash
# Verificar data
sudo certbot certificates

# Renovar manualmente
sudo certbot renew --force-renewal

# Testar renovação automática
sudo certbot renew --dry-run

# Verificar data agora
sudo certbot certificates
```

### Insecure content warnings

```bash
# Problema: Conteúdo HTTP em HTTPS

// src/components/Image.tsx - FIX:
<img src={src.replace('http://', 'https://')} />

// Ou em nginx:
proxy_set_header X-Forwarded-Proto $scheme;
```

---

## 8. Logs & Debugging

### Ver logs da aplicação

```bash
# PM2
pm2 logs kinpai-web

# Tail em tempo real
pm2 logs kinpai-web --lines 50

# Apenas errors
pm2 logs kinpai-web --err
```

### Verificar logs do Nginx

```bash
# Access log
sudo tail -f /var/log/nginx/kinpai.access.log

# Error log
sudo tail -f /var/log/nginx/kinpai.error.log

# Buscar 404s
grep " 404 " /var/log/nginx/kinpai.access.log | wc -l
```

### Análise de requisições

```bash
# Ver requests mais frequentes
cat /var/log/nginx/kinpai.access.log | \
  awk '{print $7}' | sort | uniq -c | sort -rn | head -10

# Ver IPs que mais acessam
cat /var/log/nginx/kinpai.access.log | \
  awk '{print $1}' | sort | uniq -c | sort -rn | head -10
```

---

## 9. Monitoramento

### Verificar saúde da aplicação

```bash
# Health check simples
curl https://seu-dominio.com/api/health

# Monitoramento PM2
pm2 monit

# Uptime checker online
# Usar: https://uptimerobot.com
# Configurar URL: https://seu-dominio.com/api/health
```

### Alertas de alta memória

```bash
# PM2 alertará automaticamente se:
# - Memory > 1GB
# - Restart > 5x em 1 min
# - Sem responsivo > 1 min

# Ver alerts
pm2 logs
```

---

## 10. Segurança

### Desabilitar directory listing

```nginx
# Já feito em nginx.conf
location / {
    autoindex off;
}
```

### Não expor informações sensíveis

```typescript
// ❌ ERRADO
res.status(500).json({ error: err.stack });

// ✅ CORRETO
res.status(500).json({ 
  error: 'Internal server error' 
});

// Debug apenas em dev
if (process.env.NODE_ENV === 'development') {
  console.log(err.stack);
}
```

### Rate limiting (implementar)

```typescript
// server/index.ts
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## 11. Quick Commands

```bash
# Build & Test
pnpm install
pnpm run check
pnpm run build

# Local preview
pnpm run preview

# Production start
pm2 start ecosystem.config.cjs --env production

# Monitor
pm2 monit
pm2 logs

# Health check
curl https://seu-dominio.com/api/health

# Restart
pm2 restart kinpai-web

# Stop
pm2 stop kinpai-web

# Reload (graceful)
pm2 reload kinpai-web

# View status
pm2 status
pm2 info kinpai-web
```

---

## 12. SOS - Aplicação Down

```bash
# 1. Verificar status
pm2 status

# 2. Ver último erro
pm2 logs kinpai-web --err

# 3. Tentar restart
pm2 restart kinpai-web

# 4. Se ainda falhar, usar start
pm2 stop kinpai-web
pm2 delete kinpai-web
pm2 start ecosystem.config.cjs --env production

# 5. Verificar Nginx
sudo systemctl restart nginx

# 6. Teste final
curl https://seu-dominio.com/
```

---

## 📞 Recursos Úteis

- PM2: https://pm2.keymetrics.io
- Nginx: https://nginx.org/en/docs/
- Certbot: https://certbot.eff.org/
- Node.js: https://nodejs.org/en/docs/
- Express: https://expressjs.com/
- Vite: https://vitejs.dev/

---

**Última atualização:** 4 de fevereiro de 2026
**Versão:** 1.0

