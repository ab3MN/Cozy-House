const unique = (arr1, arr2) => {
  const set = new Set(arr2.map((e) => JSON.stringify(e)));
  return arr1.filter((e) => !set.has(JSON.stringify(e)));
};

export default unique;
