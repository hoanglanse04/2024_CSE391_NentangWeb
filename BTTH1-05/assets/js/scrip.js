alert("Welcome to my web")
// {
//     let e  = '111';
// } 
// console.log(e)
// <!-- java scrip là định kiểu động > không cần khai báo biến. Kiểu được xác định động theo giá trị của biến -->
//     <!-- khai báo có 3 từ khóa 
//     const hằng số; let/var biến khuyến nghị dùng let -->
//     <!-- kiểu dữ liệu: Js có 5 kiểu dữ liệu nguyên thủy: number, string, boolean,null, underfine -->
//     <!-- các toán tử: ==, === (Khuyến nghị dùng ===) -->
//     <!-- Cấu trúc rẽ nhánh -->
//     <!-- Mảng: Mảng chấp nhận hỗn hợp kiểu giá trị -->
let myArry= ['Chuoi',5, 6, true, false]
//  Lặp for(....) while(...)
    for(const myArryelenment of myArry){
        console.log(myArryelenment);
    }
    // Hàm 
function input(){
    console.log("01 02 03");
}
const square = function(x){
    return x*x;
}
console.log(square(8))
// phim mui ten (arrow function)
const square2 = (x) => {return x*x};
console.log(square2(8))
// callback function mot ham ma duoc truyen nhu 1 tham so trong ham khac
const hamGiDo2 = (x,func) => {return func(x)};
console.log(hamGiDo2(9,square));
// Doi tuong 
const student = {
    name:"Pham Duc Long",
    class:"64KTPM1",
    function(){
        console.log("Any method")
    },
    Anyfunction: () => {console.log("Any function")}
}
console.log(student.name);
console.log(student.class);
student.Anyfunction();
student.function();
class HS {
    constructor(name,klass){
        this.name = name ;
        this.klass = klass;
    }
    showinfo = () => {console.log(this.name+"..."+this.klass)}

}
 const doSomeThing = () => console.log("Hahaha") ;
    setTimeout(doSomeThing, 1000);
  const number = [1,2,3,4,5];
  let sum = 0;
  number.forEach(number => {sum+=number});
  console.log(sum);
const newArry = number.map((elm) => elm+10);
console.log(newArry);
const a =[1,2,3,4,5];
const b = a.filter((country) => country.includes("land"))
console.log(b);