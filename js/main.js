"use strict";

//to the top
const topBtnParent=document.querySelector('.fixed_btn'); //우측 하단 고정 버튼 감싼 박스
const topBtn= topBtnParent.querySelectorAll('button')[1] //우측 하단 고정 버튼 중 두번째 버트
topBtn.addEventListener('click', ()=>{
window.scrollTo({top:0, left:0, behavior:'smooth'});
});

//showing menu items when move the mouse on the header
const header= document.querySelector('.header_nav_box'); //header 감싼 박스

const headerMenu=document.querySelector('.header_nav_menu_list_item'); //소메뉴
const navItems= document.querySelectorAll('.header_nav_menu_list_item');
const showMenu= headerMenu.classList.contains('hidden');

const headerLeftSide= document.querySelector('.header_nav_logo'); //gnb 왼쪽 박스
const headerLogo = headerLeftSide.querySelectorAll('i')[0]; //gnb 로고
const headerLeftText = document.querySelector('.header_nav_lang'); //왼쪽 박스의 텍스트 감싼 박스
const headerLangSet = headerLeftText.querySelectorAll('span'); // 언어 설정 텍스트
const headerMenuListBox = document.querySelector('.header_nav_menu_list'); //메뉴 ul
const headerMenuList = headerMenuListBox.querySelectorAll('li');
const headerBtn = document.querySelector('.nav_btn_signIn');

function changeNavColor(){ //nav 색 바꿔주는 함수
    header.style.backgroundColor = 'white';
    headerLogo.style.color = '#0082c6';
    headerLangSet.forEach(function(langSet){
        langSet.style.color = 'black';});
             // headerLangSet.style.color = 'black';
        // function ()안에 들어가는 이름은 상관X
    headerMenuList.forEach(function (headerList){ headerList.style.color = 'black';});
    headerBtn.style.borderColor = '#003492';
    
}

function originalColor() { //원래 nav의 색
    headerLogo.style.color = 'white';
    headerLangSet.forEach(function(langSet){
        langSet.style.color = 'white';});
    headerMenuList.forEach(function (headerList){ headerList.style.color = 'white';});
    headerBtn.style.borderColor = 'transparent';
    header.style.backgroundColor = 'transparent';
}


//스크롤 내리면 네비게이션에 배경색 생기기
const headerHeight  = header.getBoundingClientRect().height;
   document.addEventListener('scroll', ()=> {
        if(window.scrollY > headerHeight)
        {
          header.classList.add('headerColorChange');
          changeNavColor();

        } 
        else {
            header.classList.remove('headerColorChange');
     originalColor();
    }
    });


//메뉴 보이기 & 숨기기

const headerNavMenuBox = document.querySelector('.header_nav_menu_box');
const headerNavMenuBoxHeight = headerMenuListBox.clientHeight;
// console.log(headerNavMenuBoxHeight);

const headerMenuHeight = headerMenu.clientHeight;
// console.log(headerHeight); // header높이파악
// console.log(headerMenuHeight);
// headerMenu.classList.add('hidden');
// headerNavMenuBox.style = 'height:0; overflow-y:hidden; display:none; transition:height 500ms ease';

navItems.forEach(function(list){
    list.style = 'height:0; overflow-y:hidden; display:none; transition:all 500ms ease';
});

header.addEventListener('mouseenter', () => {
//     // headerMenu.style = 'display:block';
changeNavColor();
    navItems.forEach(function(list){
        // list.classList.remove('hidden');
        list.style.display = 'block';
    });
    setTimeout(function(){
        navItems.forEach(function(list){
            list.style.height = 200+'px';
        })
    }, 10);


//     setTimeout(function(){
//         // headerMenu.style.height = headerMenuHeight;
//         // headerMenu.style.height= headerMenuHeight;    
//     }, 10);

//    changeNavColor();
//    header.style.backgroundColor = 'white';
    
});

header.addEventListener('mouseleave', () => {

    originalColor();
    navItems.forEach(function(list){
        list.style.display = 'none';
    });
    setTimeout(function(){
        navItems.forEach(function(list){
            list.style.heihgt = 0;
        })
    }, 10);
});


// header.addEventListener('mouseleave', () => {
//     navItems.forEach(function (navhide){
//         navhide.classList.add('hidden');
//     });
//     originalColor();
// });



    // headerLangSet.forEach(function(langSet){
    //     langSet.addEventListener('click',function(){
    //         langSet.style.fontWeight = "700";
    //     }); 
    // });
    