"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function signOut() {
    setIsSigningOut(true);
    setHasError(false);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        setHasError(true);
        setIsSigningOut(false);
        return;
      }

      window.location.assign("/login");
    } catch {
      setHasError(true);
      setIsSigningOut(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        type="button"
        onClick={signOut}
        disabled={isSigningOut}
        className="rounded-lg border px-4 py-2 text-sm font-semibold disabled:opacity-60"
        style={{ borderColor: "var(--fn-border)" }}
      >
        {isSigningOut ? "Saindo..." : "Sair da conta"}
      </button>
      {hasError && <p role="status" className="text-sm" style={{ color: "var(--fn-accent)" }}>
        Não foi possível encerrar a sessão. Tente novamente.
      </p>}
    </div>
  );
}
