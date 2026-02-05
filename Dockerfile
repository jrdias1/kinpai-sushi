FROM node:20-alpine

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm

# Copiar arquivos
COPY package.json pnpm-lock.yaml ./
COPY client ./client
COPY server ./server
COPY shared ./shared
COPY tsconfig.json ./
COPY vite.config.ts ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Build
RUN pnpm run build

# Remover devDependencies em produção
RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
