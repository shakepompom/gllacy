ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
   var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
   function init () { // функция - собиралка карты и фигни
       myMap = new ymaps.Map("map", { // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
            center: [55.76, 37.64], // ну тут центр
            behaviors: ['default', 'scrollZoom'], // скроллинг колесом
            zoom: 10 // тут масштаб
       });
       myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
            .add('zoomControl', { left: 5, top: 5 }) //Масштаб
            .add('typeSelector') //Список типов карты
            .add('mapTools', { left: 35, top: 5 }) // Стандартный набор кнопок
            .add('searchControl'); // Строка с поиском
        }

var myPlacemark0 = new ymaps.Placemark([55.752577,37.632134], { // Создаем метку с такими координатами и суем в переменную
balloonContent: 'Заголовок метки 1Немного инфы о том, о сем. Лорем ипсум чото там.' // сдесь содержимое балуна в формате html, все стили в css
	}, {
	iconImageHref: '../img/pin.png', // картинка иконки
	iconImageSize: [64, 64], // размер иконки
	iconImageOffset: [-32, -64], // позиция иконки
	balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
	balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
	balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна
	balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
	balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
	balloonShadow: false
});
/* Добавляем метки на карту */
myMap.geoObjects
	.add(myPlacemark0);
