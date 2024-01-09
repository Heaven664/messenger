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

/**
 * @param timestamp of the message
 * @returns A string with the local time of the message
 */
export const timestampToLocalTime = (timestamp: number) => {
  // Convert Unix timestamp to milliseconds
  // const timestampInMilliseconds = timestamp * 1000;

  // Create a new Date object
  const date = new Date(timestamp);
  console.log(date);

  // Get local time components
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format the time in 24-hour format
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
};
