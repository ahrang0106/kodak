
/* *************************************************** */

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
                entry.target.style.transitionDelay = '0s'; // 초기화
            }
        });
    });

    const targets = document.querySelectorAll('.animate');
    targets.forEach(el => observer.observe(el));

    const autoTargets = document.querySelectorAll(
        '.photo-box, .txt-box, .guide-txt, .reviews-box li, .album-img li, .product-txt-box, .reviews-txt-box'
    );

    autoTargets.forEach(el => {
        el.classList.add('animate');
        observer.observe(el);
    });
});
/* *************************************************** */
$(document).ready(function () {

    var autoCall; //인터벌용 변수
    autoCall - setInterval(fadeSlide, 3000);
    $('.viewer').mouseover(function () {
        //인터벌 제거 - 멈춤
        clearInterval(autoCall);
    }).mouseout(function () {
        //인터벌 재가동
        fade
    });

});
/* //////////////////////////////////////////////
함수명 : fadeSlide
기능 : fade 효과를 적용해 슬라이드 전환
///////////////////////////////////////////////// */

function fadeSlide() {

    //1번 - 현재 보여지는 슬라이드, 첫 번째 슬라이드
    var firstSlide = $('.first .viewer .slide').first();

    //2번 - 현재 보여지는 슬라이드의 '다음' 슬라이드
    var nextSlide = firstSlide.next();

    nextSlide.hide().addClass('active').fadeIn(800, function () {
        //다음을 위한 준비
        //1번 슬라이드를 맨 뒤로 이동
        $('.viewer').append(firstSlide);

        //첫번째 슬라이드 제거
        firstSlide.removeClass('active');
    });
}

/* 양옆으로*************************************************** */
$(document).ready(function () {
    //.pager 초기설정
    $('.pager li').first().css('color', '#F6B62F')

    //함수 최초호출
    leftmove();

    $('.main').click(leftmove);

    //자동실행 - 인터벌실행
    setInterval(leftmove, 3000);
});
/* ///////////////////////////////////////////////
함수명 : leftmove
기능 : 슬라이드를 왼쪽(다음) 이동
/////////////////////////////////////////////////*/

var page = 0; //현재 슬라이드 인덱스(페이지)를 담을 변수!

function leftmove() {

    page++;
    console.log('현재 슬라이드 인덱스:' + page);

    //제어문 등장 - 변경된 page값이 적용되기 전에 검사
    if (page === 4) {

        //위치값 리셋
        $('.guide-img').css({
            left: 0
        });

        //다음 페이지 이동을 위한 page 변수값 변경
        //현재 보고 있는 슬라이드는 1번 내용, 2번 슬라이드를 보기 위해 2번 인덱스번호로 변경
        page = 1;
        console.log('변경된 page의 값:' + page);
    }

    $('.guide-img').animate({
        left: -(1920 * page)
    }, 800);
    //페이저 변경!
    $('.pager li').css('color', '#EEDEC1');

    //현재 보여지는 슬라이드의 페이저 버튼만 빨강으로 변경
    $('#btn' + page).css({
        color: '#F6B62F'
    });

    if (page === 3) {
        $('#btn0').css('color', '#F6B62F');
    }
}

/**************************************************** */