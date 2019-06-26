export function shuffle(a) {
  let temp = a.slice();
  for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
  }
  return temp;
}
