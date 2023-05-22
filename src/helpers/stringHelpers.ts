const uppercase = (text: string) => {
  return text.toUpperCase();
}

const getDayCount = (date:Date|undefined) => {
  if(date == undefined) { 
    return 0;
  }
    return parseInt(date.toLocaleString('default', {day: 'numeric'}));
  
}

export { uppercase, getDayCount };
