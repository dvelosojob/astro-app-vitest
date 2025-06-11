import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    projects: [
      {
        extends: true,
        test: {
          name: "astro",
          include: ["**/*.astro.spec.{ts,tsx}"],
        },
      },
      {
        extends: true,
        test: {
          name: "unit",
          globals: true,
          environment: "node",
          include: ["**/*.spec.{ts,tsx}"],
          exclude: [
            "node_modules/**",
            "e2e/**",
            "**/*.stories.{ts,tsx}",
            "**/*.astro.spec.{ts,tsx}",
          ],
        },
      },
    ],
  },
});
