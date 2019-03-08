$(document).ready(function(){

  var counter=0,number;
  var pingpongarray=[];
    // while(counter<3){
    $("#pingpong").click(function(event){
      $("#result").empty();
      number=parseInt($("input#number").val());
      // alert(number);
      pingpong(number);
      // $("#result").text(number);
      printarray();
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
             $("pingpongclass").show();
             pingpongarray[num]="pingpong";
           }
             else if (((num%3)===0)){
                 // $("li").removeClass();

                 // $("li").css("color","green")
               // $("ul#result").append("<li>ping</li>");
               pingpongarray[num] =("<li>ping</li>");
                  // $("li").last().addClass("ping");
                  // ]="ping";

               // consol.log();
            }
              else if (((num%5)===0)){
                // $("li").removeClass();
                // $("ul#result").append("<li>pong</li>");
               // $("li").last().addClass("pong");
                   pingpongarray[num]=("<li>pong</li>");
             }
               else{
                // $("li").removeClass();
                // $("ul#result").append("<li>"+num+"</li>");
                   pingpongarray[num]=("<li>"+num+"</li>");
              }
              };

      var printarray=function(){
        $("#result").empty();
        for (var i=1;i<=10;i++){
          $("ul#result").append(pingpongarray[i]);
        }
      }


    });
