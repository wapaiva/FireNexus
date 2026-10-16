# FireNexus

Plataforma em desenvolvimento para apoiar profissionais de Segurança Contra Incêndio e Pânico, inicialmente em Minas Gerais e São Paulo.

> **Estado atual: protótipo / base técnica.** O código contém uma página inicial informativa e uma rota simples de verificação de disponibilidade. Ainda não há autenticação, integração funcional com Supabase, funcionalidades de negócio, regras normativas ou cálculos. O sistema não substitui a análise de profissional habilitado nem a aprovação oficial do Corpo de Bombeiros.

## Requisitos

- Node.js >= 20.9. O CI usa Node.js 22, que atende ao requisito declarado pelo projeto.
- npm (vem com o Node.js).
- Não é necessário configurar uma conta Supabase para executar o protótipo atual.

## Começando

Instale as dependências já registradas no arquivo de lock e inicie o servidor:

```bash
npm ci
npm run dev
```

Acesse o endereço local indicado pelo Next.js no terminal.

O arquivo `.env.example` documenta nomes de variáveis previstos para uma futura integração. Seus valores são exemplos demonstrativos, e as variáveis ainda não são utilizadas pelo protótipo atual. Não coloque chaves ou senhas reais nesse arquivo.

## Comandos

| Comando | Função |
|---|---|
| `npm run dev` | inicia o servidor de desenvolvimento |
| `npm run lint` | verifica padrões e possíveis problemas no código |
| `npm run typecheck` | verifica os tipos TypeScript |
| `npm test` | executa os testes unitários (Vitest) |
| `npm run build` | gera a versão de produção |
| `npm run check` | executa lint, verificação de tipos, testes e build |

O workflow de integração contínua executa `npm ci` e `npm run check` em alterações enviadas para `main` e em pull requests destinados a `main`.

## Documentação

- [Arquitetura](docs/ARQUITETURA.md)
- [Decisões técnicas](docs/DECISOES.md)
- [Progresso por fase](docs/PROGRESSO.md)

## Segurança e configuração

- Nunca versione senhas, chaves ou outros segredos. O `.gitignore` ignora arquivos `.env*`, exceto `.env.example`.
- Quando a integração for implementada, `SUPABASE_SERVICE_ROLE_KEY` deverá ser mantida somente no servidor e nunca receber o prefixo `NEXT_PUBLIC_`.
- Não há migrações ou integração com banco de dados no repositório nesta etapa.
