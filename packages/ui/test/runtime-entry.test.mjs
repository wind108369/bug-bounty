import assert from "node:assert/strict";
import { test } from "node:test";

test("package runtime entrypoint exposes UI components", async () => {
  const ui = await import("@freelanceflow/ui");

  assert.equal(typeof ui.Button, "function");
  assert.equal(typeof ui.Card, "function");
});
