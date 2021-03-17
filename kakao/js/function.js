$(function () {
     const $gnb = $("header > .gnb > .nav > li.on");
     const $mnu = $("header > .gnb > .nav > .on > .mnu");
     const $frame = $("section > .slides ");
     const $prev = $("section > .indicator > .prev");
     const $next = $("section > .indicator > .next ");
     let nowIdx = 0;

     

     $gnb.on({
          mouseenter: function (evt) {
               $mnu.stop().slideDown(400);

               evt.preventDefault()
          },

          mouseleave: function (evt) {
               $mnu.stop().slideUp(400);

               evt.preventDefault()
          }
     })
     //이전버튼
     $prev.on('click', function (evt) {
          //인덱스 추출
          if (nowIdx > 0) {
               nowIdx--;
          } else {
               nowIdx = 9;
          }

          $container.stop().animate({
               left: -708 * nowIdx
          });

          evt.preventDefault();
     });

     //다음버튼
     $next.on('click', function (evt) {
          //인덱스 추출
          if (nowIdx < 9) {
               nowIdx++;
          } else {
               nowIdx = 0;
          }

          $container.stop().animate({
               left: -708 * nowIdx
          });

          evt.preventDefault();
     });


});


$(function() {
	//변수선언부
	const $indicators = $('.moa-slides > .moa-slides-indicator > li > a');
	const $container = $('.moa-slides > .moa-slides-container');
	const $btnPrev = $('.moa-slides > .moa-slides-prev');
	const $btnNext = $('.moa-slides > .moa-slides-next');
	let nowIdx = 0; //공통변수

	//함수선언부
	const moveFn = function() {
		//버튼활성화
		$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너 이동
		$container.stop().animate(
			{
				left: -100 * nowIdx + '%'
			},
			400
		);
	};

	$indicators.on('click', function(evt) {
		//인덱스번호 추출
		nowIdx = $indicators.index(this);
		moveFn();
	});

	//이전버튼 클릭이벤트 등록
	$btnPrev.on('click', function(evt) {
		evt.preventDefault();

		//nowIdx 추출
		//논리 : 현재 nowIdx가 0보다 크면 -1 차감, 그렇지 않으면 2
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 2;
		}

		moveFn();
	});

	//다음버튼 클릭이벤트 등록
	$btnNext.on('click', function(evt) {
		evt.preventDefault();

		//nowIdx 추출
		//논리 : 현재 nowIdx가 2보다 작면 1 증감, 그렇지 않으면 0
		if (nowIdx < 2) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		moveFn();
	});
});
