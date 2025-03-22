// funtion Ep.2
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
//3. no parameter, has return
function show3(){
    console.log('Wow...')
    return 10
}



//4. have parameter, has return
function show4(x, y){
    console.log('Hey...')
    return x ** y
}


console.log(show3())
console.log('-------------------')

let data1 = show3()
let data2 = show4(2, 3)

console.log(data1 + data2)

