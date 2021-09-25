let obj = {
    name:"asdf",
    age:'12',
    foo: function(){
        console.log("Demo")
    }
}
let arr=[1,2,3,4,5]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log(obj.age)
obj.foo();