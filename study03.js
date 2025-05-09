// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = "Hello" //หรือ 'Hello'  หรือ `Hello`
console.log(aa)

// number
let bb = 10 //integer
let cc = 10.5 //float
console.log(bb)
console.log(cc)

// boolean
let dd = true
let ee = false


// array
//value ของอาร์เรย์ มี index number กำกับและเริ่มที่ 0, 1, 2, 3, 4 ..........
//อยากได้ value ของอาร์เรย์ ให้เขียนอาร์เรย์[index number]
let gg = [10, 20, 30, 40, 50]
let hh = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE']
let ii = [10, 'A', true, {data1: 'Hi....',data2: 'Bye...'}]
console.log(gg)
console.log(gg[2])
console.log(hh[1])
console.log(ii[3].data2)

// object *****
let ff = {
    //key: value
    yourname: "John",
    age: 30,
    gender: "male",
    studentStatus: true,
    address : { 
        city: "Bangkok",
        province: "Bangkok"
    },
    food: ['KFC', 'Pizza', 'Burger'],
        
}
console.log(ff)
console.log(ff.gender)
console.log(ff.yourname)
console.log(ff.address.province)
console.log(ff.food[1])




// undefined ข้อมูล
let jj 
console.log(jj)

// null ข้อมูล
let kk = null
console.log(kk)



// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof ff)
console.log(typeof ee)