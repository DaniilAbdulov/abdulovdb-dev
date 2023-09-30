export function getTimeDifference(timestamp) {
  const now = new Date();
  const diffInMilliseconds = now - Date.parse(timestamp);
  const minutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44));
  const years = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));

  if (minutes < 1) {
    return "now";
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (days < 7) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (weeks < 4) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (months < 12) {
    return `${
      months === 0
        ? `${weeks} week${weeks > 1 ? "s" : ""}`
        : `${months} month${months > 1 ? "s" : ""}`
    } ago`;
  } else {
    return `more than ${years} year${years > 1 ? "s" : ""} ago`;
  }
}
