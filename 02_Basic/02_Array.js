const marvel_heros = ['thor','Ironman','spiderman']

const dc_heros =['superman','flash','batman']

// marvel_heros.push(dc_heros)
 
// console.log(marvel_heros)
// const allHero =marvel_heros.concat(dc_heros)

// console.log(allHero)


const allNewHeros = [...marvel_heros,...dc_heros]

// console.log(allNewHeros)

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Array = another_Array.flat(Infinity)

console.log(real_another_Array)

