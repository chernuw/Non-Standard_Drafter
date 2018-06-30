$(document).ready(function () {
    new ClipboardJS('.btn');
    var cards;
    cards = [
        {
            "id": 1,
            "title": "Попробуй убей!",
            "heroes": ["Cho", "Gall", "Alexstrasza", "Lt. Morales", "Auriel"],
            "img": "img/cards/01.png"
        },
        {
            "id": 2,
            "title": "Глобальный хаос",
            "heroes": ["Brightwing", "The Lost Vikings", "Abathur", "Falstad", "Dehaka"],
            "img": "img/cards/02.png"
        },
        {
            "id": 3,
            "title": "Орк пати",
            "heroes": ["Garrosh", "Samuro", "Thrall", "Rehgar", "Gul'dan"],
            "img": "img/cards/03.png"
        },
        {
            "id": 4,
            "title": "Свежее мясо!",
            "heroes": ["The Lost Vikings", "Murky", "Rexxar", "D.Va", "The Butcher"],
            "img": "img/cards/04.png"
        },
        {
            "id": 5,
            "title": "Жмурки",
            "heroes": ["Nova", "Valeera", "Zeratul", "Samuro", "Tyrande"],
            "img": "img/cards/05.png"
        },
        {
            "id": 6,
            "title": "Тэрибл дэмедж",
            "heroes": ["Johanna", "Tyrael", "E.T.C.", "Anub'arak", "Lt. Morales"],
            "img": "img/cards/06.png"
        },
        {
            "id": 7,
            "title": "Мастера Меча",
            "heroes": ["Varian", "Samuro", "Arthas", "Sonya", "Tyrael"],
            "img": "img/cards/07.png"
        },
        {
            "id": 8,
            "title": "Чип и Дейл",
            "heroes": ["Cho", "Gall", "Abathur", "The Lost Vikings", "Murky"],
            "img": "img/cards/08.png"
        },
        {
            "id": 9,
            "title": "Прыг-скок",
            "heroes": ["Lunara", "Li-Ming", "Tracer", "Illidan", "Genji"],
            "img": "img/cards/09.png"
        },
        {
            "id": 10,
            "title": "Толстый доспех = успех",
            "heroes": ["Blaze", "Johanna", "Varian", "Artanis", "Arthas"],
            "img": "img/cards/10.png"
        },
        {
            "id": 11,
            "title": "Что ты такое?",
            "heroes": ["E.T.C.", "Stitches", "Abathur", "Cho", "Gall"],
            "img": "img/cards/11.png"
        },
        {
            "id": 12,
            "title": "Киборги заполонили всю планету",
            "heroes": ["Genji", "Probius", "Fenix", "Blaze", "D.Va"],
            "img": "img/cards/12.png"
        },
        {
            "id": 13,
            "title": "Секси Чики",
            "heroes": ["Tyrande", "Kerrigan", "Valeera", "Sylvanas", "Alexstrasza"],
            "img": "img/cards/13.png"
        },
        {
            "id": 14,
            "title": "Несите патроны!",
            "heroes": ["Raynor", "Tychus", "Tracer", "Ana", "Nova"],
            "img": "img/cards/14.png"
        },
        {
            "id": 15,
            "title": "ЧСВ – наше всё",
            "heroes": ["Ragnaros", "Alarak", "Varian", "Hanzo", "Valeera"],
            "img": "img/cards/15.png"
        },
        {
            "id": 16,
            "title": "Сильное колдунство",
            "heroes": ["Kael'thas", "Kel'Thuzad", "Jaina", "Li-Ming", "Chromie"],
            "img": "img/cards/16.png"
        },
        {
            "id": 17,
            "title": "Малявки",
            "heroes": ["Chromie", "The Lost Vikings", "Probius", "Murky", "Brightwing"],
            "img": "img/cards/17.png"
        },
        {
            "id": 18,
            "title": "Зерго-туса",
            "heroes": ["Abathur", "Dehaka", "Stukov", "Zagara", "Kerrigan"],
            "img": "img/cards/18.png"
        },
        {
            "id": 19,
            "title": "Протосс пати",
            "heroes": ["Tassadar", "Fenix", "Artanis", "Zeratul", "Probius"],
            "img": "img/cards/19.png"
        },
        {
            "id": 20,
            "title": "Власть огня",
            "heroes": ["Ragnaros", "Blaze", "Alexstrasza", "Kael'thas", "Junkrat"],
            "img": "img/cards/20.png"
        },
        {
            "id": 21,
            "title": "Форпост",
            "heroes": ["Probius", "Gazlowe", "Sgt. Hammer", "Blaze", "Deckard"],
            "img": "img/cards/21.png"
        },
        {
            "id": 22,
            "title": "Свет опалит тебя!",
            "heroes": ["Johanna", "Yrel", "Auriel", "Tyrael", "Uther"],
            "img": "img/cards/22.png"
        },
        {
            "id": 23,
            "title": "Нас не пробить!",
            "heroes": ["Artanis", "Chen", "Tassadar", "Zarya", "Medivh"],
            "img": "img/cards/23.png"
        },
        {
            "id": 24,
            "title": "Мы тебя везде достанем!",
            "heroes": ["Tyrande", "Artanis", "Falstad", "Abathur", "Hanzo"],
            "img": "img/cards/24.png"
        },
        {
            "id": 25,
            "title": "Тёмные личности",
            "heroes": ["Diablo", "Xul", "Leoric", "Malthael", "Greymane"],
            "img": "img/cards/25.png"
        },
        {
            "id": 26,
            "title": "Diablo-туса",
            "heroes": ["Azmodan", "Kharazim", "Cassia", "Nazeebo", "Valla"],
            "img": "img/cards/26.png"
        },
        {
            "id": 27,
            "title": "Хилимся-живём",
            "heroes": ["Zul'jin", "Li Li", "Lúcio", "Malfurion", "Ana"],
            "img": "img/cards/27.png"
        },
        {
            "id": 28,
            "title": "Тяни/толкай",
            "heroes": ["Maiev", "Stukov", "Alarak", "Kel'Thuzad", "Yrel"],
            "img": "img/cards/28.png"
        },
        {
            "id": 29,
            "title": "Кто хочет подраться?",
            "heroes": ["Sonya", "Muradin", "Illidan", "Garrosh", "Diablo"],
            "img": "img/cards/29.png"
        },
        {
            "id": 30,
            "title": "Нам лень ходить",
            "heroes": ["Tyrael", "Malthael", "Sgt. Hammer", "Auriel", "Falstad"],
            "img": "img/cards/30.png"
        }
    ];
    let pickedCards = [];
    for (let i = 0; i < 5; i++) {
        pickedCards.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
    console.log(pickedCards);
    for (let i = 0; i < pickedCards.length; i++) {
        $("#cg").append($("<div>").addClass("card")
            .append($("<div id='card" + i + "'>").addClass("card-body")
                .append($("<h6>").addClass("card-title").append(pickedCards[i].title + " (" + pickedCards[i].id + ")"))
            ));
        for (let j = 0; j < 5; j++) {
            $("#card" + i).append($("<li>").append(pickedCards[i].heroes[j]));
        }
    }

    pickedCards.forEach((value, index) => $("#slot"+(index+1)+"").append($("<img src='"+value.img+"'>")));

    pickedCards.forEach((value, index, array) => $("#ta").append(
        "[" + (index + 1) + "] " + value.title + " (" + value.id + ") : " + value.heroes + "\n"
    ));
});
