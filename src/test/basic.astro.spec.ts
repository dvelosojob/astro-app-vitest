import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { getContainerRenderer as reactContainerRenderer } from "@astrojs/react";
import { loadRenderers } from "astro:container";

import { expect, test } from "vitest";
import Home from "@/pages/index.astro";

test("Home page should contain Tailwind button", async () => {
  const renderers = await loadRenderers([reactContainerRenderer()]);

  const container = await AstroContainer.create({ renderers });
  const result = await container.renderToString(Home);

  expect(result).toContain("Tailwind Button in Astro!");
});

test("Home page should contain markdown link", async () => {
  const renderers = await loadRenderers([reactContainerRenderer()]);

  const container = await AstroContainer.create({ renderers });
  const result = await container.renderToString(Home);

  expect(result).toContain('href="/markdown-page"');
  expect(result).toContain("Markdown is also supported...");
  expect(result).toContain('class="p-4 underline"');
});
