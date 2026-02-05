/**
 * Admin Configuration
 * 
 * Lista de emails autorizados para acesso administrativo ao sistema.
 * 
 * IMPORTANTE: Emails nesta lista têm permissões administrativas completas.
 */

export const ALLOWED_ADMIN_EMAILS = [
  "sitekinpaisushibar@gmail.com",
];

/**
 * Verifica se um email tem permissão de administrador
 */
export function isAdminEmail(email: string): boolean {
  return ALLOWED_ADMIN_EMAILS.includes(email.toLowerCase().trim());
}

/**
 * Get admin emails from environment or use default list
 * Útil para ambientes de produção onde emails são configurados via variáveis de ambiente
 */
export function getAdminEmails(): string[] {
  const envEmails = process.env.ALLOWED_ADMIN_EMAILS;
  
  if (envEmails) {
    return envEmails
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter((e) => e.length > 0);
  }
  
  return ALLOWED_ADMIN_EMAILS;
}

/**
 * Check if email is admin using environment-aware configuration
 */
export function isAdminEmailEnv(email: string): boolean {
  const adminEmails = getAdminEmails();
  return adminEmails.includes(email.toLowerCase().trim());
}
