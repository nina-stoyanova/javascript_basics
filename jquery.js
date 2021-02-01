$(document).ready(function(){
    $("#p1").mouseenter(function(){
      $(this).css("background-color", "red");
      $(this).mouseleave(function(){
          $(this).css("background-color", "initial");
      })
    });
  });
  
  
  $(document).ready(function(){
      $("input").focus(function(){
        $(this).css("background-color", "yellow");
      });
      $("input").blur(function(){
        $(this).css("background-color", "green");
      });
    });
  
  
    $(document).ready(function(){
      $("#btn1").click(function(){
        var dataBase = "Nina Stoyanova";
        var currentText = $("#test").text();
        $("#test").text(currentText +" "+ dataBase);
        
      });
    
    });
  
  
    $("#btn3").click(function(){
      var value = $("input").val();
      $("#test1").text(value);
      $("input").val(" ");
    });