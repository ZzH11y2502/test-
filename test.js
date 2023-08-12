function bai_1(){
    var money_perday =100_000,
    input_data = document.getElementById("number");
    working_days= input_data.value;
    let output1 = document.getElementById("output1"),
    salary= working_days*money_perday;

    output1.innerHTML =`Your month salary: ${salary}`
}
// function bai_2() {
//     var num1 = document.getElementById("num1").value;
//     if (num1 > 100) {
//       console.info ("Số num1 bạn nhập lớn hơn 100. Vui lòng nhập lại.");
//     } else {
//       document.getElementById("output").innerHTML =
//         "Số bạn nhập nhỏ hơn hoặc bằng 100.";
//     }
//   }
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
    // if (num1 >100&& num2 >100&&num3 >100&& num4 >100&& num5 >100){
            var avg =(num1 + num2 + num3 + num4 +num5)/5;
            console.log("🚀 ~ file: test.js:49 ~ bai_2 ~ num1 + num2 + num3 + num4 +num5:", num1 + num2 + num3 + num4 +num5)
            output_exe2.innerHTML =`Gia tri trung binh: ${avg}` 
        // }

}