/**
 * Leitura validada de variáveis de ambiente.
 * Em caso de falta, o erro cita apenas os NOMES, nunca valores.
 */
export function requireEnv(
  names: readonly string[],
  source: Record<string, string | undefined> = process.env,
): Record<string, string> {
  const missing = names.filter((n) => !source[n] || source[n]?.trim() === "");
  if (missing.length > 0) {
    throw new Error(`Variáveis de ambiente ausentes: ${missing.join(", ")}`);
  }
  return Object.fromEntries(names.map((n) => [n, source[n] as string]));
}

/** Variáveis seguras para o navegador (prefixo NEXT_PUBLIC_). */
export const PUBLIC_ENV_NAMES = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
] as const;
