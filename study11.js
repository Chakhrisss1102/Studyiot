// control statement (loop/iteration/repetition) Ep.5
// ทำงานเดิมๆ ซ้ำ
//------------------------------
// forEach ใช้กับ array
let data1 = [10,20,30,40,50]
console.log(100*data1[2])

//(???????) => {???????????} เรียกว่า Arrow Function

data1.forEach((iot)=>{
    console.log(100*iot)
})

// for..of ใช้กับ array  
for(let iot of data1){
    console.log(100*iot)
}

console.log('-----------------------------')
// for..in ใช้กับ Object หรือ array(ไม่แนะนำ)
let data2 = {
    name: 'Sombat',
    age: 30,
    city: 'Bangkok'
}
console.log(data2.name)
console.log(data2.age)
console.log(data2.city)
console.log('-----------------------------')

for(let wow in data2){
    //console.log(wow) ได้ key ของ object
    //console.log(data2.wow) ได้ undefined
    console.log(data2[wow])
    console.log('++++++++++++++++++++++++++++')
}   

 
