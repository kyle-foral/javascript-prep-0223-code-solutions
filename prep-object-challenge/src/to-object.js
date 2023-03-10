/* exported toObject */

function toObject(keyValuePair) {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const object = { [key]: value };
  return object;
}
