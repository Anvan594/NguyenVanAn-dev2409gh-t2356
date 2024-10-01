//toán tử toán hạng, biểu thức, câu lệnh, khối lệnh
//1.toán tử số học:*,/,+,-,%
var num1, num2;
//gnas giá trị
num1 = 12;
num2 = 25;
//thực hiện các phép tính toán số học
res = num1 * num2;
console.log(num1, "*", num2, "=", res);
res = num1 / num2;
console.log(num1, "/", num2, "=", res);
res = num1 + num2;
console.log(num1, "+", num2, "=", res);
res = num1 - num2;
console.log(num1, "-", num2, "=", res);
res = num1 % num2;
console.log(num1, "%", num2, "=", res);
res = num2 % num1;
console.log(num2, "%", num1, "=", res);
//2.phép so sánh trả về giá trị kiểu boolean (true/false)
//>,>=,<,<=,==,===,!=,!==
res = num1 < num2;
console.log(num1, "<", num2, "=", res);
res = num1 <= num2;

console.log(num1, "<=", num2, "=", res);
res = num1 > num2;
console.log(num1, ">", num2, "=", res);

res = num1 >= num2;
console.log(num1, ">=", num2, "=", res);

res = num1 == num2;
console.log(num1, "==", num2, "=", res);

res = num1 === num2;
console.log(num1, "===", num2, "=", res);

res = num1 != num2;
console.log(num1, "!=", num2, "=", res);

res = num1 !== num2;
console.log(num1, "!==", num2, "=", res);

num1 = 12;
num2 = "12";
res = num1 == num2;
console.log(num1, "==", num2, "=", res);
res = num1 === num2;
console.log(num1, "===", num2, "=", res);

//3.Toán tử logic
//and:&&,or:||,not:!
num1=12;
num2=15;
res= (num1>10) && (num2<10)
console.log("(num1>10) && (num2<10)",res)
res= (num1>10) || (num2<10)
console.log("(num1>10) || (num2<10)",res)
res= !((num1>10) || (num2<10))
console.log("!((num1>10) || (num2<10))",res)
res= !(num1>10) || (num2<10)
console.log("!(num1>10) || (num2<10)",res)
res= (num1>10) || !(num2<10)
console.log("(num1>10) || !(num2<10)",res)

//4. Toán tử đặc biệt

res= (num1>10)?"giá trị lớn hơn":"nhỏ hơn"
console.log(res)
res= (num2%2==0)?"Số chẵn ":"số lẻ"
console.log(num2,"là:",res)
//typefo()
res=typeof(num1); //number
console.log("typeof(num1):",res)
num1="123456"; 
res=typeof(num1) ;//string
console.log("typeof(num1):",res)