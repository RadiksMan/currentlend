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
			$inputNum.val('1');
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

/* DOCUMENT READY  */
$(document).ready(function() {
	modernize();
	$('.footer_placeholder').height($('.footer').outerHeight());

	oneHeightItems();

	sliderInit();
	u_tabs('.tabs-top-main .lube-tabs-top-nav-item', '.tabs-top-main .lube-tabs-top-content');
	u_tabs('.tabs-bottom-main .lube-tabs-top-nav-item', '.tabs-bottom-main .lube-tabs-top-content');
	fancyTabs();
});

$(window).load(function(){



});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').outerHeight());
});






