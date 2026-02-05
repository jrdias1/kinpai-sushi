# Sistema de Permissões Administrativas

Este documento explica como funciona o sistema de permissões administrativas do Kinpai Sushi.

## 📧 Emails Autorizados

O sistema permite controlar quais emails têm acesso administrativo através de uma lista configurável.

### Email Autorizado Atual

- ✅ **sitekinpaisushibar@gmail.com** - Email principal com permissões administrativas

## 🔧 Configuração

### 1. Arquivo de Configuração

As permissões são gerenciadas através do arquivo `shared/admin-config.ts`:

```typescript
export const ALLOWED_ADMIN_EMAILS = [
  "sitekinpaisushibar@gmail.com",
];
```

### 2. Variável de Ambiente

Para produção, configure a variável de ambiente `ALLOWED_ADMIN_EMAILS`:

```bash
ALLOWED_ADMIN_EMAILS=sitekinpaisushibar@gmail.com,outro@email.com
```

> **Nota:** Separe múltiplos emails com vírgulas.

### 3. Vercel Configuration

No Vercel Dashboard, adicione a variável de ambiente:

1. Acesse seu projeto no Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione:
   - **Key:** `ALLOWED_ADMIN_EMAILS`
   - **Value:** `sitekinpaisushibar@gmail.com`
   - **Environments:** Production, Preview, Development

## 🚀 API Endpoint

### Verificar Permissão de Admin

```http
POST /api/auth/check-admin
Content-Type: application/json

{
  "email": "sitekinpaisushibar@gmail.com"
}
```

**Resposta de Sucesso:**
```json
{
  "isAdmin": true,
  "email": "sitekinpaisushibar@gmail.com",
  "message": "Email has admin permissions"
}
```

**Resposta de Negação:**
```json
{
  "isAdmin": false,
  "email": "outro@email.com",
  "message": "Email does not have admin permissions"
}
```

## 📝 Adicionar Novos Admins

### Opção 1: Código (Desenvolvimento)

Edite `shared/admin-config.ts`:

```typescript
export const ALLOWED_ADMIN_EMAILS = [
  "sitekinpaisushibar@gmail.com",
  "novoadmin@email.com", // Adicione aqui
];
```

### Opção 2: Variável de Ambiente (Produção)

Atualize a variável `ALLOWED_ADMIN_EMAILS`:

```bash
ALLOWED_ADMIN_EMAILS=sitekinpaisushibar@gmail.com,novoadmin@email.com
```

## 🔒 Segurança

- ✅ Emails são comparados em **lowercase** para evitar case-sensitivity
- ✅ Espaços em branco são **removidos automaticamente**
- ✅ Validação ocorre no **servidor** (não no cliente)
- ✅ Lista pode ser gerenciada via **variáveis de ambiente**

## 📖 Uso no Código

### Backend (TypeScript/Node.js)

```typescript
// Verificar se um email é admin
const adminEmails = (process.env.ALLOWED_ADMIN_EMAILS || "")
  .split(",")
  .map(e => e.trim().toLowerCase());

const isAdmin = adminEmails.includes(email.toLowerCase().trim());
```

### Frontend (React/TypeScript)

```typescript
import { isAdminEmail } from "@shared/admin-config";

// Verificar permissão
if (isAdminEmail(userEmail)) {
  // Mostrar funcionalidades admin
}
```

## ❓ FAQ

**P: Como adicionar múltiplos emails?**  
R: Separe-os com vírgulas na variável de ambiente ou adicione no array em `admin-config.ts`

**P: As permissões funcionam em desenvolvimento e produção?**  
R: Sim! Em desenvolvimento usa o arquivo `admin-config.ts`, em produção usa a variável de ambiente

**P: É seguro ter o email no código?**  
R: Sim, emails não são informações sensíveis. Senhas e tokens devem estar em variáveis de ambiente

**P: Como remover um admin?**  
R: Remova o email da lista em `admin-config.ts` ou da variável de ambiente

## 🎯 Próximos Passos

Para integração com OAuth ou Google Workspace:

1. Configure o Google Cloud Console
2. Adicione o email `sitekinpaisushibar@gmail.com` aos usuários autorizados
3. Configure as credenciais OAuth no `.env`
4. Implemente o fluxo de autenticação usando `client/src/const.ts`

---

**Última Atualização:** Fevereiro 2026  
**Mantido por:** Kinpai Sushi Development Team
