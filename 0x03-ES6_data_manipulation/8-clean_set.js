export default function cleanSet(set, startString) {
  const part = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const subString = val.substring(startString.length);

      if (subString && subString !== val) {
        part.push(subString);
      }
    }
  }
  return part.join('-');
}
