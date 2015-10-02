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


$(document).ready(function(){
    googleMap();
    fancyBox();

    validate('.form-class',{submitFunction:validationZayavka});

    inputNumber($('.zayavka_tel_wrap'));

});