// app/provider.tsx
"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { RouterProvider } from "react-aria-components";

interface ClientProvidersProps {
  children: React.ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  let router = useRouter();

  return <RouterProvider navigate={router.push}>{children}</RouterProvider>;
}
