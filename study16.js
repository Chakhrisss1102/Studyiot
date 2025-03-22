// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// 2. arrow function การประกาศฟังก์ชันโดยใช้ => (fat arrow)
let aa = () => {
    console.log('Hello...')
}

aa()

let aaa = () => console.log('Hello...')

const bb = (x, y) => {
    return x + y
}

bb(5, 10)
bb(100, 200)

console.log(bb(5, 10))
console.log(bbb(5, 10))