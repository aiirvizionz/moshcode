import assert from "node:assert/strict";
import test from "node:test";

import { parseRunMax } from "../src/run-options.mjs";

test("parseRunMax accepts plain positive decimal integers", () => {
  assert.equal(parseRunMax("1"), 1);
  assert.equal(parseRunMax("25"), 25);
});

test("parseRunMax rejects non-decimal numeric formats", () => {
  assert.throws(() => parseRunMax("1e2"), /positive integer/);
  assert.throws(() => parseRunMax("0x10"), /positive integer/);
  assert.throws(() => parseRunMax("1.5"), /positive integer/);
});

test("parseRunMax rejects missing, zero, negative, and unsafe values", () => {
  assert.throws(() => parseRunMax(undefined), /requires a positive integer/);
  assert.throws(() => parseRunMax("0"), /positive integer/);
  assert.throws(() => parseRunMax("-1"), /positive integer/);
  assert.throws(() => parseRunMax("9007199254740992"), /safe positive integer/);
});
