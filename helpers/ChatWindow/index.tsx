/**
 * @param timestamp of the last visit
 * @returns A string with the elapsed time since the last visit
 */
export const timestampToElapsedTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const now = new Date();
  const elapsed = now.getTime() - date.getTime();
  const minutes = Math.floor(elapsed / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `Last seen ${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `Last seen ${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `Last seen ${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else {
    return "Last seen recently";
  }
};
