import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/backend/router/app.routes";
import { createContext } from "@/backend/router/createContext";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
