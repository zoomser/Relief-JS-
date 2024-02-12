// BURGER

// поиск элементов
let burger=document.querySelector('.burger')
let menu=document.querySelector('.nav_ul')
// действие к переменной бургер
burger.addEventListener("click",function(){
// добавляем класс к элементу toggle(тумблер)
menu.classList.toggle("show")
// делаем полосочки в крестик
burger.classList.toggle("active_burger")
})

// Text about scrol
let about_text_company2=document.querySelectorAll(".about_text_company2")
let about_text_span=document.querySelector(".about_text_span")
let about_strela_down=document.querySelector(".about_strela_down")

about_strela_down.addEventListener("click",function () {
    about_text_span.classList.add("about_text_company2");
    about_text_span.style.display="block";
    
    
});
// поиск нужных элементов из html
let nav_button=document.querySelector(".nav_button");
let application=document.querySelector(".application");
let close_app=document.querySelector(".close_app");
let app_button=document.querySelector(".app_button");
let names=document.querySelector("[placeholder='Имя*']");
let phone=document.querySelector("[placeholder='Телефон*']");

// отобразить форму заявки
nav_button.addEventListener("click",function(){
    // application.style.display=`flex`;
    application.classList.toggle("application_active2")
})
// Закрыть всплывающее окно кликом на любое место вне окна
window.addEventListener('click', function (e) {
    if (!application.contains(e.target) && !nav_button.contains(e.target)) {
        // Ниже код, который нужно выполнить при срабатывании события.
        application.classList.remove('application_active2');
    }
});

// кнопка закрыть форму
close_app.addEventListener("click",function(){
    application.classList.toggle("application_active2")
})
// отправить форму
// if условие проверяет заполнение полей(!='' не равно пустой строке)
app_button.addEventListener("click",function(){
    if(names.value!='' && phone.value!=''){
      alert("Имя: "+names.value+"\nТелефон: "+phone.value)  
    }
})



// GARDEN MAINTENANCE переключение кнопок и текста
let garden_season_txt12=document.querySelector(".garden_season_txt12")
let garden_season=document.querySelector(".garden_season");

// навести на элемент(mouseover) и добавляет класс(classList.add)
garden_season.addEventListener("mouseover",function(){
    garden_season.classList.add("garden_season_hover")
})
// увести с элемента(mouseout) и удаляет класс(classList.remove)
garden_season.addEventListener("mouseout",function(){
    garden_season.classList.remove("garden_season_hover")
})

let garden_seasons_blok=document.querySelectorAll(".garden_season,.garden_autumn,.garden_spring,.garden_summer")
let garden_seasons_txt_all=document.querySelectorAll(".garden_season_txt12,.garden_osen_txt12,.garden_vesna_txt12,.garden_leto_txt12")

for(let i=0; i<garden_seasons_blok.length; i++){

garden_seasons_blok[i].addEventListener("mouseover",function(){
        garden_seasons_blok[i].classList.add("garden_season_hover")
    })
    garden_seasons_blok[i].addEventListener("mouseout",function(){
        garden_seasons_blok[i].classList.remove("garden_season_hover")
    })
    garden_seasons_blok[i].addEventListener("click",function(){   
       
        garden_seasons_blok.forEach(function(button){ 
            button.classList.remove("garden_season_active")
        }) 
        garden_seasons_blok[i].classList.toggle("garden_season_active") 
        garden_seasons_txt_all.forEach(function(text){
            text.classList.remove("garden_season_txt_active")
        })
        garden_seasons_txt_all[i].classList.toggle("garden_season_txt_active")
    })
    
}

// <!-- OUR PROJECTS -->
let our_img_all=document.querySelectorAll(".rec51,.rec53,.rec54")
let rec51=document.querySelector(".rec51")
let rec53=document.querySelector(".rec53")
let rec54=document.querySelector(".rec54")
let slide_one=document.querySelector(".slide_one")
let slide_two=document.querySelector(".slide_two")
let slide_three=document.querySelector(".slide_three")
let slide_close_icon1=document.querySelector(".slide_close_icon1")
let slide_close_icon2=document.querySelector(".slide_close_icon2")
let slide_close_icon3=document.querySelector(".slide_close_icon3")
let slide_all_all_all=document.querySelector(".slide_all_all_all")
let slides=document.querySelectorAll(".slide_one,.slide_two,.slide_three")

rec51.addEventListener("click",function () {
    slide_three.classList.add("slide_show")
})

rec53.addEventListener("click",function () {
    slide_one.classList.add("slide_show")
})

rec54.addEventListener("click",function () {
    slide_two.classList.add("slide_show")
})
slide_close_icon1.addEventListener("click",function(){
    slide_one.classList.remove("slide_show")
    
})
slide_close_icon2.addEventListener("click",function(){
    slide_two.classList.remove("slide_show")
    
})
slide_close_icon3.addEventListener("click",function(){
    slide_three.classList.remove("slide_show")
    
})

// BIG SLIDERS
let big_arrow3_left=document.querySelectorAll(".big_arrow3_left,.big_arrow1_left,.big_arrow2_left")
let big_arrow3_right=document.querySelectorAll(".big_arrow3_right,.big_arrow1_right,.big_arrow2_right")


for(let x=0; x<slides.length; x++){
    big_arrow3_right[x].addEventListener("click",function() {
        slides.forEach(function(ssss){
            ssss.classList.remove("slide_show")
        })
        slides[x+1].classList.add("slide_show")
    })
    big_arrow3_left[x].addEventListener("click",function() {
        slides.forEach(function(ssss){
            ssss.classList.remove("slide_show")
        })
        slides[x-1].classList.add("slide_show")
    })
};


// SMALL SLIDERS

let small_arrow_left=document.querySelectorAll(".small_arrow_left")
let small_arrow_right=document.querySelectorAll(".small_arrow_right")
let slide3_bottom=document.querySelectorAll(".slide3_bottom div")
let slide_pic3=document.querySelector(".slide_pic3")

for(let y=0; y<slide3_bottom.length; y++){
    slide3_bottom[y].addEventListener("click", function(){
        slide_pic3.style.background=`url("img/87d9f7d3de6d5f89221a16f416968924.jfif"), lightgray 50% / cover no-repeat`
    })
};



// <!-- progress-bar -->
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);

// <!-- progress-bar -->


