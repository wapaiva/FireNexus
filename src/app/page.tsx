export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--fn-accent)" }}>
        Em desenvolvimento
      </p>
      <h1 className="text-4xl font-bold">FireNexus</h1>
      <p className="text-lg" style={{ color: "var(--fn-muted)" }}>
        Plataforma de apoio a profissionais de Segurança Contra Incêndio e Pânico.
        Esta é a base técnica do projeto (protótipo). Nenhuma funcionalidade
        normativa está disponível, e nenhum resultado desta plataforma substitui
        a análise de profissional habilitado ou a aprovação oficial do Corpo de Bombeiros.
      </p>
    </main>
  );
}
