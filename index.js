const ZOOM_LEVEL = 18;
const LATITUDE = 48.855921;
const LONGITUDE = 2.298575;
var map = L.map('map').setView([LATITUDE, LONGITUDE], ZOOM_LEVEL);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

L.marker([LATITUDE, LONGITUDE]).addTo(map);
