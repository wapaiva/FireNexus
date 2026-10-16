# Progresso do projeto

Atualizado em 2026-10-16.

## Estado verificado

O repositório contém a base técnica do protótipo: uma página inicial informativa, layout global, uma rota de health check simples e três testes unitários para validação de variáveis de ambiente. Não foram encontradas implementação de autenticação, integração funcional com Supabase, tabelas ou migrações, políticas RLS, nem funcionalidades de negócio.

O estado do projeto Supabase remoto não foi consultado nesta etapa e permanece **pendente de verificação**. Não se deve inferir que o banco remoto está vazio ou configurado com base apenas no conteúdo do repositório.

## Fases

| Fase | Situação | Evidências e pendências |
|---|---|---|
| 0. Diagnóstico do repositório | Concluída | Inventário inicial do código versionado realizado. Estado remoto do Supabase não verificado. |
| 1. Base técnica e qualidade | Em andamento | Next.js App Router, React, TypeScript, Tailwind CSS, documentação, exemplo de ambiente e workflow CI. `npm run check` passou localmente nesta revisão. A execução no GitHub Actions ainda depende de um push/pull request autorizado. |
| 2. Identidade e organizações | Não iniciada | Login, cadastro, perfis, organizações, papéis, convites e isolamento por RLS ainda não estão implementados. |
| 3. Clientes, edificações e projetos | Não iniciada | Nenhum fluxo ou persistência de negócio foi identificado no repositório. |
| 4. Fontes normativas | Não iniciada | Fontes, versões e vigências precisam ser verificadas antes de implementação. |
| 5. Requisitos e cálculos | Não iniciada | Não há regras normativas ou cálculos implementados. Depende de fontes verificáveis. |
| 6. Documentos e CAD | Não iniciada | Geração de documentos e edição/importação/exportação CAD não estão implementadas. |
| 7. Produtividade e comercialização | Não iniciada | Tarefas, notificações, planos, assinaturas e pagamentos não estão implementados. |
| 8. Homologação e produção | Não iniciada | Implantação, monitoramento, backups e recuperação ainda precisam ser planejados e testados. |

## Verificações locais

Na revisão de 2026-10-16, `npm run check` concluiu com sucesso: lint, verificação TypeScript, três testes unitários e build de produção. Essa verificação cobre o código presente; não demonstra funcionamento de integrações ou funcionalidades que ainda não existem.

## Próximos passos propostos

1. Revisar e aprovar a base técnica e o CI.
2. Com autorização e acesso apropriado, verificar o estado real do Supabase antes de propor qualquer alteração.
3. Planejar autenticação, organizações, permissões e isolamento multiempresa; implementar e testar controles antes de adicionar dados protegidos.
4. Prosseguir para clientes, edificações e projetos após a fundação de identidade e autorização.
5. Incorporar fontes normativas oficiais e rastreáveis antes de implementar requisitos ou cálculos.
