var scroller=jQuery.browser.webkit ? "body": "html";

/* modernize */
function modernize() {
	// placeholder
	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function() {
			$(this).watermark($(this).attr('placeholder'));
		});
	}
}


/* input only Number  */
function inputNumber(block) {
	$('input', block).keypress(function(e) {
		if (e.which >= 47 && e.which <= 57 ){}
		else return false;
	});

	$('input', block).keyup(function() {
		$inputNum = $(this);
		if ($inputNum.val == '' || $inputNum.val() == 0) {
			$inputNum.val('');
		}
	});
}


/* u_tabs */
function u_tabs(link, block) {
	$(link).click(function(e) {
		var $currentTab = $(this);
		var tabId = $currentTab.data('utab');

		$(link).removeClass('active');
		$currentTab.addClass('active');

		$(block).removeClass('active');
		$(block+'[data-utab="' + tabId + '"]').addClass('active');
		if($(link).is('a')){
			e.preventDefault();
		}
	});
	$(link).eq(0).click();
}

/* scrollUp */
function scrollUp(block,targetBlock) {

	$(block).click(function(e){
		var target = $(targetBlock).offset().top;

		$(scroller).animate({scrollTop:target},800);
		return false;

		e.preventDefault();
	});
}


function initScrollpane(){
	$('.scroll-pane').jScrollPane();
}


function oneHeightItems(){

	function oneHeight(block){
		var height=0;
		block.removeAttr('style');
		block.each(function(){
			if($(this).height()>height){
				height=$(this).height();
			}
		});
		block.css('height', height);
	}

	oneHeight($('.oneHeight'));
}

function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction();
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                $(element).closest('.form_row').removeClass('error');
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction();
                } else {
                    form.submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: "Невалидный email"
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:"Введите номер мобильного телефона."
                }
            });
        }
    }
}

/* slider init */

function sliderInit(){
	$('.lube-slider').slick({
		infinite:true,
		arrows:false,
		autoplay:true,
		autoplaySpeed:2000,
		fade:true,
		cssEase:'linear',
		dots:true
	});
};

/* /slider init */

/* fancybox for tabs images */

function fancyTabs(){
	$('.fancybox-tabs').fancybox({
		padding:3,
        fitToView:false,
        autoSize:true
	});
};

/* /fancybox for tabs images */

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

function googleMap(){
    function initialize() {
        var myLatlng = new google.maps.LatLng(49.418035,  26.984585);
        var myOptions = {
            zoom: 17,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map_google"), myOptions);

        var contentString = '<div class="marker-test">Червоноармійська вул., 18</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Uluru (Ayers Rock)',
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

    }
    initialize();
}

function fancyBox(){
    $('.fancybox_popup').fancybox({
        padding:0,
        fitToView:false,
        wrapCSS:"wrap_zayavka",
        autoSize:true
    });
};

function validationZayavka(){

    var formSur = $('.form-class').serialize();

    $.ajax({
        url : 'ajax.php',
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim()!='true') {
                popNext();
            }
            else {
               $(this).trigger('reset');
            }

        }
    });

    function popNext(){
        $.fancybox.open("#zayavka_success",{
            padding:0,
            fitToView:false,
            wrapCSS:"wrap_zayavka",
            autoSize:true,
            afterClose: function(){
                clearTimeout(timer);
            }
        });
        var timer = null;

        timer = setTimeout(function(){
            $.fancybox.close("#zayavka_success");
        },2000)
    }

}

/* DOCUMENT READY  */
$(document).ready(function() {
	modernize();
	$('.footer_placeholder').height($('.footer').outerHeight());

	oneHeightItems();

	sliderInit();
	u_tabs('.tabs-top-main .lube-tabs-top-nav-item', '.tabs-top-main .lube-tabs-top-content');
	u_tabs('.tabs-bottom-main .lube-tabs-top-nav-item', '.tabs-bottom-main .lube-tabs-top-content');
	fancyTabs();

	showONdisplay();

	$('#questionform').validate();
    var phone = $('#question-phone');
    inputNumber(phone);

    googleMap();
    fancyBox();

    validate('.form-class',{submitFunction:validationZayavka});

    inputNumber($('.zayavka_tel_wrap'));

});

$(window).load(function(){



});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').outerHeight());
});






