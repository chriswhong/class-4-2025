


mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6ImNtNnozY2V1cDAwbTEybW9uNnI4dGV4eG4ifQ.tkb0d96wGhGW4-7Ds-iDCw';

const mapOptions = {
    container: 'map-container', // container ID
    center: [-73.99432, 40.71103], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10.92, // starting zoom
}

const map = new mapboxgl.Map(mapOptions);

console.log(randomPoints)


map.on('load', () => {

    // add 3 rando points I made in geojson.io
    map.addSource('randomPoints', {
        type: 'geojson',
        data: randomPoints
    })

    // add the governors island aura
    map.addSource('governorsIsland', {
        type: 'geojson',
        data: governorsIslandAura
    })

    // add the governors island aura
    map.addSource('boroBoundaries', {
        type: 'geojson',
        data: './data/boro-boundaries.geojson'
    })

    // add the governors island aura
    map.addSource('brooklynBlocks', {
        type: 'geojson',
        data: './data/brooklyn-blocks.geojson'
    })

    map.addLayer({
        id: 'randomPoints',
        type: 'circle',
        source: 'randomPoints',
        paint: {
            'circle-radius': 10,
            'circle-color': '#FF0000',
            'circle-opacity': 0.5,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#FFFFFF',
            'circle-stroke-opacity': 1
        }
    })

    map.addLayer({
        id: 'fillGovernorsIslandAura',
        type: 'fill',
        source: 'governorsIsland',
        paint: {
            'fill-color': 'steelblue',
            'fill-opacity': 0.4,
        }
    })

    map.addLayer({
        id: 'boroBoundaries',
        type: 'fill',
        source: 'boroBoundaries',
        paint: {
            'fill-color': [
                'match',
                ['get', 'BoroName'],
                'Staten Island', '#f4f455',
                'Manhattan', '#f7d496',
                'Queens', '#FF9900',
                'Brooklyn', '#f7cabf',
                'Bronx', '#ea6661',
                /* other */ '#ccc'
            ]
            ,
            'fill-opacity': 0.9,
        },
        slot: 'middle'
    })

    map.addLayer({
        id: 'boroBoundariesOutline',
        type: 'line',
        source: 'boroBoundaries',
        paint: {
           'line-color': '#000',
            'line-width': 2,
            'line-opacity': 0.6
        },
        slot: 'middle'
    })

    map.addLayer({
        id: 'brooklynBlocks',
        type: 'fill',
        source: 'brooklynBlocks',
        paint: {
            'fill-color': [ // use an expression for data-driven styling
                'interpolate',
                ['linear'],
                ['get', "UnitsRes"],
                0,
                '#ece7f2',
                4,
                '#a6bddb',
                10,
                '#2b8cbe'
            ]
,
            'fill-opacity': 1,
        }
    })

})
