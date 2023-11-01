"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
export const AuhtProvider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
