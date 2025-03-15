// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
let a = 10
let b = b + a // หรือ  b+=a
a = a * 100 + b - 3 // หรือ a *= 100 + b - 3

// Nullish Coalescing Operator __ ?? __ 
// กรณีที่หน้า ?? เป็น null จะได้ค่าหลังเครื่องหมาย ??
// กรณีที่หน้า ?? เป็นใช่ null จะได้ค่านั้นๆ เลย
let aa = null
let bb = 30
console.log(aa ?? 'Hello')
console.log(bb ?? 555)


// Ternary Conditional Operator __?__:__
//เงื่อนไข ? ทำ/ได้ เมื่อจริง : ทำ/ได้ เมื่อไม่จริง
console.log(100 < 500 ? 'Hello' : 'Bye')
let cc = 'Money'
let dd = 'Monkey'
console.log(cc == dd ? 'Woow....' : 'Woo.......')



// Spread Operator __...__ จะใช้กับ object และ array
let ee = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let ff = [111, 222]
console.log('------------------')
console.log(ee)
console.log(ff)
let gg = [...ee, ...ff]
console.log(gg)
console.log('------------------')
let hh = {data1: 'Hello', data2: 'Bye'}
let ii = {data3: 'Hi', data4: 'Bye'}
console.log(hh)
console.log(ii)
let jj = {...hh, ...ii}
console.log(jj)
let hh =[555, 999, ...ee, ...ff]
console.log(hh)
console.log('------------------')

let ii = {data1: 'Hello', data2: 'Bye'}
let jj = {data3: 'Money', ...ii}
console.log(jj)
let kk = {data4: 'Money', ...ii}
console.log(kk)


