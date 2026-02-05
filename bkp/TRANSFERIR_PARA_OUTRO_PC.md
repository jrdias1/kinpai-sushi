# 🖥️ Guia: Transferir Projeto para Outro PC

## ✅ O que Você Precisa Transferir

### Pastas Essenciais:
```
✅ client/          (todo o conteúdo)
✅ server/          (todo o conteúdo)
✅ shared/          (todo o conteúdo)
✅ patches/         (dependências)
✅ dist/            (já está pronto!)
```

### Arquivos Essenciais:
```
✅ package.json
✅ pnpm-lock.yaml
✅ tsconfig.json
✅ vite.config.ts
✅ .env.example     (se existir)
```

### NÃO Precisa Transferir:
```
❌ node_modules/    (será reinstalado)
❌ .git/            (opcional)
❌ .vscode/         (opcional)
```

---

## 📋 Passo-a-Passo no Novo PC

### 1️⃣ Copiar Pasta do Projeto
```bash
# Copie toda a pasta "Nova pasta" para o novo PC
# Exemplo: C:\Users\[seu-usuario]\Desktop\kinpai-sushi
```

### 2️⃣ Instalar Dependências
```bash
# Abra PowerShell na pasta do projeto
cd "C:\Users\[seu-usuario]\Desktop\kinpai-sushi"

# Instale pnpm (se não tiver)
npm install -g pnpm

# Instale dependências
pnpm install
```

**Tempo esperado:** 2-3 minutos

### 3️⃣ Verificar TypeScript
```bash
pnpm run check
```

### 4️⃣ Fazer Build (Opcional, já vem pronto)
```bash
pnpm run build
```

### 5️⃣ Rodar Localmente
```bash
node dist/index.js
```

**Resultado esperado:**
```
🚀 Server running on port 3000
📍 Environment: development
🏥 Health check: http://localhost:3000/api/health
```

Abra: **http://localhost:3000**

---

## ⚡ Resumo Rápido

| Passo | Comando |
|-------|---------|
| 1 | `npm install -g pnpm` |
| 2 | `pnpm install` |
| 3 | `pnpm run build` (se quiser) |
| 4 | `node dist/index.js` |
| 5 | Abrir http://localhost:3000 |

---

## 🔧 Variáveis de Ambiente (Produção)

Se for usar em produção, crie `.env.production`:

```env
VITE_OAUTH_PORTAL_URL=https://seu-oauth-portal.com
VITE_APP_ID=seu-app-id
VITE_FRONTEND_FORGE_API_KEY=sua-api-key
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev
NODE_ENV=production
ALLOWED_ORIGINS=https://seu-dominio.com
```

---

## ✅ Checklist Final

- [ ] Pasta do projeto copiada
- [ ] `pnpm install` executado com sucesso
- [ ] Nenhum erro ao rodar `pnpm run check`
- [ ] `node dist/index.js` iniciou sem erros
- [ ] http://localhost:3000 abrindo no navegador
- [ ] Logo aparecendo no header
- [ ] Menu funcionando
- [ ] Carrinho salvando

---

## 📞 Se Algo Não Funcionar

1. **Erro: "pnpm: command not found"**
   ```bash
   npm install -g pnpm
   ```

2. **Erro: "node_modules não encontrado"**
   ```bash
   pnpm install
   ```

3. **Porta 3000 já em uso**
   ```bash
   # Mudar porta em server/index.ts linha ~15
   # Mude: const PORT = 3000;
   # Para: const PORT = 3001;
   ```

4. **Erro de TypeScript**
   ```bash
   pnpm run check
   # Resolve qualquer erro antes de fazer build
   ```

---

## 🎯 Status Atual do Projeto

✅ **Logo:** Atualizado para `logo-kinpai.jpg`  
✅ **Texto:** Mudado para "Kinpai Sushi"  
✅ **Build:** Compilado e testado  
✅ **Servidor:** Configurado e funcionando  
✅ **CORS:** Pronto para Railway  

**Tudo pronto para transferência!** 🚀

