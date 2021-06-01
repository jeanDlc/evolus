export const truncatePhrase=(someString, numCharacters=150)=>{
    //se usará para truncar las descripcionees
    return `${someString.slice(0, numCharacters)} ...`;
}