export function generateHours() {
  const hours = [];

  for (let i = 0; i < 12; i++) {
    if (i === 0) {
      hours.push("12:00 AM");
      continue;
    }
    hours.push(i + ":00 AM");
  }

  for (let i = 0; i < 12; i++) {
    if (i === 0) {
      hours.push("12:00 PM");
      continue;
    }
    hours.push(i + ":00 PM");
  }

  return hours;
}

export function formatDate(d: Date) {
  const yy = d.getFullYear();
  let mm = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth();
  let dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();

  return `${dd}/${mm}/${yy}`;
}
