function a(){
    let x = 10;
    function b(){
        var x = "Hii";
        console.log(x);
    }
    b();
    console.log(x);
}
a();

console.log(hoisting)
var hoisting = "Hoisted";