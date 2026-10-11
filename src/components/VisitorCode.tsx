"use client";

import { useEffect } from "react";
import { getVisitorCode } from "@/lib/visitor";

/** Crea el código del visitante al entrar en cualquier página (si no existe ya). */
export function VisitorCode() {
  useEffect(() => {
    getVisitorCode();
  }, []);
  return null;
}
