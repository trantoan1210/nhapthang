function check(){
    let thang = document.getElementById('nhap').value;
    
    if (thang<=12 & thang>=1){
    if(thang==2){
        document.getElementById('ngay').innerHTML= 'Có 28 ngày vào tháng 2'
    }else if (thang%2==0){
        document.getElementById('ngay').innerHTML= 'có 30 ngày vào tháng'+ thang
    }else{
        document.getElementById('ngay').innerHTML= 'có 31 ngày vào tháng'+ thang
    }
}
else {
alert('lỗi')
}}