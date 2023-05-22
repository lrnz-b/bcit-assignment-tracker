const uppercase = (text: string) => {
  return text.toUpperCase();
}

const msToDays = (ms: number) => {
  const msInDay = 86400000;
  return Math.round(ms/msInDay);
}

export { uppercase, msToDays };
