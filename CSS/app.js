
$(".dropDownMenu").click(function(){
    $(".navWrapper").toggleClass("toggle");
});

$(window).resize(function() {
    if (window.innerWidth >= 600 && $(".navWrapper").hasClass("toggle")){
        $(".navWrapper").removeClass("toggle")
    }else if(window.innerWidth<600&&clicked){
        $(".navWrapper").addClass("toggle");
    }
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
