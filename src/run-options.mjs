export function parseRunMax(value) {
  if (value === undefined) throw new Error("--max requires a positive integer");
  const text = String(value);
  if (!/^[1-9]\d*$/.test(text)) {
    throw new Error(`--max must be a positive integer, got ${JSON.stringify(value)}`);
  }
  const max = Number(text);
  if (!Number.isSafeInteger(max)) {
    throw new Error(`--max must be a safe positive integer, got ${JSON.stringify(value)}`);
  }
  return max;
}
