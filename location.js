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
    {name: 'Bokku! Mart Old Ogba Rd', address: '100 Ogba Rd, Ijaiye, Lagos 102212, Lagos', lat:6, lng: 3.2},

    {name: 'Bokku! Mart Egbeda-idimu', address: '95 Idimu Rd, Idimu, Lagos 102213, Lagos', lat:6.583044596786429, lng: 3.283498176417533},

    {name: 'Bokku! Mart Adetola St, Aguda', address: '230 Adetola St, Ijesha Tedo, Aguda 101241, Lagos', lat: 6.480868931935028,  lng: 3.3316940588747097},

    {name: 'Bokku! Mart Ijesha Rd, Surulere', address: '233 Ijesha Rd, Surulere, Lagos 101241, Lagos', lat: 6.497039464351658, lng: 3.32626581163573}, 

    {name: 'Bokku! Mart Ijesha Rd, Surulere', address: '84 Ijesha Rd, Surulere, Lagos 102215, Lagos', lat: 6.506255628569018, lng: 3.333825129422417}, 
     
    {name: 'Bokku! Mart Alh. Kudirat Adenekan St, Isolo', address: '48A Alh. Kudirat Adenekan St, Isolo, Oshodi/Isolo 102214, Lagos', lat: 6.540767864032124, lng: 3.3172191410835254},  

    {name: 'Bokku! Mart Liasu Road, Ikotun', address: '27 Liasu Rd, Alimosho, Ikeja 102213, Lagos', lat: 6.556402, lng: 3.280159},

    {name: 'Bokku! Mart Itire Street, Mushin', address: '233 Itire St, Idi-Araba, Mushin 102215, Lagos', lat: 6.5123328264950455,  lng: 3.3404004705313217},

    {name: 'Bokku! Mart Idi-Araba, Mushin', address: '111 Ishaga Rd, Idi-Araba, Lagos 102215, Lagos', lat: 6.519742696617311,  lng: 3.34614655887471},
    
    { name: 'Ijegun road, via adekunle odunilami street', address: '134,Ijegun road, via adekunle odunilami street. Ti-oluwani bus stop ijegun, road, Ikotun, Lagos 300001, Nigeria', lat:  6.521285,lng: 3.257346 },
    
    { name: 'Bokku! Mart Ijegun - Ikotun Rd, Ijegun', address: '268 Ijegun - Ikotun Rd, Ijegun, Lagos 102213, Lagos, Nigeria', lat: 6.526274, lng:  3.258049 },

    { name: 'Bokku! Mart Ago Palace', address: '120 Ago Palace Way, Ilasamaja, Okota 102214, Lagos', lat: 6.503654099072547, lng:  3.3042997507034375}, 

    {name: 'Bokku! Mart Apapa Road, Ebute-metta', address: '135 Apapa Rd, Ebute Metta, Lagos Mainland 101245, Lagos', lat: 6.485143632059542,  lng: 3.372765478445745}, 

    {name: 'Bokku Mart Oguntolu St, Somolu', address: '66 Oguntolu St, Somolu, Lagos 102216, Lagos', lat: 6.54072341062299,  lng: 3.3691998483291847},

    {name: 'Bokku! Mart Abule Okuta Road, Bariga', address: 'Local Government, 10 Abule Okuta Road Shomolu, Bariga, 102216, Lagos', lat: 6.53706483554634, lng: 3.390568440548468 },

    {name: 'Bokku! Mart Apena St, Idi Oro', address: 'G986+2CQ, Apena St, Idi Oro, Lagos 101241, Lagos', lat: 6.515420784111327 , lng: 3.361026513494091 },

    {name: 'Bokku! Mart Shogbamu St, Bariga', address: '8 Shogbamu St, Somolu, Lagos 102216, Lagos', lat:  6.546461088200409, lng: 3.393897933068229 },

    {name: 'Bokku! Mart Tawose St, Ilupeju', address: '26 Tawose St, Onipanu, Ilupeju 102215, Lagos', lat: 6.537893916710171,  lng: 3.3636710514349017 },

    {name: 'Bokku! Mart Morocco Rd', address: '22 Morocco Rd, Somolu, Lagos 102216, Lagos', lat: 6.536700100174705,  lng: 3.373321258055488 }, 

    {name: 'Bokku! Mart Jebba St', address: '54 Jebba St, Adekunle, Lagos 101245, Lagos', lat:  6.485272607090841, lng: 3.3874721787820365}, 

    {name: 'Bokku! Mart Agege Motor Rd, Mushin', address: '90 Agege Motor Rd, Fadeyi, Lagos 102215, Lagos', lat:  6.522846666894248, lng: 3.3634316763606598}, 

    {name: 'Bokku! Mart Coker Street, Mushin', address: '28 Coker St, Mushin, Lagos 102215, Lagos', lat:   6.530131328917353, lng: 3.358758205501158}, 

    {name: 'Bokku! Mart Ladipo Str, Mushin', address: '54 Ladipo St, Papa Ajao, Mushin 102215, Lagos', lat:  6.533631933098583,  lng: 3.349201941083525}, 

    {name: 'Bokku! Mart Ilaje Road', address: '61 Ilaje Rd, Akoka, Lagos 102216, Lagos', lat:  6.531234564103008,  lng: 3.394941294167153}, 

    {name: 'Bokku! Mart Church street, Makoko', address: 'Local Government, 42-68 Church Street, Makoko, Yaba, 101245, Lagos', lat:  6.497897834389064,   lng: 3.3866978058223567}, 

    {name: 'Bokku! Mart Ogunmefun street, Shomolu', address: '8 Eyiowuawi St, Pedro, Lagos 300001, Lagos', lat:  6.546113099272018,   lng: 3.37399786349452},  

    {name: 'Bokku! Mart Herbert Macaulay way, Yaba', address: 'Local Government, 301 Herbert Macaulay way, Spencer bus-stop,Alagomeji-Yaba, Yaba, 100001, Lagos', lat: 6.502242399358308,  lng: 3.3769815058084545}, 

    {name: 'Bokku! Mart Old Yaba Rd, Adekunle', address: '52 Old Yaba Rd, Adekunle, Lagos 101245, Lagos', lat: 6.494460994990153,  lng: 3.3805417233269024}, 

    {name: 'Bokku! Mart Apapa Road, Ebute-metta', address: '135 Apapa Rd, Ebute Metta, Lagos Mainland 101245, Lagos', lat: 6.481843617502645,  lng: 3.3719692573489493}, 

    {name: 'Bokku! Mart University road, Yaba', address: '6 University road Yaba, Onike, 101245, Lagos', lat: 6.514742965555715,  lng: 3.376484958569486}, 

    {name: 'Bokku! Mart Tijani Str, Bariga', address: '38 Tijani Ashogbon St, Bariga, Lagos 102216, Lagos', lat: 6.536504999290008,  lng: 3.391968729121693}, 
    
    {name: 'Bokku! Mart Ojuelegba Rd, Surulere', address: '129 Ojuelegba Rd, Surulere, Lagos 101241, Lagos', lat: 6.51040493048226,  lng: 3.360968423599629}, 

    {name: 'Bokku! Mart, Owodunni Str, Iwaya, Yaba', address: '20 Owodunni St, Iwaya, Lagos 101245, Lagos', lat: 6 ,  lng: 3 }, 

    {name: 'Bokku! Mart Shyllon Street', address: '69 Shyllon St, Onipanu, Lagos 102215, Lagos', lat:6.539606199283818, lng: 3.3654778235996288 }, 

    {name: 'Bokku! Mart Igi Olugbin St, Bariga', address: '26 Igi Olugbin St, Bariga, Lagos 102216, Lagos', lat: 6.5380980978604635, lng: 3.385939994151835}, 

    {name: 'Bokku! Mart Ebun St, Lawanson', address: '115 Ebun St, Lawanson, Lagos 101241, Lagos', lat: 6.512362277908309,  lng: 3.35013639369357}, 

    {name: 'Bokku! Mart Adeniran Ogunsanya', address: '41 Adeniran Ogunsanya St, Surulere, Lagos 101241, Lagos', lat: 6.494430896869095,  lng: 3.35755935887471}, 

    {name: 'Bokku! Mart Adetola St, Surulere', address: '76 Adetola St, Surulere, Aguda 101241, Lagos', lat: 6.49031839567389,  lng: 3.3369239588747095}, 

    {name: 'Bokku! Mart Ire-Akari Estate Rd', address: '21 Ire-Akari Estate Rd, Isaga Tedo, Lagos 102214, Lagos', lat: 6.526664362754732,  lng: 3.3223525306519774}, 

    {name: 'Bokku! Mart Randle Ave, Surulere', address: '69 Randle Ave, Surulere, Lagos 101241, Lagos', lat: 6.507747396736755,  lng:  3.356584099979117}, 

    {name: 'Bokku! Mart Gaskiya Rd, Ijora', address: 'Local Government, 68 Gaskiya Rd, Ijora, Lagos 102272, Lagos', lat: 6.466653530858381,  lng:   3.357687741083526}, 

    {name: 'Bokku! Mart Ojo road, Ajegunle', address: '66 Ojo Rd, Alaba, Lagos 102103, Lagos', lat:  6.459498127577677,  lng:  3.3387203294269128}, 

    {name: 'Bokku! Mart Coker Road, Orile', address: '62 Coker Rd, Coker, Lagos 101241, Lagos', lat: 6.477001665680404,   lng:  3.33249834110053}, 

    {name: 'Bokku! Mart Alaba Oro Rd, Amukoko', address: '6 Alaba Oro Rd, Amukoko, Ikeja 102103, Lagos', lat: 6.465572232657704,   lng:  3.333780126885631}, 

    {name: 'Bokku! Mart Jakande Gate, Isheri Oshun Rd', address: 'Isheri Oshun Rd, Isheri Osun, Lagos 102214, Lagos', lat: 6.5299582192286625,  lng: 3.3068083558645713}, 

    {name: 'Bokku! Mart Iganmu road, Orile', address: '82 Iganmu Rd, Amukoko, Lagos 102272, Lagos', lat: 6.477452663901611, lng: 3.3463441588702225}, 

    {name: 'Bokku! Mart Isolo Road, Ijegun', address: '114 Isolo Rd, Ijegun, Lagos 102213, Lagos', lat: 6.528387328245631,  lng: 3.2612468061092565}, 

    {name: 'Bokku Mart, Orile Amukoko', address: '21 Mosafejo Rd, Amukoko, Lagos 102103, Lagos', lat: 6.46604622108175,  lng: 3.341496254964037},

    {name: 'Bokku! Mart Oba Olu-Iwa Rd, Apapa', address: '67 Oba Olu-Iwa Rd, Apapa, Lagos 102103, Lagos', lat: 6.448361965239913,  lng: 3.3365500883180306}, 

    {name: 'Bokku! Mart Ramoni Jimoh St, Ejigbo', address: '1 Ramoni Jimoh St, Ejigbo, Lagos 102214, Lagos', lat: 6.537833453364171,  lng: 3.304784612243904}, 

    {name: 'Bokku! Mart Egbe Rd, Ejigbo', address: '58 Egbe Rd, Ejigbo, Lagos 102214, Lagos', lat: 6.5377616409335495, lng: 3.3045968662302987}, 

    {name: 'Bokku! Mart Okota Rd', address: '70 Okota Rd, Isaga Tedo, Lagos 102214, Lagos', lat: 6.519564632431756,  lng: 3.3178830472136434}, 

    {name: 'Bokku! Mart Igando Rd, Ikotun', address: '36 Igando Rd, Ikotun, Lagos 102213, Lagos', lat:  6.547896127959669,  lng: 3.262626270526803}, 

    {name: 'Bokku! Mart Ayantuga St, Onipanu', address: '26 Ayantuga St, Olowo St, Onipanu, odi 102215, Lagos', lat: 6.533523487327591,  lng: 3.3561628416917104}, 

    {name: 'Bokku! Mart Akanro St, Ilasamaja', address: '17 Akanro St, Ilasamaja, Lagos 102215, Lagos', lat: 6.521331679808103,   lng: 3.3356999116311887}, 

    {name: 'Bokku! Mart Idimu-Ejigbo Rd', address: '113 idimu Ejigbo Rd, Ejigbo, 102214, Lagos', lat: 6.543022895661886,  lng: 3.3084304116311896}, 

    {name: 'Bokku! Mart Ile Iwe, Ikotun', address: '56 Egbe Rd, Ikotun, Igando 102213, Lagos', lat: 6.544642,  lng: 3.276137}, 

    {name: 'Bokku! Mart Oworo Rd, Oworonsoki', address: '60 Oworo Rd, Oworosoki, Lagos 105102, Lagos', lat: 6.549560529407427, lng: 3.401244017740445}, 

    {name: 'Bokku! Mart Ifako-gbagada', address: '20 Williams St Kosofe Ifako, 20 Williams St, Gbagada, Lagos 105102, Lagos', lat: 6.554238164678716,  lng: 3.3939071588448315},

    {name: 'Bokku! Mart Oshodi Rd, Mafoluku', address: '109 Oshodi Rd, Mafoluku, Lagos 100261, Lagos, Lagos 105102, Lagos', lat: 6.556491635333359,  lng: 3.3415230999492187},

    {name: 'Bokku! Mart Idimu road, Ejigbo', address: '101 Idimu Rd, Ejigbo, 102214, Lagos', lat: 6.55889474653892,  lng: 3.298214441053605},

    {name: 'Bokku! Mart Apena Owuromi', address: '1-2 Idimu Rd, Ejigbo, 102214, Lagos', lat: 6.552612255780917,  lng: 3.303626458844832},

    {name: 'Bokku! Mart Ajisegiri st, Shogunle', address: '26 Ajisegiri St, Shogunle, Oshodi/Isolo 102214, Lagos', lat: 6.570329373548591,   lng: 3.3416399480570003},

    {name: 'Bokku! Mart Idimu Rd', address: 'OPC Junction, 2 Ogunrombi St, Idimu, Lagos 102213, Lagos', lat: 6.570329373548591,   lng: 3.3416399480570003},

    {name: 'Bokku! Mart Shasha Rd, Akowonjo', address: 'B4 MASALLACHI BUS-STIO, ALONG Shasha Rd, AKOWONJO, Lagos 102213, Lagos', lat: 6.5927191670897,  lng: 3.3044370564239607},

    {name: 'Bokku! Mart Ogudu Rd', address: 'Local Government, 123 Ogudu Rd, Ogudu, Lagos 105102, Lagos', lat: 6.576421993679981,  lng: 3.390108811631189},

    {name: 'Bokku! Mart Oritshe, Ikeja', address: '5 Oritshe St, Allen, Ikeja 101233, Lagos', lat: 6.601279997515536,  lng: 3.3444250535047813},

    {name: 'Bokku! Mart ifelodun St, Ejigbo', address: '86 Ifelodun St, Ejigbo, Lagos 102214, Lagos', lat:6.565077832310384,  lng: 3.3008488883180296},

     
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
<h3> <span class="status ${isOpen ? 'open' : 'closed'}">${isOpen ? 'Open ' : 'Closed'}</span>  ${store.name}</h3>
<p>  ${store.address}.   |  ${distance.toFixed(2)} kilometers away</p>
<button class="view-on-map">View on Map</button>
<a href="https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}" target="_blank" class="view-on-map">Directions</a>
<p>Opening Hours: Mon-Sun, 9:00 AM - 9:00 PM</p>
`;
}

//Add store marker for each store
function addStoreMarkers() {
    stores.forEach((store, index) => {
        const marker = new google.maps.Marker({
            position: { lat: store.lat, lng: store.lng },
            map: map,
            title: store.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div style="font-family: Montserrat, sans-serif; line-height: 1; width: 250px;">
            <h3 style="margin: 0; font-size: 16px; font-weight: bold;">${store.name}</h3>
            <p style="margin: 7px 0; color: #666; font-size: 14px;">${store.address}</p>
            <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}&travelmode=driving', '_blank')" 
            style="padding: 6px 10px; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 15px; cursor: pointer; font-size: 12px;">
            Get Directions
        </button>
    </div>`
        });
        infoWindows.push(infoWindow);

// Add a marker click listener to show the info window
marker.addListener('click', () => {
infoWindows.forEach(iw => iw.close()); // Close other info windows
infoWindow.setContent(`<div style="font-family: Montserrat, sans-serif; line-height: 1; width: 250px;">
<h3 style="margin: 0; font-size: 16px; font-weight: bold;">${store.name}</h3>
<p style="margin: 7px 0; color: #666; font-size: 14px;">${store.address}</p>
<button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}&travelmode=driving', '_blank')" 
style="padding: 6px 10px; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 15px; cursor: pointer; font-size: 12px;">
Get Directions
</button>
</div>`);
infoWindow.open(map, marker);
});

// Function to handle "View on Map" clicks
function viewOnMap(store, marker) {
map.setZoom(15); // Adjust zoom level
map.setCenter(marker.getPosition()); // Center map on marker
infoWindows.forEach(iw => iw.close()); // Close other info windows
const infoWindow = new google.maps.InfoWindow();
infoWindow.setContent(`<div style="font-family: Montserrat, sans-serif; line-height: 1; width: 250px;">
<h3 style="margin: 0; font-size: 16px; font-weight: bold;">${store.name}</h3>
<p style="margin: 7px 0; color: #666; font-size: 14px;">${store.address}</p>
<button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.address)}&travelmode=driving', '_blank')" 
style="padding: 6px 10px; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 15px; cursor: pointer; font-size: 12px;">
Get Directions
</button>
</div>`);
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

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchIcon = document.getElementById('search-icon');
const exitIcon = document.getElementById('exit-icon');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query) {
        searchResults.classList.add('active');
        searchIcon.style.display = 'none';
        exitIcon.style.display = 'inline-block';

        const filteredStores = stores.filter(store =>
            store.name.toLowerCase().includes(query) ||
            store.address.toLowerCase().includes(query)
        );

        if (filteredStores.length) {
            filteredStores.forEach(store => {
                const resultItem = document.createElement('div');
                resultItem.textContent = store.name;
                resultItem.addEventListener('click', () => {
                    map.setCenter({ lat: store.lat, lng: store.lng });
                    map.setZoom(15);
                });
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = '<div>No results found</div>';
        }
    } else {
        searchResults.classList.remove('active');
        searchIcon.style.display = 'inline-block';
        exitIcon.style.display = 'none';
    }
});

exitIcon.addEventListener('click', () => {
    searchInput.value = '';
    searchResults.classList.remove('active');
    searchIcon.style.display = 'inline-block';
    exitIcon.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (!document.getElementById('search-container').contains(event.target)) {
        searchResults.classList.remove('active');
        searchIcon.style.display = 'inline-block';
        exitIcon.style.display = 'none';
    }
});

searchInput.addEventListener('click', (event) => {
    event.stopPropagation();
});

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
    
                // Add a marker for user's location
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
    