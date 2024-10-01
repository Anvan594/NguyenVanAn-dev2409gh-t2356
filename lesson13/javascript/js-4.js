//cấu trúc điều khiển if
// dạng 1 if đơn
/*
    cú pháp:
        if(condision-expression){
            block startement;
        }
*/
// ví dụ kiểu tra num có phải số dương không?
num = 10;
if (num > 0) {
  console.log(num, "num là số dương");
}
//nếu num >0 thì gán num =-100
if (num > 0) {
  num = -100;
  console.log(num);
}
//dạng 2 if....else
num = 13;
//kiểm tra xem số num là số chẵn hay số lẻ
if (num % 2 == 0) {
  console.log("num là số chẵn");
} else {
  console.log("num là số lẻ");
}
//dạng 3 if ... else if
//kiểm tra số num là số dương ,âm hay là số 0
num = -11;
if (num > 0) {
  console.log(num, "num là số dương");
} else if (num < 0) {
  console.log(num, "num là số âm");
} else {
  console.log(num, "num là số 0");
}
//Dạng 4 nestel if
num1 = 12;
num2 = 15;
// nếu num1 là số chẵn;kiểm tra nếu num2 là số lẻ thì tính kết quả = num1+num2
if (num1 % 2 == 0) {
  if (num2 % 2 == 1) {
    res = num1 + num2;
    console.log(res);
  }
}else{
    if (num2 % 2 == 1) {
        res = num1 - num2;
        console.log(res);
      }
}
// luyện tập 1: giải phương trình bậc 1 ax+b=0
// luyện tập 2: giải phương trình bậc 2 a^2x+bx+c=0
a=2
b=3
if (a == 0 && b == 0){
    console.log('Phương trình vô số nghiệm');
}
else if (a != 0 && b == 0){
    console.log('Phương trình có nghiệm x = 0');
}
else if (a == 0 && b != 0){
    alert("Phương trình vô nghiệm");
}
else {
    console.log('Phương trình có nghiệm x = ' + (-b/a));
}
a=3;
b=-4;
c=-5;
deta=b*b-4*a*c;
console.log(deta);
if(deta>0){
    x1=(-b+Math.sqrt(deta))/(2*a);
    x2=(-b-Math.sqrt(deta))/(2*a);
    console.log("Phương trình có 2 nghiệm phân biệt:")
    console.log("X1 =",x1);
    console.log("X2 =",x2);
}else if(deta==0){
    x1=x2=-b/(2*a);
    console.log("Phương trình có nghiệm kép:")
    console.log("X1=X2=",x1)
}else{
    console.log("Phương trình vô nghiệm:")
}