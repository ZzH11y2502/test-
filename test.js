function bai_1(){
    var money_perday =100_000,
    input_data = document.getElementById("number");
    working_days= input_data.value;
    let output1 = document.getElementById("output1"),
    salary= working_days*money_perday;

    output1.innerHTML =`Your month salary: ${salary.toLocaleString()}`
}

function bai_2() {
     var num1Tag = document.getElementById("num1"),
     num2Tag = document.getElementById("num2"),
     num3Tag = document.getElementById("num3"),
     num4Tag = document.getElementById("num4"),
     num5Tag = document.getElementById("num5");
     var num1, num2,num3,num4,num5;
    num1=parseInt(num1Tag.value, 10);
    if (num1 >100) {
        document.getElementById("output1").innerHTML="So ban nhap on hon 100.";
    }
    num2=parseInt(num2Tag.value, 10) ;
    if (num2 >100) {
        document.getElementById("output2").innerHTML="So ban nhap on hon 100.";
    }
     num3=parseInt(num3Tag.value, 10) ;
     if (num3 >100) {
        document.getElementById("output3").innerHTML="So ban nhap on hon 100.";
    }
     num4=parseInt(num4Tag.value, 10) ;
     console.log("🚀 ~ file: test.js:39 ~ bai_2 ~ num4:", num4)
     if (num4 >100) {
        document.getElementById("output4").innerHTML="So ban nhap on hon 100.";
    }
     num5=parseInt(num5Tag.value, 10) ;
     if (num5 >100) {
        document.getElementById("output5").innerHTML="So ban nhap on hon 100.";
    }
        var avg1=0;
             avg1 =(num1 + num2 + num3 + num4 + num5)/5;
            document.getElementById(`output_exe2`).innerHTML ="Ket qua trung binh:"+avg1;

}   
    function bai_3(){
        var USD2VND =23500, USD, VND=0;
        var USD_Tags = document.getElementById('moneyTranf');
        USD = USD_Tags.value;
        var VND = USD*USD2VND;
        document.getElementById(`ketqua3`).innerHTML =`Số tiền quy đổi: ${VND.toLocaleString()} VNĐ `;
    }

    function bai_4(){
        var length = document.getElementById('length').value*1;
        var width = document.getElementById('width').value*1;

        // if (length >=0 && width >=0){
            var perimeter = (length + width)*2;
            var acreage = width*length;
        // }
        document.getElementById(`ketqua4.1`).innerHTML =`Chu vi = ${perimeter.toLocaleString()}`;
        document.getElementById(`ketqua4.2`).innerHTML =`Diện tích = ${acreage.toLocaleString()}`;
        var rectangle = document.getElementById("rectangle");
        rectangle.innerHTML = "";
        for (var i = 0; i < width; i++) {
        rectangle.innerHTML += '<div style="width: ' + length*10 + 'px; height: 10px; background-color: orange;"></div>';
        }
    }

       

    function bai_5(){
        var numb = document.getElementById('numb').value*1;

        if(numb<100){
            var doz = Math.floor(numb/10) ;
            var unit = numb%10;
            var sum2num = doz+unit;
        }
        else
        {
            alert('Bạn nhập số lớn hơn 100')
        }
        document.getElementById(`ketqua5`).innerHTML =`Tổng ký số là: ${sum2num}`;
    
    }
