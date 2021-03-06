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
// 3. hidden 있으면 없애기 + transition이랑 높이값주기 (없으면 아무것도 수행X)
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

function headerColorFixed(){
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
        headerColorFixed();
    }
    }
});

//menu settings end

//speaker part js 

const slider = document.querySelector('.content_speaker_slider') //가로로 긴 박스

let sliderWidth = slider.offsetWidth; //슬라이더 가로 값 받아옴
// console.log(sliderWidth);
let bottomBox = document.querySelector('.content_speaker_bottom') //bottom 길이 받아옴
let bottomBoxWidth = bottomBox.offsetWidth; //bottom 가로 길이 받아옴
const speakerBox = document.querySelectorAll('.content_speaker_intro_box_wrap'); //박스-1차
const speakerBoxImg = document.querySelectorAll('.content_speaker_intro_box_img'); //박스 이미지
let speakerBoxWidth = speakerBox[0].offsetWidth; //박스 하나 가로값
let speakerBoxMargin = 100;

let boxShow = 4; //보이고 싶은 박스의 개수

for(let i =0; i <speakerBoxImg.length; i++ ){
    speakerBoxImg[i].style.backgroundImage = 'url(../css/src/img/s'+ (i+1) +'.jpg)';
} //이미지 삽입

bottomBox.style.width = boxShow * speakerBoxWidth - speakerBoxMargin + 'px';

let speakerBoxNum = speakerBox.length;

let cloneLastSpeakerBox 

for(let i=0; i<boxShow; i++){
  cloneLastSpeakerBox = speakerBox[speakerBoxNum-(i+1)].cloneNode(true);
  slider.prepend(cloneLastSpeakerBox);
}

let newSpeakerBox = document.querySelectorAll('.content_speaker_intro_box_wrap');
let newSBoxLen = newSpeakerBox.length;

slider.style.width = speakerBoxWidth * newSBoxLen + 'px';
slider.style.marginLeft = -(boxShow * speakerBoxWidth) + 'px'; 
//slider 왼쪽으로 4 * 440px만큼 이동 (첫번째박스 위치 맞추기)
slider.style.position = 'relative';
//speaker part end

const slideBtnParent = document.querySelector('.content_speaker_button_icon'); //버튼 부모 박스
const slideBtn = slideBtnParent.querySelectorAll('button'); //버튼 2개 받아옴

// 복사본 마지막 박스가 첫번 째 자리에 오면 마지막 박스 원본이 첫번째 자리로 오게 만들기

let clickCount = 0; //클릭 횟수 저장 변수

slideBtn[0].addEventListener('click', () =>{

  clickCount ++;
  slider.style.left = speakerBoxWidth * clickCount + 'px';
  slider.style.transition = 'left 300ms linear';

  if(clickCount >= boxShow) {
    slider.style.left = speakerBoxWidth * clickCount + 'px';
   clickCount = -(speakerBoxNum-7);
  }

});

slideBtn[1].addEventListener('click', () =>{

  clickCount --;
  slider.style.left = speakerBoxWidth * clickCount + 'px';

  if(clickCount <= -boxShow) {
    slider.style.left = speakerBoxWidth * clickCount + 'px';
   clickCount = 1;
  }

});
