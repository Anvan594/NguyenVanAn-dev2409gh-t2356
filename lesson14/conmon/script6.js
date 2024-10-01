let text;
switch(new Date().getDate()){
    case 6:
        text="chủ nhật";
        break;
    case 0:
        text="thứ 2";
        break;
    default:
        text="tôi không biết";
        break;
}
document.getElementById('demo').innerHTML=text;