$(document).ready(function(){
  $(".centered").fadeIn("3000");
  var counter=0,number;
    // while(counter<3){
    $("#pingpong").click(function(event){
      $("#result").empty();
      number=parseInt($("input#number").val());
      // alert(number);
      pingpong(number);
      // $("#result").text(number);
     event.preventDefault();

    });
    $("#result").slideDown();
    // $("#ping").show();
    // $("#pong").show();
    // $("#num").show();



      var pingpong=function(number){
        for(var index=1;index<=number;index++){
            // $("#result").append(index+"<br>");
          findpingpong(index);
        }
      };



       var findpingpong =function(num){
            if((num%3===0)&&(num%5===0)){
             // $("pingpongclass").show();
           }
             else if (((num%3)===0)){
                 // $("li").removeClass();

                 // $("li").css("color","green")
               $("ul#result").append("<li>ping</li>");
                $("li").last().addClass("pong");
               // consol.log();
            }
              else if (((num%5)===0)){
                // $("li").removeClass();
                $("ul#result").append("<li>pong</li>");
                $("li").last().addClass("ping");
             }
               else{
                // $("li").removeClass();
                $("ul#result").append("<li>"+num+"</li>");
              }
              };




    });
