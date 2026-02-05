# 🚀 Guia de Deploy na Vercel

## Passos para Hospedar o Kinpai Sushi na Vercel (GRÁTIS)

### 1️⃣ **Criar Conta na Vercel**
- Acesse: https://vercel.com
- Clique em "Sign Up"
- Escolha "GitHub" para conectar sua conta

### 2️⃣ **Preparar o GitHub**
Faça isso no seu computador (Terminal/PowerShell):

```bash
# Entre na pasta do projeto
cd "C:\Users\Jr Dias\Documents\Jf auto center\jr\Nova pasta"

# Inicialize o Git (se ainda não fez)
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Preparação para Vercel"

# (IMPORTANTE) Mude o nome da branch para 'main' se ainda não fez
git branch -M main

# Adicione o repositório remoto (substitua SEU_USUARIO e SEU_REPO)
git remote add origin https://github.com/SEU_USUARIO/kinpai-sushi.git

# Suba o código
git push -u origin main
```

### 3️⃣ **Importar Projeto na Vercel**
- Acesse https://vercel.com/dashboard
- Clique em "Add New..." → "Project"
- Clique em "Import Git Repository"
- Procure por "kinpai-sushi" (ou seu nome de repo)
- Clique em "Import"

### 4️⃣ **Configurações da Vercel**
- **Framework Preset:** Vite (auto-detectado)
- **Build Command:** `pnpm build`
- **Output Directory:** `dist`
- **Environment Variables:** (deixe em branco por enquanto)
- Clique em "Deploy"

### 5️⃣ **Aguarde o Deploy** ⏳
- A Vercel vai fazer o build automaticamente
- Você verá logs em tempo real
- Quando terminar, verá "Congratulations! Your app is live"

### 6️⃣ **Acessar seu Site** 🎉
- Seu site estará em: `https://kinpai-sushi.vercel.app`
- Toda vez que você fizer push no GitHub, o site atualiza automaticamente!

---

## 📝 **Comandos Úteis**

```bash
# Ver status do Git
git status

# Fazer mudanças e commitar
git add .
git commit -m "Descrição das mudanças"
git push

# Ver histórico
git log --oneline
```

---

## ✅ **Checklist Final**

- [x] Arquivo `vercel.json` criado ✓
- [x] `.gitignore` configurado ✓
- [x] `package.json` com scripts corretos ✓
- [ ] Repositório GitHub criado (você faz)
- [ ] Conta Vercel criada (você faz)
- [ ] Deploy realizado (você faz)

---

## 🆘 **Se algo der errado**

1. **Build falha?**
   - Verifique os logs na Vercel
   - Rode `pnpm install && pnpm build` localmente

2. **Página em branco?**
   - Verifique se a pasta `dist` tem arquivos
   - Verifique os logs do navegador (F12)

3. **Imagens não aparecem?**
   - Certifique-se que `client/public/images/` tem as imagens
   - Git não ignora a pasta `public`

---

**Dúvidas? Envie os logs ou erro para análise!** 🎯
