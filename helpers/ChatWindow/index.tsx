/**
 * @param timestamp of the last visit
 * @returns A string with the elapsed time since the last visit
 */
export const timestampToElapsedTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const now = new Date();
  const elapsed = now.getTime() - date.getTime();
  const minutes = Math.floor((elapsed / 1000) * 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `Last seen day${days !== 1 ? "s" : ""} hours ago`;
  } else if (hours > 0) {
    return `Last seen hour${hours !== 1 ? "s" : ""} minutes ago`;
  } else if (minutes > 0) {
    return `Last seen minute${minutes !== 1 ? "s" : ""} seconds ago`;
  } else {
    return "Last seen recently";
  }
};
