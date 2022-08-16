// src/utils/trpc.ts
import { AppRouter } from "@/backend/router/app.routes";
import { createReactQueryHooks } from "@trpc/react";

export const trpc = createReactQueryHooks<AppRouter>();
