# JR Auto Center - Website

Site institucional desenvolvido com React, Vite e TailwindCSS.

## 🚀 Tecnologias

- **Frontend:** React 19 + TypeScript
- **Build:** Vite 7
- **Estilização:** TailwindCSS 4 + Radix UI
- **Backend:** Express (Node.js)
- **Deploy:** Vercel

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build de produção
pnpm build
```

## 🌐 Deploy no Vercel

### Opção 1: Deploy via Vercel CLI (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

### Opção 2: Deploy via GitHub

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Add New Project"
4. Importe o repositório do GitHub
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `pnpm install`

## 📝 Estrutura do Projeto

```
.
├── client/              # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas do site
│   │   └── lib/         # Utilitários
│   └── public/          # Assets estáticos
├── server/              # Backend Express
│   └── index.ts         # Servidor API
├── dist/                # Build de produção
└── vercel.json          # Configuração Vercel
```

## 🎯 Scripts Disponíveis

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm build` - Cria build de produção
- `pnpm preview` - Preview do build de produção
- `pnpm check` - Verifica tipos TypeScript

## 🔧 Configuração de Ambiente

Copie `.env.example` para `.env` e configure as variáveis necessárias.

## ⚠️ Importante

A pasta `bkp/` contém arquivos de documentação e configurações antigas que foram movidos para manter o projeto limpo. Esses arquivos não são necessários para o funcionamento do site.

## 📄 Licença

MIT
