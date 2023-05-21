const uppercase = (text: string) => {
  return text.toUpperCase();
}

const getDayCount = (date:Date) => {
    return parseInt(date.toLocaleString('default', {day: 'numeric'}));
}

export { uppercase, getDayCount };
