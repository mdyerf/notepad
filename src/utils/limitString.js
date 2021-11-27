export function limitString(string, limit = 185) {
  if (string.length <= limit) return string;
  return string.substring(0, limit - 3) + "...";
}
