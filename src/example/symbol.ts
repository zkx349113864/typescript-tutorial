/* const s1 = Symbol()
console.log(s1)

const s2 = Symbol()
console.log(s2) */

// console.log(s1 === s2)

// const s3 = Symbol('lison')
// console.log(s3)
/* const s4 = Symbol('lison')
console.log(s4.toString())
console.log(Boolean(s4))
console.log(!s4) */

let prop = 'name'
const info = {
  // name: 'sherlock'
  // [prop]: 'sherlock'
  [`my${prop}is`]: 'sherlock'
}
// console.log(info)

const s5 = Symbol('name')
const info2 = {
  [s5]: 'sherlock',
  age: 18,
  sex: 'man'
}
// console.log(info2)
info2[s5] = 'hahha'
// console.log(info2)

for (let key in info2) {
  // console.log(key)
}

// console.log(Object.keys(info2))
// console.log(Object.getOwnPropertyNames(info2))
// console.log(Object.getOwnPropertySymbols(info2))
// console.log(Reflect.ownKeys(info2))


// Symbol.for Symbol.keyFor()
const s8 = Symbol.for('lison')
const s9 = Symbol.for('lison')
// console.log(s8 === s9)