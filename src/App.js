function App(arr1) {
  const arr = arr1.concat().sort();
  const a1 = arr[0];
  const a2 = arr[arr.length - 1];
  const L = a1.length;
  let i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}

console.log((["go", "google"]));

console.log((["SQLInjection", "SQLTutorial"]));

console.log((["abcd", "1234"]));

export default App;
