# Progresso do projeto

Atualizado em 2026-10-16.

## Estado verificado

O repositório contém a base técnica do protótipo: uma página inicial informativa, layout global, uma rota simples de health check e três testes unitários para validação de variáveis de ambiente. A autenticação e a integração funcional do Next.js com Supabase ainda não estão implementadas no código.

O projeto Supabase remoto existente foi consultado em modo somente leitura. O projeto está ativo na região `us-east-1`, com PostgreSQL 17. Foram identificadas quatro tabelas no esquema `public`: `organizations`, `profiles`, `memberships` e `audit_log`. As quatro têm RLS habilitado. A consulta de contagem indicou zero registros nessas tabelas no momento da auditoria. Há funções e gatilhos para perfis, organizações, associação de membros e auditoria. Ver `docs/REVISAO_SUPABASE.md` para o escopo e as ressalvas.

A existência de tabelas e políticas remotas não significa que o aplicativo já as utilize. Nenhuma configuração ou dado do Supabase foi alterado.

## Fases

| Fase | Situação | Evidências e pendências |
|---|---|---|
| 0. Diagnóstico do repositório | Concluída | Inventário inicial do código versionado realizado. |
| 1. Base técnica e qualidade | Concluída | Next.js App Router, React, TypeScript, Tailwind CSS, documentação, exemplo de ambiente e workflow CI. Pull Request #3 modernizou o runner para `ubuntu-24.04` e as actions; foi mesclada em `main`. CI pós-merge aprovado. |
| 2. Identidade e organizações | Em planejamento técnico | O Supabase remoto tem tabelas, RLS, políticas, funções e gatilhos de identidade; o código da aplicação ainda não integra Supabase Auth. Próximo passo: validar políticas e privilégios, confirmar configuração de Auth/URLs e só então implementar clientes SSR, login e proteção de rotas em branch/PR. |
| 3. Clientes, edificações e projetos | Não iniciada | Nenhum fluxo ou persistência de negócio foi identificado no repositório. |
| 4. Fontes normativas | Não iniciada | Fontes, versões e vigências precisam ser verificadas antes de implementação. |
| 5. Requisitos e cálculos | Não iniciada | Não há regras normativas ou cálculos implementados. Depende de fontes verificáveis. |
| 6. Documentos e CAD | Não iniciada | Geração de documentos e edição/importação/exportação CAD não estão implementadas. |
| 7. Produtividade e comercialização | Não iniciada | Tarefas, notificações, planos, assinaturas e pagamentos não estão implementados. |
| 8. Homologação e produção | Não iniciada | Implantação, monitoramento, backups e recuperação ainda precisam ser planejados e testados. |

## Verificações

Na revisão de 2026-10-16, `npm run check` concluiu com sucesso: lint, verificação TypeScript, três testes unitários e build de produção. O CI do GitHub Actions também passou após a integração da PR #3. Essas verificações cobrem o código presente; não demonstram funcionamento de integrações ou funcionalidades que ainda não existem.

## Próximos passos

1. Revisar o inventário remoto de tabelas, políticas RLS, privilégios e funções privilegiadas.
2. Revalidar as configurações atuais do Supabase Auth e as URLs de redirecionamento, sem alterar o painel.
3. Implementar integração Supabase SSR no Next.js com versões de dependências fixadas e lockfile atualizado, em branch e Pull Request.
4. Criar e testar login, logout, sessão e proteção de rotas; testar também o isolamento entre organizações antes de adicionar dados de negócio.
5. Prosseguir para clientes, edificações e projetos somente após validar a fundação de identidade e autorização.
6. Incorporar fontes normativas oficiais e rastreáveis antes de implementar requisitos ou cálculos.

## Regras de segurança

- Não alterar o projeto Supabase remoto sem autorização explícita.
- Não expor chaves secretas no navegador, no repositório ou no chat.
- Não confiar apenas em controles de interface: a autorização deve ser aplicada no servidor e pelas políticas RLS.
- Não fazer merge de Pull Requests sem revisão e confirmação do responsável.
