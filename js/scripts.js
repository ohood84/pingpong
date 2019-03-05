$(document).ready(function(){
  var x=[1,2,3];
  var a=[2,3,1];
  var cond=1;
 // alert("hello");
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
$("#result").show();


      var pingpong=function(number){
        for(var index=1;index<=number;index++){
            // $("#result").append(index+"<br>");
          findpingpong(index);
        }
      };

       var findpingpong =function(num){
            if((num%3===0)&&(num%5===0)){
            $("#result").append("pingpong"+"<br>");
           }
             else if (((num%3)===0)){
              $("#result").append("ping"+"<br>");
            }
              else if (((num%5)===0)){
               $("#result").append("pong"+"<br>");
             }
               else{
                $("#result").append(num+"<br>");
              }
              };




    });
