# 🚀 Guia de Deployment - Kinpai Sushi Web

## Pré-requisitos

- Node.js 20+ instalado
- PNPM instalado
- Servidor Linux (Ubuntu recomendado)
- Nginx instalado
- Git instalado
- Domínio configurado
- SSL Certificate (Let's Encrypt)

---

## 1. Preparação do Servidor

### 1.1 Atualizar sistema
```bash
sudo apt update
sudo apt upgrade -y
```

### 1.2 Instalar Node.js e PNPM
```bash
# Node.js (usando NVM)
curl -fsSL https://get.nvm.sh | bash
nvm install 20
nvm use 20

# PNPM
npm install -g pnpm
```

### 1.3 Instalar PM2 globalmente
```bash
npm install -g pm2
pm2 startup
pm2 save
```

---

## 2. Setup do Projeto

### 2.1 Clonar repositório
```bash
cd /home/ubuntu
git clone https://github.com/seu-repo/kinpai-web.git
cd kinpai-web
```

### 2.2 Instalar dependências
```bash
pnpm install
```

### 2.3 Configurar variáveis de ambiente
```bash
# Copiar arquivo de exemplo
cp .env.example .env.production

# Editar com valores reais
nano .env.production

# Variáveis obrigatórias:
# VITE_OAUTH_PORTAL_URL
# VITE_APP_ID
# VITE_FRONTEND_FORGE_API_KEY
# VITE_FRONTEND_FORGE_API_URL
```

### 2.4 Validar TypeScript
```bash
pnpm run check
```

### 2.5 Build do projeto
```bash
pnpm run build
```

Verificar se criou: `dist/public/` e `dist/index.js`

---

## 3. Configuração de SSL/TLS

### 3.1 Instalar Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 3.2 Obter certificado
```bash
# Confirme que seu domínio aponta para este servidor primeiro!
sudo certbot certonly --standalone -d seu-dominio.com -d www.seu-dominio.com
```

Certificados serão salvos em: `/etc/letsencrypt/live/seu-dominio.com/`

### 3.3 Renovação automática
```bash
# Testar renovação
sudo certbot renew --dry-run

# Adicionar ao cron (já feito automaticamente)
sudo systemctl enable certbot.timer
```

---

## 4. Configuração Nginx

### 4.1 Copiar configuração
```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/kinpai-sushi

# Editar:
sudo nano /etc/nginx/sites-available/kinpai-sushi

# Alterar:
# - server_name: seu-dominio.com
# - ssl_certificate path
# - root path
```

### 4.2 Ativar site
```bash
sudo ln -s /etc/nginx/sites-available/kinpai-sushi /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Desativar default
```

### 4.3 Testar configuração
```bash
sudo nginx -t
```

### 4.4 Iniciar Nginx
```bash
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```

---

## 5. Iniciar Aplicação

### 5.1 Com PM2
```bash
pm2 start ecosystem.config.cjs --env production
pm2 save
```

### 5.2 Monitorar
```bash
pm2 monit
pm2 logs kinpai-web
```

### 5.3 Verificar saúde
```bash
# Deve retornar { status: "ok" }
curl https://seu-dominio.com/api/health
```

---

## 6. Configuração de Logging

### 6.1 Criar diretório de logs
```bash
mkdir -p ~/kinpai-web/logs
chmod 755 ~/kinpai-web/logs
```

### 6.2 Configurar rotação de logs
```bash
sudo nano /etc/logrotate.d/kinpai-web

# Adicionar:
/home/ubuntu/kinpai-web/logs/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
}

sudo logrotate -f /etc/logrotate.d/kinpai-web
```

---

## 7. Verificações Finais

### 7.1 Health Checks
```bash
# API
curl -I https://seu-dominio.com/api/health

# Frontend
curl -I https://seu-dominio.com/

# Verificar certificado SSL
curl -I https://seu-dominio.com/ --verbose

# Testar SSL rating
# Acesse: https://www.ssllabs.com/ssltest/
```

### 7.2 Performance
```bash
# Verificar load médio
uptime

# Verificar uso de memória
free -h

# Verificar processos Node
pm2 status
```

### 7.3 Segurança
```bash
# Verificar portas abertas
sudo netstat -tlnp | grep LISTEN

# Apenas 80 (HTTP) e 443 (HTTPS) devem ser públicos
```

---

## 8. Monitoramento Contínuo

### 8.1 PM2 Plus (Monitoramento em Nuvem)
```bash
pm2 plus  # Seguir instruções
```

### 8.2 Alertas
```bash
# PM2 alertará sobre crashes, memory leaks, etc
pm2 set pm2:api on
pm2 web  # Dashboard em http://localhost:9615
```

### 8.3 Backup
```bash
# Backup do código e env
tar -czf kinpai-web-backup-$(date +%Y%m%d).tar.gz \
  /home/ubuntu/kinpai-web/.env.production \
  /home/ubuntu/kinpai-web/ecosystem.config.cjs

# Armazenar em local seguro
```

---

## 9. Troubleshooting

### Aplicação não inicia
```bash
# Verificar logs
pm2 logs kinpai-web

# Verificar variáveis de ambiente
cat ~/kinpai-web/.env.production

# Testar localmente
cd ~/kinpai-web
npm start
```

### Nginx retorna 502
```bash
# Verificar se aplicação está rodando
pm2 status

# Verificar porta 3000
sudo netstat -tlnp | grep 3000

# Verificar logs Nginx
sudo tail -f /var/log/nginx/kinpai.error.log
```

### Certificado SSL vencido
```bash
# Renovar manualmente
sudo certbot renew --force-renewal

# Reload Nginx
sudo systemctl reload nginx
```

### Alto uso de memória
```bash
# Verificar com PM2
pm2 monit

# Aumentar limite no ecosystem.config.cjs
max_memory_restart: "2G"  # De 1G para 2G

# Recarregar
pm2 restart all
```

---

## 10. Manutenção

### Updates Regulares
```bash
# Node packages
pnpm update

# Sistema
sudo apt update && sudo apt upgrade

# Rebuild
pnpm run build
pm2 restart all
```

### Monitoramento Diário
```bash
# Verificar status
pm2 status

# Verificar logs de erro
pm2 logs kinpai-web | grep ERROR

# Verificar certificado (dias até expiração)
sudo certbot certificates
```

### Backup Automático
```bash
# Adicionar ao crontab
crontab -e

# Adicionar linha:
0 2 * * * tar -czf /backups/kinpai-$(date +\%Y\%m\%d).tar.gz /home/ubuntu/kinpai-web && aws s3 cp /backups/kinpai-*.tar.gz s3://seu-bucket-backup/
```

---

## 11. Checklist de Deploy

- [ ] Node.js 20+ instalado
- [ ] PNPM instalado
- [ ] PM2 instalado globalmente
- [ ] Variáveis de ambiente configuradas
- [ ] Build executado com sucesso
- [ ] Certificado SSL válido
- [ ] Nginx configurado
- [ ] Aplicação iniciada com PM2
- [ ] Health check respondendo
- [ ] Domínio resolvendo
- [ ] HTTPS funcionando
- [ ] Logs monitorados
- [ ] Backup configurado

---

## Contatos & Suporte

- **Documentação Vite:** https://vitejs.dev
- **Documentação Express:** https://expressjs.com
- **Documentação PM2:** https://pm2.keymetrics.io
- **Documentação Nginx:** https://nginx.org/docs

---

**Deploy concluído! 🎉**

Sua aplicação Kinpai Sushi Web está rodando em produção.
