
const myMap = L.map('iss-map').setView([0, 0], 2);

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl);
tiles.addTo(myMap);

const issIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [100, 70],
    iconAnchor: [50, 35]
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(myMap);

async function getData () {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data = await response.json();
    
    let latitude = data.latitude;
    let longitude = data.longitude;

    // L.marker([latitude, longitude]).addTo(myMap);
    marker.setLatLng([latitude, longitude]);
} 

getData();

setInterval(function () {
    getData();
}, 1000);