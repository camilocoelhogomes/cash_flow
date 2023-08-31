export async function sleep(stalltime = 3000) {
  await new Promise(resolve => setTimeout(resolve, stalltime));
}

export function generateObjectId() {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, () => {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
}

export function generateNumberId() {
  return parseInt((Math.random() * 10000).toFixed(0));
}

export function setPropertyValue<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  const newObject = {...obj};
  newObject[key] = value;
  return newObject;
}

/**
 * Converts a number to a currency Brazilian Real (R$) string.
 * @param value The amount in cents
 * @example
 * 1220 => R$ 12,20
 * 120020 => RS 1.200,20
 */
export function BRLCurrency(value?: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value ?? 0);
}
