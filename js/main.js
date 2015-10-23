(function(win) {
    var timeout,
        doc = win.document, 
        html = doc.documentElement;
    function setFontSize() {
        var htmlWidth = html.getBoundingClientRect().width;
        var ratio = htmlWidth / 640;
        if(htmlWidth < 640) {
            win.rem = ratio * 1.5;
        } else {
            win.rem = 1.5;
        }
        win.responseRatio = ratio;
        html.style.fontSize = win.rem + "rem";
    }
    win.addEventListener("resize", function() {
        clearTimeout(timeout), timeout = setTimeout(setFontSize, 300);
    }, true);
    setFontSize();
})(window);

$(function(){
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var radomNum =Math.ceil(30+Math.random()*14);
    var i=0;
    setTimeout(function(){startPate()},'1500');
    function startPate(){
        setTimeout(function(){requestAnimationFrame(step)},1000);
    }
    function step(){
        i++;
        if(i<radomNum){
          $(".dashboard li:nth-child("+i+")").addClass('on'); 
          $("#speed").html(i); 
          requestAnimationFrame(step);
        }
    }
})

