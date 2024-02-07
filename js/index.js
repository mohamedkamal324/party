// header start
$("a[href^='#']").click(function(e){
    let aHref = e.target.getAttribute("href")
    let sectionOffset = $(aHref).offset().top
    $("body,html").animate({scrollTop:sectionOffset -200},1500)
})


let sideBarInnerWidth = $(".inner-side").innerWidth();
$("#sideBar").css("left",-sideBarInnerWidth)
$("#open").click(function(){
    let sideBarInnerWidth = $(".inner-side").innerWidth();

    if($("#sideBar").css("left")== "0px"){
        $("#sideBar").animate({left:-sideBarInnerWidth},1000)
    }
    else{
        $("#sideBar").animate({left: "0px"})
    }
})
$(".inner-side i").click(function(){
    $("#sideBar").animate({left:-sideBarInnerWidth},1000)
})
// header end


// Singers start
$(".singerToggle").click(function(){
    $(".inner").not($(this).next()).slideUp(400)
    $(this).next().slideToggle(400);
})
// Singers end

// counter start

// let dateNow =new Date()
//     console.log(dateNow);

// let seconds =  Date.now() /1000
// // console.log(seconds);
// let minutes = seconds /60;
// let hours = minutes /60;
// let days = hours / 24;

// let dateNow = new Date()
// let birthday = new Date("22 jul,2002")
// let diff = dateNow - birthday;
// console.log(diff/1000/60/60/24/365);

window.onload =function(){
    timeCounter("25 october 2024 10:00:00")
}

function timeCounter(until) {

    let futureTime = new Date(until);
    futureTime = (futureTime.getTime()/1000);

let dateNow = new Date();
dateNow = (dateNow.getTime()/1000);

difftime = (futureTime- dateNow);
    
let days = Math.floor( difftime / (24*60*60));
let hours = Math.floor((difftime - (days * (24*60*60))) / 3600);
let mins = Math.floor((difftime - (days * (24*60*60)) - (hours * 3600 )) / 60);
let secs = Math.floor((difftime - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


$(".days").html(`${days} D`);
$(".hours").html(`${hours} h`);
$(".minutes").html(`${ mins } m`);
$('.seconds').html(`${ secs} s`)


setInterval(function() {  timeCounter(until); }, 500);
}
// counter end

// textarea start
let maxChars = 100;
$("textarea").keyup(function(){
    let charLength = $("textarea").val().length;
    let charsLeft = maxChars - charLength;
    if(charsLeft<=0){
        $(".characters").text("your available character finished")
    }
    else{
        $(".characters").text(charsLeft);
    }
});

// textarea end