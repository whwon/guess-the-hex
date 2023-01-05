export function generateHexes() {
  const hexes: Array<string> = [];
  for (let i = 0; i < 3; i++) {
    hexes.push(
      "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16))
    );
  }

  return hexes;
}

export function generateARandNum() {
  /*
   * Math.random can never return a 0, so instead we treat 3 as a zero
   * to solve this situation since our index positions are 0, 1, 2 and
   * the random numbers that will be generated are 1, 2, 3. So when we
   * map the two we can configure them like this:
   *  index | randNum
   *    0   |    3
   *    1   |    1
   *    2   |    2
   */
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 3) return 0;
  else return randNum;
}
