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