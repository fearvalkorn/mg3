 var wrapp = $('#wrapp');
 var startaj = $('#ovan');
 var timer;
 var sec = 0; 
 var sacuvano = [];
 var tacno2 = 0;
 var pogodjeni = 0;
 // var vreme = 0;
 // var loop;
 wrapp.append('<div class="container"></div>');
 var container = $('.container');
 var mainArray = ['bars', 'deaf', 'glide', 'blind', 'gitlab', 'at', 'asterisk', 'ban', 'bars', 'deaf', 'glide', 'blind', 'gitlab', 'at', 'asterisk', 'ban'];
 for (var i = 0; i < 16; i++) {
     var rand = Math.floor(Math.random() * mainArray.length);
     container.append('<div class="box"><div class="back"><i class="fa fa-' + mainArray[rand] + '" aria-hidden="true"></i></div><div class="front"></div></div>');
     mainArray.splice(rand, 1);

 }
 // loop = setInterval(function() {
 //     vreme++;
 // }, 1000)
 
$('#ovan').click(nesto);

function nesto(){
    timer = setInterval(function(){
        sec = sec + 1;
        if(sec==5){ 
            $('#naslov').hide();
            $('#naslov2').show();
}            
        if (sec==10) {
            $('#naslov2').hide();
            $("#naslov3").show();
        };
        if (sec==11) {
            $('#naslov3').hide();
            $("#naslov4").show();
        };
        if (sec==12) {
            $('#naslov4').hide();
            $("#naslov5").show();
        };
        if (sec==13) {
            $('#naslov5').hide();
            $("#naslov6").show();
        };
        if (sec==14) {
            $('#naslov6').hide();
            $("#naslov7").show();
        };
        if (sec==15) {
            $('#naslov7').hide();
            $("#naslov8").show();
        };
        if (sec==16) {
            $('#naslov8').hide();
            $("#naslov9").show();
        };
        if (sec==17) {
            $('#naslov9').hide();
            $("#naslov10").show();
        };
        if (sec==18) {
            $('#naslov10').hide();
            $("#naslov11").show();
        };
        if (sec==19) {
            $('#naslov11').hide();
            $("#naslov12").show();
        };
        if (sec==20) {
            $('#naslov12').hide();
            $("#naslov13").show();
        };
        if (sec==21) {
            $('#naslov13').hide();
            $("#naslov14").show();
        };
        if (sec==22) {
            $('#naslov14').hide();
            $("#naslov15").show();
        };
        if (sec==23) {
            $('#naslov15').hide();
        };
         if(sec === 21){
                    clearInterval(timer)
                    alert("Im sorry, you lost")
                 }
        $('h2').html(sec);
    },1000);
    $("#ovan2").click(nesto2);
        function nesto2(){
            clearInterval(timer)
        }


}

 $('.box').click(function start() {


     if (sacuvano[0]) {
         if (sacuvano[0].index() == $(this).index()) {
             return
         } else {
             tacno2++;
             sacuvano.push($(this));
             // console.log(sacuvano);
         }
     } else {
         tacno2++;
         sacuvano.push($(this));
     }


     $(this).find('.front').css('transform', 'perspective(900px) rotateY(90deg)');
     $(this).find('.back').css('transform', 'perspective(900px) rotateY(0deg)');
     if (tacno2 === 2) {
         $('.box').off();
         if (sacuvano[0].html() === sacuvano[1].html()) {
             tacno2 = 0;
             sacuvano.length = 0;
             pogodjeni++;
             if (pogodjeni === 8) {
                 clearInterval(timer);
                 alert("kraj resili ste ovo za " + sec + "sec");
             }

             $('.box').click(start);
         } else {
             setTimeout(function() {
                 sacuvano[0].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');
                 sacuvano[0].find('.back').css('transform', 'perspective(900px) rotateY(90deg)');
                 sacuvano[1].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');
                 sacuvano[1].find('.back').css('transform', 'perspective(900px) rotateY(90deg)');
                 tacno2 = 0;
                 sacuvano.length = 0;
                 $('.box').click(start);
             }, 600);

         }
     };
 })