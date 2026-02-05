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
