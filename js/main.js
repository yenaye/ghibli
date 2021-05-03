const main = {
    init: function() {
        this.eventlistener();
    },
    
    eventlistener: function() {
        //화면에 꽉 차 보이도록 하기 위해
        $('body').children('div').height($(window).height());
        $('body').children('div').not('#logo-div').hide();
        $('.logo-title').fadeIn(1600);
        //로고 아래 꺽쇠 아이콘 클릭시 다음 내용 div 보이도록
        $('.logo-down').on('click', function() {
            $('#logo-div').slideUp(800);
            $('#contents01').fadeIn(1600);
        });
        //마우스 휠 이벤트
        $('body').on('mousewheel DOMMouseScroll', function(e) {
            const divId = $(this).children('div:visible').attr('id');
            $('#'+divId).on('mousewheel DOMMouseScroll', function(e) {
                const E = e.originalEvent;
                if (E.wheelDelta < 0 || E.detail > 0) { //아래로
                    if ($(this).next('div').attr('id')) { //다음 div가 있을 경우에만 실행
                        $(this).slideUp(800);
                        $(this).children().slideUp(700);
                        $(this).next('div').fadeIn(100);
                        $(this).next('div').children().fadeIn(2500);
                        //센과 치히로 구역일때
                        if ($(this).next('div').attr('id') == 'contents02') {
                            $('#contents02 .kaonasi').slideDown(2800);
                        }
                    }
                } else { //위로
                    if ($(this).prev('div').attr('id')) { //이전 div가 있을 경우에만 실행
                        $(this).slideUp(800);
                        $(this).children().slideUp(700);
                        $(this).prev('div').slideDown(800);
                        $(this).prev('div').children().slideDown(700);
                        //센과 치히로 구역일때
                        if ($(this).attr('id') == 'contents02') {
                            $('#contents02 .kaonasi').slideUp(700);
                        }
                    }
                }
                return false;
            });
        });
        
        $('.castle-img').hide();
    }
}
$(window).mouseover(function(e) {
    const target = $(e.target);
    var elClass = target.attr('class');
    if( elClass == 'cave' || elClass ==  'castle-img' ) {
        $('.castle-img').show();
        $('.castle-img').css({
            'clip-path': 'circle(50px at '+ e.offsetX +'px '+ e.offsetY +'px)'
        });
    }
});
$(window).mouseleave(function(e) {
    const target = $(e.target);
    var elClass = target.attr('class');
    if( elClass == 'cave' || elClass ==  'castle-img' ) {
        $('.castle-img').hide();
    }
});
$(window).resize(function() {
    //화면 사이즈 변경시 꽉 차 보이도록 하기 위해
    $('body').children('div').height($(this).height());
});
$(document).ready(function() {
    main.init();
});