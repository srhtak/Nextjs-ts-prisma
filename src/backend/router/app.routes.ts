import { z } from "zod";
import { createRouter } from "./createRouter";

export const appRouter = createRouter().query("hello", {
  input: z
    .object({
      name: z.string().nullish(),
    })
    .nullish(),
  resolve({ input }) {
    return {
      message: `Hello ${input?.name ?? `world`}`,
    };
  },
});

export type AppRouter = typeof appRouter;
