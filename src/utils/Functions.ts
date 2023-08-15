export async function sleep(stalltime: number = 3000) {
  await new Promise(resolve => setTimeout(resolve, stalltime));
}

export function generateObjectId() {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
};

export function generateNumberId() {
  return parseInt((Math.random() * 10000).toFixed(0))
}