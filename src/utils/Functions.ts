export async function sleep(stalltime: number = 3000) {
  await new Promise(resolve => setTimeout(resolve, stalltime));
}