import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Home from "@/pages/index.astro";

test("Home page should contain Tailwind button", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Home);

  expect(result).toContain("Tailwind Button in Astro!");
  expect(result).toContain(
    '<button class="appearance-none py-2 px-4 bg-purple-500'
  );
});

test("Home page should contain markdown link", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Home);

  expect(result).toContain('href="/markdown-page"');
  expect(result).toContain("Markdown is also supported...");
  expect(result).toContain('class="p-4 underline"');
});
