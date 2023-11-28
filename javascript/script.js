function func1()
{
  $("#img1").fadeToggle(3000);
}

function func2()
{
  //$(element name).action()
  //document.getElementByTagName(element name)

  $("div").css('background-color', 'orange');
  // $("#p1").css('font-style','italic');
  //$(".para").css('font-style', 'italic')
  //$(".para").css('font-family', 'arial')
  //$(".para").css('font-size', '20px')
  //$("#div1, #div3").css('background-color', 'green');
  //$("#div1, li").css('background-color', 'purple')
  //$("div p").fadeToggle();
  //$("p:first").fadeToggle();
  $("li:odd").fadeToggle();
} 

//Events in javascript
function func3()
{
  document.getElementById("img2").style.width="500px"
}

//Events in jquery
// $("button").click(func4);
// function func4(){
//     $("#img3").css('width','500px');
// }


$("document").ready(function(){

  //anonymous function
$("button").click(function(){
  $("#img3").css('width','500px');
});

});
