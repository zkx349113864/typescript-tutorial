// 布尔类型
// let bool: boolean = false
let bool: boolean
bool = true
// bool = 123

// 数字类型
let num: number = 133
// num = 'abc'
num = 0b1011101
num = 0o123
num = 0x4a

// 字符类型
let str: string
str = 'abc'
str = `数值是${num}`
console.log(str)

// 数组类型
let arr: number[]
// 写法1
arr = [ 5, 6 ]
// 写法2
let arr2: Array<number>
let arr3: (string | number)[]
let arr4: Array<string | number>
arr3 = [3, 'a']

// 元组类型
let tuple: [string, number, boolean]
tuple = ['sss', 33, false]

// 枚举类型
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN,
  USER
}
console.log(Roles[1])
/* if (roles === Roles.SUPER_ADMIN) {
  //
} */

// any类型
let value: any
value = 1
value = false
value = 'aasa'
const arr5: any[] = [1, 'aaa']

// void类型
const consoleText = (text: string): void => {
  console.log(text)
}
let v: void
v = undefined
v = null
consoleText('aaa')

// null 和 undefined
let u: undefined
u = undefined
// u = 123
let n: null
n = null
// n = 123
// num = undefined
// num = null


// never类型
const errorFunc = (message: string): never => {
  throw new Error(message)
}
// errorFunc('abc')

/* const infiniteFunc = (): never => {
  while(true) {}
} */

/* let neverVariable = (() => {
  while(true){}
})() */
// neverVariable = 123
// num = neverVariable

// object类型
let obj = {
  name: 'lison'
}
let obj2 = obj
obj2.name = 'L'
console.log(obj)
function getObject(obj: object): void {
  console.log(obj)
}
// getObject(123)
getObject(obj2)

// 类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
// getLength(false)
console.log(getLength(123))