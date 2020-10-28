"use strict";

// 버튼 클릭시 최상단으로 이동

const topBtnParent = document.querySelector('.fixed_btn'); //우측 하단 고정버튼 감싼 div
const topBtn = topBtnParent.querySelectorAll('button')[1] //우측 하단 고정버튼 중 두 번째(화살표) 버튼
topBtn.addEventListener('click', ()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});

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
        headerBtn.style.borderColor = '#003492';
}

function originalColor () { //nav의 원래 색
    header.style.backgroundColor = 'transparent';
    headerLogo.style.color = 'white';
    headerLangSet.forEach(function(lang){
        lang.style.color= 'white';});
        headerMenuList.forEach(function(headerList){headerList.style.color = 'white';});
        headerBtn.style.bordercolor = 'transparent';
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


// 헤더에 마우스 올릴 때 메뉴 펼치기
// navItems.forEach(function(list){
//     list.style = 'height:0; display:none; transition: all 500ms linear';
// }); //nav의 소메뉴 숨기기

// header.addEventListener('mouseenter', () => {
//     changeNavColor();
//     navItems.forEach(function(list){
//         list.style.display = 'block';
//     });
//     setTimeout(function(){
//         navItems.forEach(function(list){
//             list.style.height = headerHeight;
//         })
//     }, 100);
// });

// header.addEventListener('mouseleave', () => {

//     originalColor();
//     navItems.forEach(function(list){
//         list.style.display = 'block';
//     });
//     setTimeout(function(){
//         navItems.forEach(function(list){
//             list.style ='height:0; display:none; transition: all 500ms linear';
//         })
//     }, 100);
// });


// 1. header에 마우스를 올림 
// 2. headernav menu에서 hidden 유무 검사 (ㅂ고수) 
// 3. hidden잇으면 없애기 + transition이랑 높이값주기 (없으면 아무것도 수행X)
// 4. 마우스 벗어났을 때 반대로 기능 수행




let navHide;
for(var i = 0; i < navItems.length; i++){
navHide = navItems[i]
// console.log(navHide);
}

const navBox = document.querySelector(".header_nav_menu_box"); //메뉴 감싼 박스
let navBoxHeight = navBox.getBoundingClientRect(); //메뉴 감싼 박스의 높이

header.addEventListener ('mouseenter', () => {

   

    if(navHide) {
        navHide.classList.remove('hidden');

        navHide.style.display = 'flex';
        navHide.style.height = navBoxHeight;
        header.classList.add('headerColorChange');
        changeNavColor();
        
    }

});


header.addEventListener ('mouseleave', () => {

  
    if(navItems) {
        navHide.classList.add('hidden');
        navHide.style.display = 'none';
        header.classList.add('headerColorChange');
        originalColor();
    }

});

console.log(header)