function showONdisplay () {
    $(window).scroll(function () {
        classChange1 = ".block3-item" ;
        classChange2 = ".block5-item" ;
        var isOnView1 = isElementVisible(classChange1);
        var isOnView2 = isElementVisible(classChange2);
        var length1 = $(classChange1).length ;
        var length2 = $(classChange2).length ;
        var i = 0;
        var j = 0;
        if(isOnView1 ){
            if ($(classChange1).is('.viv3'))
            {
                var itemCur1 ;
                    setInterval(function() {
                        if (i<length1){
                            itemCur1 = $(classChange1).eq(i);
                            itemCur1.addClass('animated tdZoomIn');
                            itemCur1.removeClass('viv3');
                            i=i+1;
                        };
                    }, 600);
            }
        }
        i=0;
        if(isOnView2 ){
            if ($(classChange2).is('.viv5'))
            {
                var itemCur2 ;
                    setInterval(function() {
                        if (j<length2){
                            itemCur2 = $(classChange2).eq(j);
                            itemCur2.addClass('animated tdZoomIn');
                            itemCur2.removeClass('viv5');
                            j=j+1;
                        };
                    }, 600);
            }
        }

    });
};

function isElementVisible(elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $(elementToBeChecked).offset().top;
    var BotElement = TopElement + $(elementToBeChecked).height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}


$(document).ready(function() {
showONdisplay();
});
