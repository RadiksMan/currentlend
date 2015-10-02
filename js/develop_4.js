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


$(document).ready(function(){
    googleMap();
});