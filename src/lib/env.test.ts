import { describe, expect, it } from "vitest";
import { requireEnv } from "./env";

describe("requireEnv", () => {
  it("retorna os valores quando todas as variáveis existem", () => {
    expect(requireEnv(["A", "B"], { A: "1", B: "2" })).toEqual({ A: "1", B: "2" });
  });

  it("lista apenas os nomes das variáveis ausentes ou vazias", () => {
    expect(() => requireEnv(["A", "B", "C"], { A: "x", B: "  " })).toThrow(
      "Variáveis de ambiente ausentes: B, C",
    );
  });

  it("não vaza valores na mensagem de erro", () => {
    try {
      requireEnv(["A", "B"], { A: "segredo-123" });
    } catch (e) {
      expect(String(e)).not.toContain("segredo-123");
    }
  });
});
