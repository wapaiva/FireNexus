# FireNexus

Plataforma SaaS de apoio a profissionais de Segurança Contra Incêndio e Pânico (inicialmente Minas Gerais e São Paulo).

> **Estado atual: protótipo / base técnica (FASE 1).** Nenhuma funcionalidade normativa ou de cálculo está disponível. Nada nesta plataforma substitui a análise de profissional habilitado nem a aprovação oficial do Corpo de Bombeiros.

## Requisitos
- Node.js >= 20.9 (CI usa 22)
- Conta Supabase (projeto de desenvolvimento)

## Começando
```bash
npm install
cp .env.example .env.local   # preencha localmente; nunca versionar
npm run dev
```

## Comandos
| Comando | Função |
|---|---|
| `npm run dev` | servidor de desenvolvimento |
| `npm run lint` | ESLint |
| `npm run typecheck` | verificação de tipos |
| `npm test` | testes unitários (Vitest) |
| `npm run build` | build de produção |
| `npm run check` | lint + tipos + testes + build |

## Documentação
- [Arquitetura](docs/ARQUITETURA.md)
- [Decisões técnicas](docs/DECISOES.md)
- [Progresso por fase](docs/PROGRESSO.md)

## Segurança
- A chave `SUPABASE_SERVICE_ROLE_KEY` é exclusiva do servidor e jamais deve ter prefixo `NEXT_PUBLIC_`.
- Nunca versionar `.env*` (exceto `.env.example`).
- Migrações ficam em `supabase/migrations/` e são aplicadas primeiro em ambiente de desenvolvimento.
