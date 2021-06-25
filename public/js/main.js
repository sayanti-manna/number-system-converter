let btn1 = document.getElementById('btn1');
let fromField = document.getElementById('from');

// $('#from').attr('placeholder', 'PLACE');
$(document).ready(()=>{
    $('#btn1').click(()=>{
        $('#from').text('Binary');
        $('#Numlabel').text(2);
        $('#hiddenField').attr('value', 2);
        $('#Usernum').attr('placeholder', 'Binary Number');
    });
    $('#btn2').click(()=>{
        $('#from').text('Decimal');
        $('#Numlabel').text(10);
        $('#hiddenField').attr('value', 10);
        $('#Usernum').attr('placeholder', 'Decimal Number');
    });
    $('#btn3').click(()=>{
        $('#from').text('Octal');
        $('#Numlabel').text(8);
        $('#hiddenField').attr('value', 8);
        $('#Usernum').attr('placeholder', 'Octal Number');
    });
    $('#btn4').click(()=>{
        $('#from').text('Hexa');
        $('#Numlabel').text(16);
        $('#hiddenField').attr('value', 16);
        $('#Usernum').attr('placeholder', 'Hexa Number');
    });            
});