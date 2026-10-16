import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--fn-accent)" }}>
        Protótipo em desenvolvimento
      </p>
      <h1 className="text-4xl font-bold">FireNexus</h1>
      <p className="text-lg" style={{ color: "var(--fn-muted)" }}>
        Plataforma de apoio a profissionais de Segurança Contra Incêndio e Pânico.
        A autenticação inicial está sendo integrada; funcionalidades normativas e cálculos ainda não estão disponíveis.
        Nenhum resultado substitui a análise de profissional habilitado ou a aprovação oficial do Corpo de Bombeiros.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/login" className="rounded-lg px-5 py-3 font-semibold text-white"
          style={{ background: "var(--fn-accent)" }}>
          Entrar
        </Link>
        <Link href="/signup" className="rounded-lg border px-5 py-3 font-semibold"
          style={{ borderColor: "var(--fn-border)" }}>
          Criar conta
        </Link>
      </div>
    </main>
  );
}
