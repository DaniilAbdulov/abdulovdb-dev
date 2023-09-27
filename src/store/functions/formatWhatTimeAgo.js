export function formatWhatTimeAgo(v) {
  const nowDate = new Date(Date.now());
  const pastDate = new Date(v);
  const difference = nowDate - pastDate;

  const yearDifference = nowDate.getFullYear() - pastDate.getFullYear();
  const monthDifference =
    yearDifference * 12 + nowDate.getMonth() - pastDate.getMonth();
  if (difference < 60000) {
    return "now";
  } else if (difference < 3600000) {
    const minutes = Math.floor(difference / 60000);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (difference < 86400000) {
    const hours = Math.floor(difference / 3600000);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (difference < 604800000) {
    const days = Math.floor(difference / 86400000);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (difference < 2419200000) {
    const days = Math.floor(difference / 604800000);
    return `${days} ${days === 1 ? "week" : "weeks"} ago`;
  } else if (monthDifference < 12) {
    return `${monthDifference} ${
      monthDifference === 1 ? "month" : "months"
    } ago`;
  } else if (monthDifference >= 12) {
    return `${yearDifference} ${yearDifference === 1 ? "year" : "years"} ago`;
  }
}
