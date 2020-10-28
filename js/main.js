"use strict";

//btn js

// 버튼 클릭시 최상단으로 이동

const topBtnParent = document.querySelector('.fixed_btn'); //우측 하단 고정버튼 감싼 div
const topBtn = topBtnParent.querySelectorAll('button')[1] //우측 하단 고정버튼 중 두 번째(화살표) 버튼
topBtn.addEventListener('click', ()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});

//menu js

//navigation 보이기

const header = document.querySelector('.header_nav_box'); //header 감싼 박스
const headerMenuListBox = document.querySelector('.header_nav_menu_list'); //메뉴 ul
const headerMenuList = headerMenuListBox.querySelectorAll('li'); // ul의 li, 메뉴
const navItems = document.querySelectorAll('.header_nav_menu_list_item'); //header 소메뉴

const headerBtn = document.querySelector('.nav_btn_signIn'); //header button

// const navHide = navItems.classList.contains('hidden'); //소메뉴가 class hidden을 가짐

const headerLogoBox = document.querySelector('.header_nav_logo'); //header 로고
const headerLogo = headerLogoBox.querySelectorAll('i')[0]; //gnb 로고
const headerLangSetBox = document.querySelector('.header_nav_lang'); //언어 설정 박스
const headerLangSet =  headerLangSetBox.querySelectorAll('span'); //언어 설정 span

function changeNavColor() { //nav 색 바꿔주는 함수
    header.style.backgroundColor = 'white';
    headerLogo.style.color = '#0082c6';
    headerLangSet.forEach(function(lang){
        lang.style.color= 'black';});
        headerMenuList.forEach(function(headerList){headerList.style.color = 'black';});
        headerBtn.style.border = '1px solid #003492';
}

function originalColor () { //nav의 원래 색
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    headerLogo.style.color = 'white';
    headerLangSet.forEach(function(lang){
        lang.style.color= 'white';});
        headerMenuList.forEach(function(headerList){headerList.style.color = 'white';});
        headerBtn.style.border = 'none';
}

//스크롤시 네비게이션에 배경색 생기게 하기

let headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    if(window.scrollY > headerHeight){
        header.classList.add('headerColorChange');
        changeNavColor();
    }
    else {
        originalColor();
    }
});

// 1. header에 마우스를 올림 
// 2. headernav menu에서 hidden 유무 검사 (복수) 
// 3. hidden잇으면 없애기 + transition이랑 높이값주기 (없으면 아무것도 수행X)
// 4. 마우스 벗어났을 때 반대로 기능 수행



const navBox = document.querySelector(".header_nav_menu_box"); //메뉴 감싼 박스
let navBoxHeight = navBox.getBoundingClientRect(); //메뉴 감싼 박스의 높이

header.addEventListener ('mouseenter', () => {

    for(var i = 0; i < navItems.length; i++){
        let navHide = navItems[i]

    if(navHide) {
        navHide.classList.remove('hidden');

        navHide.style.display = 'flex';
        navHide.style.height = navBoxHeight;
        header.classList.add('headerColorChange');
        changeNavColor();
        }
    }
});


//스크롤 안해도 메뉴 색 고정

function headerColorfixed(){
    if(window.scrollY > headerHeight) {
        header.classList.add('headerColorChange');
        changeNavColor();
    }
}

header.addEventListener ('mouseleave', () => {

    for(var i = 0; i < navItems.length; i++){
        let navHide = navItems[i]

  
    if(navItems) {
        navHide.classList.add('hidden');
        navHide.style.display = 'none';
        header.classList.add('headerColorChange');
        originalColor();
        headerColorfixed();
    }
    }
});

//menu settings end

//speaker part js 

//speaker part end

const slideBtnParent = document.querySelector('content_speaker_button_icon'); //버튼 부모 박스
// const slideBtn = slideBtnParent.querySelectorAll('button')[1] //버튼 배열
const slider = document.querySelector('.content_speaker_slider') //가로로 긴 박스

let sliderWidth = slider.offsetWidth; //슬라이더 가로 값 받아옴
// console.log(sliderWidth);
const speakerBox = document.querySelectorAll('.content_speaker_intro_box_wrap'); //박스-1차
const speakerBoxImg = document.querySelectorAll('.content_speaker_intro_box_img'); //박스 이미지

for(let i =0; i <speakerBoxImg.length; i++ ){
    speakerBoxImg[i].style.backgroundImage = 'url(../css/src/img/s'+ (i+1) +'.jpg)';
}

let speakerBoxWidth = speakerBox[0].offsetWidth; //박스 가로 값 받아옴
// console.log(speakerBoxWidth);

let speakerBoxNum = speakerBox.length;


for(let i=0; i<3; i++){
let cloneLastSpeakerBox = speakerBox[speakerBoxNum-(i+1)].cloneNode(true); // 마지막 박스 복사
slider.prepend(cloneLastSpeakerBox); //복사해서 첫 박스 전에 넣기
}

let reSpeakerBox = document.querySelectorAll('.content_speaker_intro_box_wrap');
let reSBoxLen = reSpeakerBox.length;// speaker box 개수 세기

// console.log(speakerBox.length, reSBoxLen); //11개

slider.style.width= speakerBoxWidth * reSBoxLen + 'px'; // slider box 길이 늘이기
// console.log(slider.style.width);

slider.style.marginLeft = -440 + 'px'; //slider 왼쪽으로 440px만큼 이동
slider.style.position = 'relative';
