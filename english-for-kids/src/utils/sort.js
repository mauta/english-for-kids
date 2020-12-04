export default function sortbyKey(key, direction = true) {
  return (a, b) => ((direction) ? (a[key] >= b[key] ? 1 : -1) : (a[key] <= b[key] ? 1 : -1));
}
