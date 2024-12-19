const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');


// Toggle navigation menu on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 6.5244, lng: 3.3792 }, // Lagos, Nigeria
    zoom: 11
});

const stores = [
    { name: 'Milaco Plaza, Okota', address: '120, Ago Palace Way, Okota', lat: 6.4869, lng: 3.3285 },
    { name: 'Thomas Salako St, Ogba', address: '45, Thomas Salako Street, Ogba', lat: 6.6296, lng: 3.3486 },
    { name: 'Candos Rd, Baruwa', address: '55 Candos Road, Baruwa, Ipaja', lat: 6.6036, lng: 3.2646 },
    { name: 'TOS Benson Rd, Ikorodu', address: '59, T.O.S Benson Road, Ikorodu', lat: 6.6194, lng: 3.5086 },
    { name: 'Eluku St, Ikorodu', address: '17, Eluku Street, Ikorodu', lat: 6.6222, lng: 3.5210 },
    { name: 'Egbe Rd, Ejigbo', address: '44, Egbe Road, Ejigbo', lat: 6.5781, lng: 3.3072 },
    { name: 'Muyibi St, Ogba', address: '5, Muyibi Street, Ogba', lat: 6.6211, lng: 3.3500 },
    { name: 'Ijesha Rd, Surulere', address: '82, Ijesha Road, Surulere', lat: 6.5084, lng: 3.3556 },
    { name: 'Jonathan Coker St, Fagba', address: '6, Jonathan Coker Street, Fagba', lat: 6.6440, lng: 3.3307 },
    { name: 'Church St, Oshodi', address: '50, Church Street, Oshodi', lat: 6.5513, lng: 3.3430 },
    { name: 'Adetola St, Aguda', address: '230, Adetola Street, Aguda, Surulere', lat: 6.5142, lng: 3.3495 },
    { name: 'Ijede Rd, Ikorodu', address: 'All Saints Estate, Poro Boge, Along Ijede Rd, Ikorodu', lat: 6.6050, lng: 3.5121 },
    { name: 'Abeokuta Exp. Way, Alakuko', address: '901, Abeokuta Expressway, Alakuko', lat: 6.6500, lng: 3.3025 },
    { name: 'Itamaga, Ikorodu', address: '6, Ijede Road, Itamaga, Ikorodu', lat: 6.6194, lng: 3.5090 },
    { name: 'Aina St, Berger', address: '6, Aina Street, Ojodu-Berger', lat: 6.6310, lng: 3.3478 },
    { name: 'Williams St, Ikeja', address: '10, Williams Street, Gbagada', lat: 6.5584, lng: 3.3811 },
    { name: 'Meiran Rd, Meiran', address: '9, Meiran Road, Meiran', lat: 6.6290, lng: 3.2460 },
    { name: 'Ijaiye Rd, Agege', address: '9, Ijaiye Road, Agege', lat: 6.6194, lng: 3.3314 },
    { name: 'Herbert Macaulay Way, Yaba', address: '299, Herbert Macaulay Way, Yaba', lat: 6.5087, lng: 3.3735 },
    { name: 'Oguntolu St, Shomolu', address: '66, Oguntolu Street, Onipanu-Shomolu', lat: 6.5378, lng: 3.3765 },
    { name: 'Agbado Rd, Ijankara', address: '80, Agbado Road, Ijankara', lat: 6.6453, lng: 3.2642 },
    { name: 'Ipaja Rd, Ipaja', address: '264, Ipaja Road, Ipaja', lat: 6.6197, lng: 3.2823 },
    { name: 'Ogurumbi St, Idimu', address: '2, Ogurumbi Street, Idimu', lat: 6.6006, lng: 3.3028 },
    { name: 'Agboju, Festac', address: '21, Agboju Road, Festac', lat: 6.4636, lng: 3.2346 },
    { name: 'Mosaferjo Rd, Amuwo', address: '21, Mosaferjo Road, Amuwo', lat: 6.4526, lng: 3.2118 },
    { name: 'Fashoro, Ojuelegba', address: '7, Fashoro Street, Off Fashoro, Ojuelegba', lat: 6.5115, lng: 3.3625 },
    { name: 'Ebun St, Lawanson', address: '115, Ebun Street, Off Itire Road, Lawanson', lat: 6.5094, lng: 3.3610 },
    { name: 'Depot, Shomolu', address: '15, Depot Street, Shomolu', lat: 6.5448, lng: 3.3790 },
    { name: 'Odo St, Bariga', address: '6, Odo Street, Bariga', lat: 6.5471, lng: 3.3824 },
    { name: 'Oguntona St, Bariga', address: '8, Oguntona Street, Bariga', lat: 6.5544, lng: 3.3821 },
    { name: 'Olugbode St, Mushin', address: '4, Olugbode Street, Mushin', lat: 6.5297, lng: 3.3556 },
    { name: 'College Rd, Ogba', address: '69, College Road, Ogba', lat: 6.6283, lng: 3.3470 },
    { name: 'Jibowu St, Ebutte Metta', address: '48, Jebba Street, Ebute Metta', lat: 6.4875, lng: 3.3784 },
    { name: 'Makoko St, Makoko', address: '5, Makoko Street, Makoko', lat: 6.5017, lng: 3.3867 },
    { name: 'Ifako-Agege', address: '7, Oba Akinjobi, Ifako-Agege', lat: 6.6237, lng: 3.3323 },
    { name: 'Odo Olowu, Iju-Ishaga', address: '10, Odo-Olowu Street, Iju-Ishaga', lat: 6.6550, lng: 3.2960 },
    { name: 'Ogunwusi St, Iyana-Ipaja', address: '6, Ogunwusi Street, Iyana-Ipaja', lat: 6.6190, lng: 3.2825 },
    { name: 'Oduduwa Crescent, Ikeja', address: '42, Oduduwa Crescent, Ikeja', lat: 6.5964, lng: 3.3418 },
    { name: 'Mushin Rd, Isolo', address: '76, Mushin Road, Isolo', lat: 6.5417, lng: 3.3068 },
    { name: 'Ikorodu Rd, Ojota', address: '51, Ikorodu Road, Ojota', lat: 6.5800, lng: 3.3816 },
    { name: 'Gowon St, Iyana-Ipaja', address: '10, Gowon Street, Iyana-Ipaja', lat: 6.6161, lng: 3.2789 },
    { name: 'Oduduwa St, Yaba', address: '20, Oduduwa Street, Yaba', lat: 6.5139, lng: 3.3702 }
];

const storeList = document.getElementById('store-list');
const infoWindows = [];
const markers = [];

function formatStoreInfo(store, distance) {
const currentTime = new Date();
const openTime = 9;
const closeTime = 21;
const isOpen = currentTime.getHours() >= openTime && currentTime.getHours() < closeTime;

return `
<h3>${store.name}</h3>
<p>${store.address}</p>
<p>${distance.toFixed(2)} kilometers away</p>
<p>Opening Hours: Mon-Sun, 9:00 AM - 9:00 PM</p>
<p>Status: <span class="status ${isOpen ? 'open' : 'closed'}">${isOpen ? 'Open' : 'Closed'}</span></p>
<button class="view-on-map">View on Map</button>
<a href="https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}" target="_blank" class="view-on-map">Get Directions</a>
`;
}

function addStoreMarkers() {
    stores.forEach((store, index) => {
        const marker = new google.maps.Marker({
            position: { lat: store.lat, lng: store.lng },
            map: map,
            title: store.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div style="font-family: Arial, sans-serif; line-height: 1.5; width: 250px;">
            <h3 style="margin: 0; font-size: 16px; font-weight: bold;">${store.name}</h3>
            <p style="margin: 4px 0; color: #666; font-size: 14px;">${store.address}</p>
            <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}&travelmode=driving', '_blank')" 
            style="padding: 8px 12px; background-color: #4285F4; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
            Get Directions
        </button>
        <hr style="margin: 12px 0; border: none; border-top: 1px solid #ccc;">
        <p style="margin: 4px 0; font-size: 14px;"><strong>Opening Hours:</strong></p>
        <p style="margin: 4px 0; font-size: 14px;">Monday - Sunday: 9:00 AM - 9:00 PM</p>
    </div>`
        });
        infoWindows.push(infoWindow);

// Add a marker click listener to show the info window
marker.addListener('click', () => {
infoWindows.forEach(iw => iw.close()); // Close other info windows
infoWindow.setContent(`
<div style="font-family: Arial, sans-serif; line-height: 1.5; width: 250px;">
    <h3 style="margin: 0; font-size: 16px; font-weight: bold;">${store.name}</h3>
    <p style="margin: 4px 0; color: #666; font-size: 14px;">${store.address}</p>
    <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}&travelmode=driving', '_blank')" 
        style="padding: 8px 12px; background-color: #4285F4; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
        Get Directions
    </button>
    <hr style="margin: 12px 0; border: none; border-top: 1px solid #ccc;">
    <p style="margin: 4px 0; font-size: 14px;"><strong>Opening Hours:</strong></p>
    <p style="margin: 4px 0; font-size: 14px;">Monday - Sunday: 9:00 AM - 9:00 PM</p>
</div>
`);
infoWindow.open(map, marker);
});

// Function to handle "View on Map" clicks
function viewOnMap(store, marker) {
map.setZoom(15); // Adjust zoom level
map.setCenter(marker.getPosition()); // Center map on marker
infoWindows.forEach(iw => iw.close()); // Close other info windows
const infoWindow = new google.maps.InfoWindow();
infoWindow.setContent(`
<div style="font-family: Arial, sans-serif; line-height: 1.5; width: 250px;">
    <h3 style="margin: 0; font-size: 16px; font-weight: bold;">${store.name}</h3>
    <p style="margin: 4px 0; color: #666; font-size: 14px;">${store.address}</p>
    <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}&travelmode=driving', '_blank')" 
        style="padding: 8px 12px; background-color: #4285F4; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
        Get Directions
    </button>
    <hr style="margin: 12px 0; border: none; border-top: 1px solid #ccc;">
    <p style="margin: 4px 0; font-size: 14px;"><strong>Opening Hours:</strong></p>
    <p style="margin: 4px 0; font-size: 14px;">Monday - Sunday: 9:00 AM - 9:00 PM</p>
</div>
`);
infoWindow.open(map, marker);
}

        const storeDiv = document.createElement('div');
        storeDiv.className = 'store';
        storeDiv.innerHTML = formatStoreInfo(store, 0);
        storeList.appendChild(storeDiv);

        storeDiv.querySelector('.view-on-map').addEventListener('click', () => {
            map.setCenter(marker.getPosition());
            map.setZoom(14);
            infoWindows.forEach(iw => iw.close());
            infoWindow.open(map, marker);
        });
    });
}

function findNearestStore() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            let nearestStore = null;
            let minDistance = Infinity;

            stores.forEach((store, index) => {
                const distance = google.maps.geometry.spherical.computeDistanceBetween(
                    new google.maps.LatLng(userLocation.lat, userLocation.lng),
                    new google.maps.LatLng(store.lat, store.lng)
                ) / 1000;

                const storeDiv = storeList.children[index];
                storeDiv.innerHTML = formatStoreInfo(store, distance);

                if (distance < minDistance) {
                    minDistance = distance;
                    nearestStore = { ...store, index };
                }
            });

            if (nearestStore) {
                alert(`Nearest store: ${nearestStore.name}`);
                map.setCenter({ lat: nearestStore.lat, lng: nearestStore.lng });
                map.setZoom(14);

                [...storeList.children].forEach(child => child.classList.remove('nearest'));
                const nearestElement = storeList.children[nearestStore.index];
                nearestElement.classList.add('nearest');

                storeList.insertBefore(nearestElement, storeList.firstChild);
            }
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

document.getElementById('find-nearest').addEventListener('click', findNearestStore);

addStoreMarkers();

if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map.setCenter(userLocation);
                map.setZoom(15);
    
                // Optional: Add a marker for user's location
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Your Location",
                });
            },
            (error) => {
                console.error("Geolocation error:", error.message);
                alert("Unable to retrieve your location. Please enable location services.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    