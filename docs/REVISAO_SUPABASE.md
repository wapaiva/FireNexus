# Revisão somente de leitura do Supabase

**Data da consulta:** 2026-10-16  
**Projeto:** FireNexus  
**Região informada pelo painel/API:** `us-east-1`  
**Escopo:** inspeção de metadados, políticas, privilégios, funções, gatilhos e avisos. Nenhuma instrução de escrita foi executada.

## Resumo

O projeto remoto está ativo e saudável, usando PostgreSQL 17. O banco existente contém uma estrutura inicial de identidade e organizações, apesar de o código versionado do FireNexus ainda não ter integração funcional com Supabase Auth.

## Tabelas observadas no esquema `public`

- `profiles`
- `organizations`
- `memberships`
- `audit_log`

Na consulta de contagem feita durante a auditoria, as quatro tabelas estavam com zero registros. Esse resultado descreve apenas o instante consultado; deve ser revalidado antes de qualquer operação que dependa dele.

O RLS estava habilitado nas quatro tabelas. Isso é uma proteção necessária, mas não comprova, por si só, que todas as políticas estejam corretas. É necessário revisar cada operação prevista, tanto para usuários autenticados quanto para acessos sem sessão, e testar o isolamento entre organizações.

## Privilégios observados

A consulta de concessões explícitas a `anon`, `authenticated` e `PUBLIC` encontrou:

- `audit_log`: `SELECT` para `authenticated`;
- `memberships`: `SELECT` e `DELETE` para `authenticated`;
- `organizations`: `SELECT` e `DELETE` para `authenticated`;
- `profiles`: `SELECT` para `authenticated`.

Essas concessões devem ser comparadas com as políticas RLS e com o desenho de autorização pretendido. Em particular, operações de exclusão e futuras operações de criação/atualização precisam ser verificadas cuidadosamente. A ausência de uma concessão explícita nesta consulta não prova, isoladamente, que a operação esteja impossível, pois ainda é necessário considerar privilégios herdados, funções e configuração da API. Nenhuma permissão foi alterada.

## Funções e gatilhos identificados

Foram encontradas funções no esquema não exposto `private` para:

- criar perfil quando um usuário é criado;
- criar associação inicial de proprietário quando uma organização é criada;
- registrar eventos de organização e associação na auditoria;
- verificar participação e papéis em organizações;
- impedir a remoção do último proprietário;
- atualizar campos `updated_at`.

As funções com privilégios elevados observadas usam `SECURITY DEFINER` e definem `search_path` vazio. Isso é uma precaução importante, mas ainda é necessário confirmar quem pode executar cada função, quais gatilhos as invocam e se a lógica de autorização corresponde aos papéis do produto. Não foi feita chamada de escrita nem teste com usuários reais.

## Aviso de desempenho

Foi reportado um aviso relativo à ausência de índice em uma chave estrangeira de `organizations.created_by`. Isso pode afetar algumas consultas e operações de manutenção; não é, por si só, evidência de uma falha de segurança. A criação de índice fica pendente de avaliação e autorização.

## Autenticação e URLs

Em uma auditoria anterior, a configuração informada era: login por e-mail habilitado, confirmação de e-mail obrigatória, login Google desabilitado e Site URL não informada. Esses dados são históricos e precisam ser confirmados novamente no painel antes de configurar links de confirmação, recuperação de senha e redirecionamentos. Esta revisão estrutural não altera nem substitui a inspeção atual das configurações de Auth.

## Plano recomendado antes da integração

1. Confirmar no painel Supabase a Site URL, URLs adicionais de redirecionamento, confirmação de e-mail e os provedores ativos.
2. Obter e revisar a definição completa das políticas RLS de cada tabela, os privilégios efetivos e as permissões de execução das funções `private`.
3. Mapear ações permitidas por papel (`owner`, `admin`, `engenheiro` e demais papéis existentes) e garantir que usuários de uma organização não acessem registros de outra.
4. Implementar a integração Supabase SSR no Next.js usando apenas uma chave publicável no cliente; qualquer chave secreta deve permanecer no servidor e não deve ser exposta em variáveis `NEXT_PUBLIC_*`.
5. Criar testes para ausência de sessão, usuário autenticado, acesso entre organizações e papéis sem autorização.
6. Manter alterações de código em branch e Pull Request. Qualquer mudança de banco ou configuração remota exige uma etapa separada de revisão e autorização explícita.

## Limitações

Esta foi uma auditoria inicial de metadados em modo somente leitura, não um teste de penetração, não uma auditoria independente completa e não uma certificação de segurança. Nenhuma tabela, política, função, configuração de Auth ou dado remoto foi modificado.
