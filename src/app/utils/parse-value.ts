export function parseValue(serializedVal: string) {
  let value = null;
  try {
    value = JSON.parse(serializedVal);
  } catch {
    value = serializedVal;
  }

  return value;
}
