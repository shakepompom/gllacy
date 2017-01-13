ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.939334, 30.329320],
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: "Gllacy Shop"
    }, {
        iconLayout: "default#image",
        iconImageHref: "images/pin.png",
        iconImageSize: [218, 142],
        iconImageOffset: [-40, -142]
    });

    myMap.geoObjects.add(myPlacemark);
}
