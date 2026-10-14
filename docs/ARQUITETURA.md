# Arquitetura (proposta, FASE 1)

## Stack
- **Front-end/servidor:** Next.js (App Router), React, TypeScript estrito, Tailwind CSS.
- **Dados e identidade:** Supabase (PostgreSQL, Auth, Storage).
- **Qualidade:** ESLint, `tsc --noEmit`, Vitest, GitHub Actions.

## Princípios
1. **Multiempresa (multi-tenant):** toda tabela com dados de cliente carrega `organization_id` e tem RLS ativo. O isolamento entre organizações é validado por testes automatizados.
2. **Jurisdição explícita:** motores normativos de MG e SP são módulos separados, com regras, versões e testes próprios. Nenhuma regra é reaproveitada entre estados sem validação.
3. **Rastreabilidade normativa:** cada regra aponta para fonte oficial, item, versão e vigência. Sem fonte verificável, a regra não é implementada.
4. **Aprovação humana:** alterações em regras e documentos emitidos exigem revisão de profissional competente.
5. **Sem afirmações oficiais indevidas:** o sistema nunca declara aprovação, protocolo ou regularidade sem comprovação.
6. **Segredos:** apenas por variáveis de ambiente; `service_role` somente no servidor.

## Estrutura de diretórios (planejada)
```
src/app/            rotas e páginas (App Router)
src/lib/            utilitários compartilhados
src/modules/        módulos de domínio (organizacoes, projetos, normas-mg, normas-sp, calculos, cad, documentos)
supabase/migrations migrações SQL versionadas
docs/               arquitetura, decisões, progresso
```

## Ambientes
- **Desenvolvimento:** projeto Supabase `FireNexus` (atual).
- **Homologação/Produção:** a definir (projeto separado ou branching do Supabase), decisão pendente do responsável.
