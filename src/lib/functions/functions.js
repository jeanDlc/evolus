export const truncatePhrase = (someString, numCharacters = 150) => {
  //se usará para truncar las descripcionees
  return `${someString.slice(0, numCharacters)} ...`;
};
export const unionArrays = (arr1 = [], arr2 = []) => {
  //retorna la unión de 2 arrays (sin repeticiones)

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const contatenated = arr1.concat(arr2);
  return contatenated.filter(onlyUnique);
};
