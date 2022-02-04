// Switch-case


// let lang = prompt("На каком языке вы хотите просматривать контент?")

// if(lang == "Русский"){
//     alert("Вы выбрали язык 'Русский', добро пожаловать")
// } else if (lang == "Английський"){
//     alert("Вы выбрали язык 'Англиський', Welcome")
// } else if (lang == "Французкий"){
//     alert("Вы выбрали язык 'Французкий', Bienvenue")
// } else {
//     alert("ТАкого языка в системе нет")
// }

// switch-casel

// let lang = prompt("На каком языке вы хотите просматривать контент")

// switch(lang){
//     case 'Русский':
//         alert("Вы выбрали язык 'Русский' Добро пожаловать");
//         break;
//     case 'Английський':
//         alert("Вы выбрали язык 'Английський', Welcome");
//         break;
//     case 'Французкий':
//         alert("Вы выбрали язык 'Французкий', Bienvenue");
//         break;
//     default:
//         alert("Такого языка нет в системе нет")
// }

// switch (переменная) {
//     case значение1:
//         инструкция1
//         break;
//         case значение2:
//         инструкция2
//         break;
//     default:
//         break;
// }

let a = document.getElementById('selector')
let paragraf = document.getElementById('paragraf')
a.addEventListener('change', function(){
    let option = a.value
    if(option == 'krick'){
        paragraf.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/R.jfif" alt="">
                                    <h1>Крик 4</h1>
                                    <p>Сидни Прескотт последние несколько лет провела в относительной тишине и покое. Жизнь потихоньку налаживается, вдали от вспышек и видеокамер папарацци. Но когда находят труп одного из студентов, мир Сидни Прескотт вновь начинает рушиться. Всему виной возродившийся убийца в маске «Лицо Призрака».</p>
                                    <div class="ancher">
                                        <a href="https://kinogo.biz/30569-krik-4.html">Смотреть онлайн</a>
                                    </div>
                                </div>`
    } else if(option == 'astral'){
        paragraf.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/a1ae39fcff2b85ce61d9d55255e604.jpg" alt="">
                                    <h1>Астрал</h1>
                                    <p>Шесть друзей, скучающих на самоизоляции во время пандемии коронавируса, устраивают спиритический онлайн-сеанс. Кто-то из потустороннего мира действительно проникает в их дома и превращает виртуальные хоррор-игры в кошмар наяву.</p>
                                    <div class="ancher">
                                        <a href="https://tv.kyivstar.ua/ru/movie/60f56d6f491d8d6a4d7b7315-2020-astral-onlajn">Смотреть онлайн</a>
                                    </div>
                                </div>`
    } else if(option == 'anabel'){
        paragraf.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/r1c317315d302uj44l19p.jpg" alt="">
                                    <h1>Аннабель</h1>
                                    <p>Действие разворачивается в 1967 году в Санта-Монике. Джон Форм и его жена Мия ждут появления первого ребенка, начав обустраивать детскую спальню. Мужчина покупает большую фарфоровую куклу, которая становится главным украшением комнаты. </p>
                                    <div class="ancher">
                                        <a href="https://rezka.ag/films/horror/7734-proklyatie-annabel-2014.html">Смотреть онлайн</a>
                                    </div>
                                </div>`
    } else if(option == 'Babaduk')
        paragraf.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/h32977c7829a1bg20h63a.jpg" alt="">
                                    <h1>Бабадук</h1>
                                    <p>Фильм рассказывает историю женщины по имени Амелия, все еще не восстановившейся после потери мужа, который погиб в тот же день, когда она родила их сына Сэма. Не полностью подготовленная к роли матери-одиночки, она пытается дать своему ребенку все самое необходимое, в то время как сам мальчик страдает от бессонницы и озабочен охотой на воображаемого монстра.</p>
                                    <div class="ancher">
                                        <a href="https://rezka.ag/films/drama/3311-babaduk-2014.html">Смотреть онлайн</a>
                                    </div>
                                </div>`
})
