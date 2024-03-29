function initMap() {
    var pinLocation = { lat: 40.782710, lng: -73.965310 };

    var mapOptions = {
        zoom: 15,
        center: pinLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },
        streetViewControl: false,
        overviewMapControl: false,
        styles: [
            {
                stylers: [
                    { hue: "#00ff6f" },
                    { saturation: -50 }
                ]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    { lightness: 100 },
                    { visibility: "simplified" }
                ]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                    { hue: "#ff6600" },
                    { saturation: +80 }
                ]
            }, {
                featureType: "transit",
                elementType: "labels",
                stylers: [
                    { hue: "#ff0066" },
                    { saturation: +80 }
                ]
            }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "poi.park",
                elementType: "labels",
                stylers: [
                    { visibility: "on" }
                ]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    { hue: "#c4f4f4" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ]
    };

    var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

    var startPosition = new google.maps.Marker({
        position: pinLocation,
        map: venueMap,
        icon: "img/go.png" // Make sure you have the correct path to your icon
    });
}

function loadMap() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    document.body.appendChild(script);
}
