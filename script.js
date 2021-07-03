mapboxgl.accessToken = 'pk.eyJ1IjoibmFoaWRwYXZlbGMiLCJhIjoiY2txbTdyNWVlMTB4NzJwcXRpYTNkYXp0MyJ9.LPbrDrI0FqyGLIdzWHuMnw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([23.77, 90.39])
}

function setupMap(center){
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 12,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    var scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'metric'
    });
    map.addControl(scale);
    scale.setUnit('metric');

    var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}


