const hour =new Date().getHours();
let gretting;
if(hour<10){
    gretting="GoodMorning";
}else if(hour<20){
    gretting="GoodDay";
}else{
    gretting="Good Evering";
}
document.getElementById("demo").innerHTML=gretting;