let day;
switch(new Date().getDay()){
    case 0:
        day="chủ nhật";
        break;
    case 1:
        day="Thứ 2"
        break;
    case 2:
        day="Thứ 3"
        break;
    case 3:
        day="Thứ 4"
        break;
    case 4:
        day="Thứ 5"
        break;
    case 5:
        day="Thứ 6"
        break;
    case 6:
        day="Thứ 7"
        break;
}
document.getElementById('demo').innerHTML="Hôm nay là:"+day;