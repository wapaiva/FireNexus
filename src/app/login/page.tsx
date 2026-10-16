import Link from "next/link";
import { AuthForm } from "@/components/auth-form";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const initialMessage =
    params.error === "confirmation"
      ? "Não foi possível confirmar a sessão pelo link recebido. Solicite um novo e-mail ou tente entrar novamente."
      : "";

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 px-6 py-12">
      <Link href="/" className="text-sm" style={{ color: "var(--fn-muted)" }}>
        ← Voltar ao início
      </Link>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--fn-accent)" }}>
          FireNexus
        </p>
        <h1 className="text-3xl font-bold">Entrar na sua conta</h1>
        <p style={{ color: "var(--fn-muted)" }}>
          Use seu e-mail e senha. Contas novas precisam confirmar o endereço de e-mail.
        </p>
      </div>
      <AuthForm mode="login" initialMessage={initialMessage} />
      <p className="text-sm" style={{ color: "var(--fn-muted)" }}>
        Ainda não tem conta? <Link className="font-semibold underline" href="/signup">Criar cadastro</Link>
      </p>
    </main>
  );
}
