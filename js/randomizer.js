$(document).ready(function () {
    new ClipboardJS('.btn');
    document.getElementById("heroesTA").addEventListener('click', function () {
        $("#clipboardButton").click();
    }, false);
    $("#cardsToggle :input").change(function () {
        redraw($(this).val());
    });
    redraw(3);
});


function redraw(cardCount) {
    clearCards();
    let mapPool = ["Башни рока", "Бойня на Браксисе", "Завод Вольской", "Бухта черносерда", 
        "Сады ужаса", "Альтеракский перевал", "Проклятая лощина"];
    let cards = [
        {
            "id": 1,
            "title": "Попробуй убей!",
            "heroes": [" Чо", " Галл", " Алекстраза", " Лт. Моралес", " Ауриэль"],
            "img": "img/cards/01.png"
        },
        {
            "id": 2,
            "title": "Глобальный хаос",
            "heroes": [" Светик", " Потерявшиеся Викинги", " Абатур", " Фалстад", " Дехака"],
            "img": "img/cards/02.png"
        },
        {
            "id": 3,
            "title": "Орк пати",
            "heroes": [" Гаррош", " Самуро", " Тралл", " Регар", " Гул'дан"],
            "img": "img/cards/03.png"
        },
        {
            "id": 4,
            "title": "Свежее мясо!",
            "heroes": [" Потерявшиеся Викинги", " Мурчаль", " Рексар", " D.Va", " Мясник"],
            "img": "img/cards/04.png"
        },
        {
            "id": 5,
            "title": "Жмурки",
            "heroes": [" Нова", " Валира", " Зератул", " Самуро", " Тиранда"],
            "img": "img/cards/05.png"
        },
        {
            "id": 6,
            "title": "Тэрибл дэмедж",
            "heroes": [" Джоанна", " Тираэль", " E.T.C.", " Ануб'арак", " Лт. Моралес"],
            "img": "img/cards/06.png"
        },
        {
            "id": 7,
            "title": "Мастера Меча",
            "heroes": [" Вариан", " Самуро", " Артас", " Соня", " Тираэль"],
            "img": "img/cards/07.png"
        },
        {
            "id": 8,
            "title": "Чип и Дейл",
            "heroes": [" Чо", " Галл", " Абатур", " Потерявшиеся Викинги", " Мурчаль"],
            "img": "img/cards/08.png"
        },
        {
            "id": 9,
            "title": "Прыг-скок",
            "heroes": [" Лунара", " Ли-Мин", " Трейсер", " Иллидан", " Гензи"],
            "img": "img/cards/09.png"
        },
        {
            "id": 10,
            "title": "Толстый доспех = успех",
            "heroes": [" Блэйз", " Джоанна", " Вариан", " Артанис", " Артас"],
            "img": "img/cards/10.png"
        },
        {
            "id": 11,
            "title": "Что ты такое?",
            "heroes": [" E.T.C.", " Стежок", " Абатур", " Чо", " Галл"],
            "img": "img/cards/11.png"
        },
        {
            "id": 12,
            "title": "Киборги заполонили всю планету",
            "heroes": [" Гензи", " Пробиус", " Феникс", " Блэйз", " D.Va"],
            "img": "img/cards/12.png"
        },
        {
            "id": 13,
            "title": "Секси Чики",
            "heroes": [" Тиранда", " Керриган", " Валира", " Сильвана", " Алекстраза"],
            "img": "img/cards/13.png"
        },
        {
            "id": 14,
            "title": "Несите патроны!",
            "heroes": [" Рейнор", " Тайкус", " Трейсер", " Ана", " Нова"],
            "img": "img/cards/14.png"
        },
        {
            "id": 15,
            "title": "ЧСВ – наше всё",
            "heroes": [" Рагнарос", " Аларак", " Вариан", " Хандзо", " Валира"],
            "img": "img/cards/15.png"
        },
        {
            "id": 16,
            "title": "Сильное колдунство",
            "heroes": [" Кель'тас", " Кел'Тузад", " Джайна", " Ли-Мин", " Хроми"],
            "img": "img/cards/16.png"
        },
        {
            "id": 17,
            "title": "Малявки",
            "heroes": [" Хроми", " Потерявшиеся Викинги", " Пробиус", " Мурчаль", " Светик"],
            "img": "img/cards/17.png"
        },
        {
            "id": 18,
            "title": "Зерго-туса",
            "heroes": [" Абатур", " Дехака", " Стуков", " Загара", " Керриган"],
            "img": "img/cards/18.png"
        },
        {
            "id": 19,
            "title": "Протосс пати",
            "heroes": [" Тассадар", " Феникс", " Артанис", " Зератул", " Пробиус"],
            "img": "img/cards/19.png"
        },
        {
            "id": 20,
            "title": "Власть огня",
            "heroes": [" Рагнарос", " Блэйз", " Алекстраза", " Кель'тас", " Крысавчик"],
            "img": "img/cards/20.png"
        },
        {
            "id": 21,
            "title": "Форпост",
            "heroes": [" Пробиус", " Газлоу", " Срж. Кувалда", " Блэйз", " Декард"],
            "img": "img/cards/21.png"
        },
        {
            "id": 22,
            "title": "Свет опалит тебя!",
            "heroes": [" Джоанна", " Ирель", " Ауриэль", " Тираэль", " Утер"],
            "img": "img/cards/22.png"
        },
        {
            "id": 23,
            "title": "Нас не пробить!",
            "heroes": [" Артанис", " Чэнь", " Тассадар", " Заря", " Медив"],
            "img": "img/cards/23.png"
        },
        {
            "id": 24,
            "title": "Мы тебя везде достанем!",
            "heroes": [" Тиранда", " Артанис", " Фалстад", " Абатур", " Хандзо"],
            "img": "img/cards/24.png"
        },
        {
            "id": 25,
            "title": "Тёмные личности",
            "heroes": [" Диабло", " Зул", " Леорик", " Малтаэль", " Седогрив"],
            "img": "img/cards/25.png"
        },
        {
            "id": 26,
            "title": "Diablo-туса",
            "heroes": [" Азмодан", " Каразим", " Кассия", " Назибо", " Валла"],
            "img": "img/cards/26.png"
        },
        {
            "id": 27,
            "title": "Хилимся-живём",
            "heroes": [" Зул'джин", " Ли Ли", " Лусио", " Малфурион", " Ана"],
            "img": "img/cards/27.png"
        },
        {
            "id": 28,
            "title": "Тяни/толкай",
            "heroes": [" Майев", " Стуков", " Аларак", " Кел'Тузад", " Ирель"],
            "img": "img/cards/28.png"
        },
        {
            "id": 29,
            "title": "Кто хочет подраться?",
            "heroes": [" Соня", " Мурадин", " Иллидан", " Гаррош", " Диабло"],
            "img": "img/cards/29.png"
        },
        {
            "id": 30,
            "title": "Нам лень ходить",
            "heroes": [" Тираэль", " Малтаэль", " Срж. Кувалда", " Ауриэль", " Фалстад"],
            "img": "img/cards/30.png"
        }
    ];
    let pickedCards = [];
    let pickedMaps = [];
    let ta = $("#ta");
    for (let i = 0; i < cardCount; i++) {
        pickedCards.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
    for (let i = 0; i < cardCount; i++) {
        pickedMaps.push(mapPool.splice(Math.floor(Math.random() * mapPool.length), 1)[0]);
    }
    pickedCards.forEach((value, index) => $("#slot" + (index + 1) + "").append($("<img src='" + value.img + "'>")));
    pickedCards.forEach((value, index) => ta.val(ta.val() +
        "[" + (index + 1) + "] " + value.title + " (" + value.id + ") : " + value.heroes + "\n"
    ));
    ta.val(ta.val() + "Карты: ");
    pickedMaps.forEach(value => ta.val(ta.val() + value + ", "));
    if(cardCount == 3){
        $("#slot4").hide();
        $("#slot5").hide();
        $("#slot6").hide();
        $("#slot7").hide();
    } else {
        $("#slot3").show();
        $("#slot4").show();
        $("#slot5").show();
        $("#slot7").show();
    }
}

function clearCards() {
    for (let i = 1; i < 8; i++) {
        $("#slot" + i + "").empty();
    }
    $("#ta").val('');
}
