# 📦 Estrutura do Projeto - O que Transferir

```
kinpai-sushi-web/
├── 📂 client/                    ✅ TRANSFERIR
│   ├── public/
│   │   ├── menu_data.json
│   │   ├── images/
│   │   │   ├── logo-kinpai.jpg   ✅ (novo!)
│   │   │   ├── chef/
│   │   │   └── ...
│   │   └── __manus__/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   └── hooks/
│   └── tsconfig.json
│
├── 📂 server/                    ✅ TRANSFERIR
│   ├── index.ts
│   └── tsconfig.json
│
├── 📂 shared/                    ✅ TRANSFERIR
│   └── const.ts
│
├── 📂 patches/                   ✅ TRANSFERIR
│   └── wouter@3.7.1.patch
│
├── 📂 dist/                      ✅ TRANSFERIR (pronto para produção!)
│   ├── public/
│   │   ├── index.html
│   │   └── assets/
│   └── index.js
│
├── 📄 package.json               ✅ TRANSFERIR
├── 📄 pnpm-lock.yaml             ✅ TRANSFERIR (importante!)
├── 📄 tsconfig.json              ✅ TRANSFERIR
├── 📄 vite.config.ts             ✅ TRANSFERIR
├── 📄 .env.example               ✅ TRANSFERIR
├── 📄 .gitignore                 ✅ TRANSFERIR
│
└── ❌ node_modules/              NÃO TRANSFERIR
```

---

## 📊 Tamanhos Aproximados

| Pasta | Tamanho | Transferir? |
|-------|---------|-----------|
| `client/` | ~2 MB | ✅ Sim |
| `server/` | ~50 KB | ✅ Sim |
| `shared/` | ~5 KB | ✅ Sim |
| `dist/` | ~900 KB | ✅ Sim |
| `node_modules/` | ~500+ MB | ❌ Não (reinstalar) |
| **TOTAL SEM node_modules** | **~3 MB** | ✅ |

---

## 🚀 Arquivo Necessários para Rodar

### Mínimo Obrigatório:
- ✅ `package.json` 
- ✅ `pnpm-lock.yaml`
- ✅ `client/` (todo o conteúdo)
- ✅ `server/` (todo o conteúdo)

### Muito Recomendado:
- ✅ `dist/` (vem pronto, não precisa fazer build)
- ✅ `tsconfig.json`
- ✅ `vite.config.ts`

### Opcional:
- ⚠️ `.git/` (se quiser histórico)
- ⚠️ Documentação `.md`

---

## 💾 Método de Transferência Recomendado

### Opção 1: ZIP (Mais Fácil)
```powershell
# No PC original:
Compress-Archive -Path "c:\Users\...\Nova pasta" `
                 -DestinationPath "kinpai-sushi.zip" `
                 -Exclude "node_modules",".git",".vscode"

# Transferir: kinpai-sushi.zip
# No novo PC: Extrair e pronto!
```

### Opção 2: GitHub (Melhor)
```bash
# Se tiver GitHub:
git push
# No novo PC:
git clone seu-repositorio
pnpm install
```

### Opção 3: Pen Drive/OneDrive
```
1. Copiar pasta inteira (sem node_modules)
2. Transferir
3. Rodar: pnpm install
```

---

## ✅ Verificação Pós-Transferência

Após transferir, abra PowerShell e execute:

```bash
cd "caminho/do/projeto"
pnpm install          # Instala dependências
pnpm run check        # Verifica TypeScript
pnpm run build        # Constrói projeto
node dist/index.js    # Roda servidor
```

Se tudo der ✅, acesse: **http://localhost:3000**

---

## 🎯 Status Atual

- ✅ Código compilado
- ✅ Build gerado em `dist/`
- ✅ Logo atualizado
- ✅ Texto "Kinpai Sushi" aplicado
- ✅ Todas as dependências listadas em `pnpm-lock.yaml`
- ✅ Pronto para transferência!

**Tamanho total para transferir: ~3 MB** (sem node_modules)

