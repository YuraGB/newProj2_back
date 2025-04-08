import { Hono } from "hono";
import { readdirSync } from "fs";
import { join } from "path";

const app = new Hono();

const routesPath = join(__dirname);

const folders = readdirSync(routesPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const loadRoutes = async () => {
  const routePromises = folders.map(async (folder) => {
    try {
      const routeModule = await import(`@/routes/${folder}/index`);
      const route = routeModule.default;

      if (route) {
        app.route(`/`, route);
        console.log(`✅ Route loaded: /${folder}`);
      }
    } catch (err) {
      console.error(`❌ Error loading route: /${folder}`, err);
    }
  });

  await Promise.all(routePromises);
};

await loadRoutes();

export type RouteType = typeof app;
export default app;
