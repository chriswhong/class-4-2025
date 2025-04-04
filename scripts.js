


mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6ImNtNnozY2V1cDAwbTEybW9uNnI4dGV4eG4ifQ.tkb0d96wGhGW4-7Ds-iDCw';

const mapOptions = {
    container: 'map-container', // container ID
    center: [-73.99432, 40.71103], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10.92, // starting zoom
    // bearing: 29,
    // style: 'mapbox://styles/mapbox/outdoors-v12'
    // hash: true
}

const coolMap = new mapboxgl.Map(mapOptions);


const markerOptions = {
    color: '#57068C',
}


// // create the popup
// const popup = new mapboxgl.Popup({
//     offset: 36,
// }).setText(
//     'This is the NYU Wagner building. It is located at 105 E. 17th St, New York, NY 10003.'
// );


// // NYU Wagner building
// const marker1 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-73.98828, 40.73638])
//     .setPopup(popup)
//     .addTo(coolMap);

// // some point north of NYU Wagner
// const marker2 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-73.98828, 40.73])
//     .addTo(coolMap);

// // union square marker
// const marker3 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-73.99031, 40.73592])
//     .addTo(coolMap);


// now let's make a markers for our favorite pizza places

pizzaData.forEach((record) => {
    const popup = new mapboxgl.Popup({
        offset: 36,
    }).setText(
        `${record.first_name}'s favorite pizza shop is ${record.pizza_shop}.`
    );

    let programColor = '#ccc';

    if (record.program === 'MUP') {
        programColor = 'green'
    }

    if (record.program === 'instructor') {
        programColor = 'steelblue'
    }

    if (record.program === 'Journalism') {
        programColor = 'red'
    }

    if (record.program === 'Tandon') {
        programColor = 'purple'
    }

    if (record.program === 'MSPP') {
        programColor = 'orange'
    }

    if (record.program === 'MAUSP') {
        programColor = 'black'
    }




    new mapboxgl.Marker({
        scale: 0.8,
        color: programColor
    })
        .setLngLat([record.longitude, record.latitude])
        .setPopup(popup)
        .addTo(coolMap)
})