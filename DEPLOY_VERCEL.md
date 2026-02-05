# 🚀 Guia Rápido de Deploy no Vercel

## ✅ Pré-requisitos

O projeto já está pronto para deploy! Todas as configurações foram otimizadas.

## 📋 Opções de Deploy

### **Opção 1: Vercel CLI (Mais Rápido)**

```powershell
# 1. Instalar Vercel CLI globalmente
npm install -g vercel

# 2. Fazer login no Vercel
vercel login

# 3. Navegar até a pasta do projeto
cd "c:\Users\Jr Dias\Documents\Jf auto center\jr\Nova pasta"

# 4. Fazer deploy de produção
vercel --prod
```

O Vercel CLI irá:
- Detectar automaticamente que é um projeto Vite
- Fazer build usando `pnpm build`
- Publicar os arquivos de `dist/public/`
- Retornar uma URL pública

---

### **Opção 2: Deploy via GitHub (Recomendado para auto-deploy)**

#### Passo 1: Criar repositório no GitHub

```powershell
# Inicializar git (se ainda não tiver)
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Preparando projeto para deploy no Vercel"

# Adicionar repositório remoto (substitua pelo seu)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git

# Fazer push
git push -u origin main
```

#### Passo 2: Conectar ao Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Faça login com sua conta
3. Clique em **"Import Project"**
4. Selecione o repositório do GitHub
5. Configure:
   - **Framework Preset:** Vite ✅ (detectado automaticamente)
   - **Build Command:** `pnpm build` ✅
   - **Output Directory:** `dist/public` ✅
   - **Install Command:** `pnpm install` ✅
6. Clique em **"Deploy"**

---

## 🎯 Após o Deploy

O Vercel irá:
- ✅ Instalar dependências
- ✅ Fazer build do projeto
- ✅ Publicar automaticamente
- ✅ Fornecer URL de produção (ex: `seu-projeto.vercel.app`)

### Comandos Úteis

```powershell
# Ver status do último deploy
vercel ls

# Ver logs do deploy
vercel logs

# Abrir projeto no dashboard
vercel --open
```

---

## 📁 Estrutura Atual (Otimizada)

```
.
├── client/          # Código fonte React
├── server/          # Backend Express (opcional)
├── dist/            # Build de produção
│   └── public/      # Frontend estático (deployado no Vercel)
├── bkp/             # Arquivos antigos (ignorados no deploy)
├── vercel.json      # Configuração Vercel ✅
├── .vercelignore    # Arquivos ignorados no deploy ✅
└── README.md        # Documentação ✅
```

---

## ⚠️ Observações Importantes

1. **Pasta `bkp/`**: Contém arquivos de documentação antigos. Não será enviada no deploy (configurado em `.vercelignore`)

2. **Build Local**: Já testado e funcionando:
   - ✅ `pnpm dev` - Desenvolvimento OK
   - ✅ `pnpm build` - Build de produção OK
   - ✅ Site rodando localmente sem erros

3. **Domínio Customizado**: Após deploy, você pode configurar um domínio próprio no dashboard do Vercel.

---

## 🆘 Troubleshooting

### Deploy falhou?

```powershell
# Limpar build e tentar novamente
Remove-Item -Recurse -Force dist
pnpm build
vercel --prod
```

### Erro de dependências?

```powershell
# Reinstalar dependências
Remove-Item -Recurse -Force node_modules
pnpm install
pnpm build
```

---

## ✨ Pronto para Deploy!

Execute apenas um comando:

```powershell
vercel --prod
```

Seu site estará online em segundos! 🎉
