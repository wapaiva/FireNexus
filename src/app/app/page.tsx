import Link from "next/link";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/logout-button";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AppPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/login");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-8 px-6 py-16">
      <Link href="/" className="text-sm" style={{ color: "var(--fn-muted)" }}>
        ← Página inicial
      </Link>
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--fn-accent)" }}>
          Área autenticada
        </p>
        <h1 className="text-3xl font-bold">Bem-vindo ao FireNexus</h1>
        <p style={{ color: "var(--fn-muted)" }}>
          Sua sessão foi validada pelo Supabase. Esta área é uma base inicial; ainda não contém fluxos de negócio.
        </p>
        <p className="text-sm">
          Conta conectada: <span className="font-semibold">{data.user.email ?? "E-mail não disponível"}</span>
        </p>
      </div>
      <div className="rounded-xl border p-5" style={{ borderColor: "var(--fn-border)", background: "var(--fn-surface)" }}>
        <h2 className="mb-2 text-lg font-semibold">Próxima etapa</h2>
        <p className="text-sm" style={{ color: "var(--fn-muted)" }}>
          Depois de validar o fluxo de autenticação, implementaremos a criação e a seleção de organizações com testes de isolamento.
        </p>
      </div>
      <LogoutButton />
    </main>
  );
}
