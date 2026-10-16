"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

type AuthFormProps = {
  mode: "login" | "signup";
  initialMessage?: string;
};

export function AuthForm({ mode, initialMessage = "" }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSignup = mode === "signup";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const supabase = createClient();

      if (isSignup) {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });

        if (error) {
          setMessage("Não foi possível concluir o cadastro. Confira os dados e tente novamente.");
          return;
        }

        if (data.session) {
          window.location.assign("/app");
          return;
        }

        setMessage(
          "Se o cadastro foi aceito, você receberá um e-mail para confirmar o endereço antes de entrar.",
        );
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setMessage("Não foi possível entrar. Confira o e-mail, a senha e se o endereço já foi confirmado.");
        return;
      }

      window.location.assign("/app");
    } catch {
      setMessage(
        "Não foi possível conectar ao serviço de autenticação. Confira a configuração do ambiente e tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-lg border px-3 py-2.5 outline-none focus:ring-2"
          style={{ borderColor: "var(--fn-border)", background: "var(--fn-bg)" }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={isSignup ? "new-password" : "current-password"}
          required
          minLength={8}
          maxLength={128}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-lg border px-3 py-2.5 outline-none focus:ring-2"
          style={{ borderColor: "var(--fn-border)", background: "var(--fn-bg)" }}
        />
        {isSignup && (
          <p className="text-xs" style={{ color: "var(--fn-muted)" }}>
            Use pelo menos 8 caracteres. Se o projeto exigir uma regra mais forte, o Supabase também a aplicará.
          </p>
        )}
      </div>

      {message && (
        <p role="status" aria-live="polite" className="rounded-lg border p-3 text-sm"
          style={{ borderColor: "var(--fn-border)", background: "var(--fn-surface)" }}>
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg px-4 py-3 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
        style={{ background: "var(--fn-accent)" }}
      >
        {isSubmitting ? "Aguarde..." : isSignup ? "Criar conta" : "Entrar"}
      </button>
    </form>
  );
}
