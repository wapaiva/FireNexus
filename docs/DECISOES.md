# Registro de decisões técnicas

| # | Data | Decisão | Motivo |
|---|---|---|---|
| 1 | 2026-10-14 | Projeto iniciado do zero (repositório e banco estavam vazios). | Diagnóstico da FASE 0. |
| 2 | 2026-10-14 | Next.js (App Router) + TypeScript + Tailwind + Supabase. | Stack prevista na especificação; nada existente a preservar. |
| 3 | 2026-10-14 | Trabalho por branches e Pull Requests; nada direto em `main`. | Revisão e rastreabilidade. |
| 4 | 2026-10-14 | TypeScript 5.9 e ESLint 9 fixados por compatibilidade com Next.js 16. | Evitar major recém-lançado sem suporte comprovado. |
| 5 | 2026-10-14 | Migrações somente aditivas em desenvolvimento; destrutivas só com autorização expressa. | Regra 12 da especificação. |
| 6 | 2026-10-14 | `npm audit` aponta 5 vulnerabilidades "high" apenas na cadeia de lint (`eslint-config-next` → `fast-glob`/`micromatch`/`braces`). Dependências de produção: 0. Mantido; reavaliar a cada atualização do `eslint-config-next`. | Não afetam o build nem o runtime; `npm audit fix --force` causaria downgrade/quebra. |
