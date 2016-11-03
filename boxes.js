$(document).ready(function() {
  console.log("roger that");
$("#secretBox").css("background-color", "white");
$("#secretBox").append("<h1>secret box!</h1>");
$("#row1").children().attr("class", "box boxType3");
$(".box").eq(-1).css("display","none");
$(".boxType1").css("background-color", "white");
$("#row2 > div:lt(2)").css("background-color", "none");
$(".box").css("width", "2px");

$("#container").on("click",function()  {
  console.log($("#container").position("x","y"));
})

});
