function resize()
            {
                var heights = window.innerHeight;
                document.getElementById("link").style.height =  heights -95 + "px";
                document.getElementById("splash").style.height =  heights -95 + "px";
            }
            resize();
            window.onresize = function() {
                resize();
            };

var checkstatus = function(){
    if (navigator.onLine){
$("#link").show();
$("#splash").hide();

    }else{
$("#link").hide();
$("#splash").show();
    }
}
checkstatus();
window.addEventlistener("online",function(){
    checkstatus();
});

window.addEventlistener("offline",function(){
    checkstatus();
});


