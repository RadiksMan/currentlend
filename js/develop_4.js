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
        // marker.setMap(map);
    }
    initialize();
}

function fancyBox(){
    $('.fancybox_popup').fancybox({
        padding:0,
        fitToView:false,
        autoSize:true
    });
};

function validationZayavka(){
    $('.zayavka_form_first form').submit(function(){

        var form = $(this).serialize();
        console.log(form);
        $.ajax({
            url : 'ajax.php',
            data: form,
            success : function(data){
                popNext();
            }
        });
        return false;
    });

    function popNext(){
        $('.zayavka_form_first').fadeOut(400);
        $('.zayavka_success').fadeIn(400);
    }
}


$(document).ready(function(){
    googleMap();
    fancyBox();

    inputNumber($('.zayavka_tel_wrap'));
    validationZayavka();
});