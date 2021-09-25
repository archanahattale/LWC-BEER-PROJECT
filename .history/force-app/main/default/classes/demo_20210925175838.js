// let obj = {
//     :"asdf",
//     age:'12',
//     // foo: function(){
//     //     console.log("Demo")
//     // }
// }
// console.log(obj.true)

// // let arr=[1,2,3,4,5]
// // for(var i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // // }
// // async function Demo(){
// //     console.log("First line")
// //     await apig
// //     console.log("Second line")
// //     console.log("Third line")
// // }

let prom = new Promise(function(resolve,reject){
    let i=0;
    if(i==10){
        resolve("Success");
    }
    else{
        reject("rejecteed")
    }
})
prom.then(function(result){
    console.log(result)
})
prom.catch(function(result){
    console.log(result)
});