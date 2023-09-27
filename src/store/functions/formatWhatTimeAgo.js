export function formatWhatTimeAgo(dateString) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Use 24-hour format
  };
  const date = new Date(dateString);

  return date.toLocaleTimeString("en-US", options);
}
console.log(formatWhatTimeAgo("2023-09-01T01:56:51Z"));
