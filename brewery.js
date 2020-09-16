$(document).ready(function () {

    function getBrewery() {
        var state = "Pennsylvania"
        var zipcode = "15234"
        var queryUrl = "https://api.openbrewerydb.org/breweries?by_postal=" + zipcode
        // if(state !== "")
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (brewData) {
            console.log(brewData)

        });

    };

    function getMap() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWF4Z29sZHN0ZWluOTMiLCJhIjoiY2tmNWo0ajNmMDk2aTJxbzdnbmNlOHlpMiJ9.8CGYT2osEb9HFoXcKX93cw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    }
    getMap()
    $("#search").on("click", function (event) {
        event.preventDefault();
        getBrewery();
    });


});
