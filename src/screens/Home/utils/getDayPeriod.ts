function getDayPeriod() {
  const date = new Date();

  if (date.getHours() > 5 && date.getHours() <= 12) {
    return 'morning';
  } else if (date.getHours() > 12 && date.getHours() <= 18) {
    return 'afternoon';
  } else if (date.getHours() > 18 && date.getHours() <= 22) {
    return 'evening';
  }

  return 'night';
}

export default getDayPeriod;
