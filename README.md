# FireNexus

Plataforma em desenvolvimento para apoiar profissionais de Segurança Contra Incêndio e Pânico, inicialmente em Minas Gerais e São Paulo.

> **Estado atual: protótipo.** O repositório está iniciando a integração de autenticação por e-mail com Supabase. Ainda não há fluxos de negócio, regras normativas ou cálculos implementados. O sistema não substitui a análise de profissional habilitado nem a aprovação oficial do Corpo de Bombeiros.

## Requisitos

- Node.js >= 20.9.
- npm (incluído no Node.js).
- Projeto Supabase existente, com confirmação de e-mail habilitada.

## Começando

1. Instale as dependências:
   ```bash
   npm ci
   ```
2. Copie `.env.example` para `.env.local`.
3. No painel do Supabase, obtenha a **Project URL** e a **publishable key** e preencha `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` em `.env.local`.
4. No Supabase Auth, configure a Site URL e adicione o endereço de callback da aplicação à lista de URLs de redirecionamento permitidas. Para desenvolvimento local, use `http://localhost:3000/auth/callback`; para produção, adicione o domínio real da aplicação.
5. Inicie o servidor:
   ```bash
   npm run dev
   ```
6. Acesse `/signup` para criar uma conta e confirmar o e-mail, ou `/login` para entrar.

Não compartilhe nem versione `.env.local`. A URL e a publishable key são configurações do cliente; nunca use uma secret/service-role key no navegador ou em arquivos `NEXT_PUBLIC_*`.

## Rotas implementadas nesta fase

| Rota | Finalidade |
|---|---|
| `/` | Página inicial do protótipo |
| `/signup` | Cadastro por e-mail e senha |
| `/login` | Login por e-mail e senha |
| `/auth/callback` | Troca do código de confirmação por uma sessão |
| `/app` | Área inicial protegida |
| `/api/health` | Verificação simples de disponibilidade |

A aplicação usa `@supabase/ssr` para cookies de sessão e um proxy do Next.js para atualizar as claims/sessão. A página protegida também valida o usuário no servidor. As políticas RLS do banco continuam sendo a barreira de autorização para os dados.

## Comandos de qualidade

| Comando | Função |
|---|---|
| `npm run dev` | inicia o servidor de desenvolvimento |
| `npm run lint` | verifica padrões e possíveis problemas |
| `npm run typecheck` | verifica os tipos TypeScript |
| `npm test` | executa testes unitários |
| `npm run build` | gera a versão de produção |
| `npm run check` | executa todas as verificações acima |

## Limitações conhecidas

- O login social Google não foi habilitado nem implementado.
- A criação de organizações e os fluxos de negócio ainda não existem.
- A configuração de Auth/URLs no painel deve ser verificada antes de testar os links de e-mail.
- A integração deve ser validada em CI; não considere o fluxo de autenticação homologado até os testes e o teste manual com e-mail terem passado.
