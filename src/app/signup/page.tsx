import Link from "next/link";
import { AuthForm } from "@/components/auth-form";

export default function SignupPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 px-6 py-12">
      <Link href="/" className="text-sm" style={{ color: "var(--fn-muted)" }}>
        ← Voltar ao início
      </Link>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--fn-accent)" }}>
          FireNexus
        </p>
        <h1 className="text-3xl font-bold">Criar conta</h1>
        <p style={{ color: "var(--fn-muted)" }}>
          Informe seu e-mail e crie uma senha. Enviaremos uma mensagem para confirmar o endereço.
        </p>
      </div>
      <AuthForm mode="signup" />
      <p className="text-sm" style={{ color: "var(--fn-muted)" }}>
        Já tem uma conta? <Link className="font-semibold underline" href="/login">Entrar</Link>
      </p>
    </main>
  );
}
