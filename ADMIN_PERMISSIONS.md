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

> **⚠️ SECURITY WARNING:** This endpoint is for internal use only. In production environments, implement authentication and rate limiting to prevent email enumeration attacks.

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
  "message": "Email has admin permissions"
}
```

**Resposta de Negação:**
```json
{
  "isAdmin": false,
  "message": "Email does not have admin permissions"
}
```

**Note:** The email is NOT echoed back in the response to prevent email enumeration.

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
- ✅ Email não é retornado na resposta da API (previne enumeração)
- ✅ Admin emails são **cacheados** para performance
- ⚠️ **IMPORTANTE:** Em produção, adicione autenticação e rate limiting ao endpoint `/api/auth/check-admin`

## 📖 Uso no Código

### Backend (TypeScript/Node.js)

**Opção 1: Usar função environment-aware (Recomendado para produção)**
```typescript
import { isAdminEmailEnv } from "@shared/admin-config";

// Verifica permissão usando env var ou default
const isAdmin = isAdminEmailEnv(email);
```

**Opção 2: Usar lista estática (Desenvolvimento)**
```typescript
import { isAdminEmail, ALLOWED_ADMIN_EMAILS } from "@shared/admin-config";

// Verificar usando lista hardcoded
const isAdmin = isAdminEmail(email);
```

**Opção 3: Obter lista de admins**
```typescript
import { getAdminEmails } from "@shared/admin-config";

// Obter lista completa de emails admin
const adminEmails = getAdminEmails(); // Retorna array de strings
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
