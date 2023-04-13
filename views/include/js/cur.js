$(document).ready(function(){

  //언어 박스 스크립트
  langCount = 0;
  $(".lang > a").click(function(){
    if (langCount == 0) {
      $(".langbox").slideDown(function(){
        langCount = 1;
      });
    }else if (langCount == 1){
			$(".langbox").slideUp(function(){
        langCount = 0;
      });
    }
  })
 //다른곳 누를시 언어박스 닫기.
  $(document).click(function(){
		if (langCount == 1){
			$(".langbox").slideUp(function(){
        langCount = 0;
      });
		}
	});

  $(".mainmenu > li").hover(function(){
    $(this).find(".dropmenu").css("display","block");
  }, function(){
    $(this).find(".dropmenu").css("display","none");
  })



  // $(".over-black").css("position", "relative").css("overflow", "hidden");
  // $(".over-black").prepend("<div style='width:100%; height: 100vh; overflow:none; background: rgba(0,0,0,0.3); position: absolute; top:0; z-index:0'></div>");

//헤더 웹&앱
  winWidth = $(window).width();

  if (winWidth > 601) {
    $(".webhead").removeClass("d-none");
    $(".webhead").addClass("d-block");
    $(".apphead").removeClass("d-block");
    $(".apphead").addClass("d-none");
  }else if (winWidth < 600) {
    $(".webhead").removeClass("d-block");
    $(".webhead").addClass("d-none");
    $(".apphead").removeClass("d-none");
    $(".apphead").addClass("d-block");
  }

  $(window).resize(function(){
    winWidth = $(window).width();

    if (winWidth > 601) {
      $(".webhead").removeClass("d-none");
      $(".webhead").addClass("d-block");
      $(".apphead").removeClass("d-block");
      $(".apphead").addClass("d-none");
    }else if (winWidth < 600) {
      $(".webhead").removeClass("d-block");
      $(".webhead").addClass("d-none");
      $(".apphead").removeClass("d-none");
      $(".apphead").addClass("d-block");
    }
  });

  //앱 메뉴박스
  // $(".btn-appmenu").click(function(){
  //   $("#menu").before("<div class='overlayblack' style='width:100%; height: 100vh; overflow:none; background: rgba(0,0,0,0.3); position: fixed; top:0; z-index:0;'></div>");
  //   $("body").css("overflow", "hidden");
  //   $("#menu").animate({
  //     left: "0"
  //   }, 500);
  // });
  // $("#menu .close").click(function(){
  //   $(".overlayblack").remove();
  //   $("body").css("overflow", "auto");
  //   $("#menu").animate({
  //     left: "-90%"
  //   }, 500);
  // });

  //입금증 박스
  // $(".btn-deposit").click(function(){
  //   $("#deposit").before("<div class='overlayblack2' style='width:100%; height: 100vh; overflow:none; background: rgba(0,0,0,0.3); position: fixed; top:0; z-index:0;'></div>");
  //   $("body").css("overflow", "hidden");
  //   $("#deposit").fadeIn(500);
  // });
  // $("#deposit .close").click(function(){
  //   $(".overlayblack2").remove();
  //   $("body").css("overflow", "auto");
  //   $("#deposit").fadeOut(500);
  // });

  //마이페이지 큐알 박스
  // $(".btn-payqr").click(function(){
  //   $("#payqr").before("<div class='overlayblack3' style='width:100%; height: 100vh; overflow:none; background: rgba(0,0,0,0.3); position: fixed; top:0; z-index:0;'></div>");
  //   $("body").css("overflow", "hidden");
  //   $("#payqr").fadeIn(500);
  // });
  // $("#payqr .close").click(function(){
  //   $(".overlayblack3").remove();
  //   $("body").css("overflow", "auto");
  //   $("#payqr").fadeOut(500);
  // });


  $(".btn-bars").click(function(){
    $(".leftbox").animate({left : '0'}, 500);
    $(".leftbox").before("<div class='overlayblack1' style='width:100%; height: 100vh; overflow:none; background: rgba(0,0,0,0.3); position: fixed; top:0; z-index:1;'></div>");
    $("body").css("overflow", "hidden");
  });
  $(".leftbox .logobox .close").click(function(){
    $(".overlayblack1").remove();
    $(".leftbox").animate({left : '-75%'}, 500);
    $("body").css("overflow", "auto");
  });

  if (winWidth > 801) {
    $(".leftbox").css("left", "0")
  }

  $(window).resize(function(){
    winWidth = $(window).width();
    if (winWidth > 801) {
      $(".leftbox").css("left", "0");
      $(".overlayblack1").remove();
      $("body").css("overflow", "auto");
    }else if (winWidth < 800) {
      $(".leftbox").css("left", "-75%");
      $(".overlayblack1").remove();
      $("body").css("overflow", "auto");
    }

  });


  //입금증 박스
  $(".btn-memsearch").click(function(){
    $("#memsearch").before("<div class='overlayblack2' style='width:100%; height: 100vh; overflow:none; background: rgba(0,0,0,0.3); position: fixed; top:0; z-index:11;'></div>");
    $("body").css("overflow", "hidden");
    $("#memsearch").fadeIn(500);
  });
  $("#memsearch .close").click(function(){
    $(".overlayblack2").remove();
    $("body").css("overflow", "auto");
    $("#memsearch").fadeOut(500);
  });

  //입금증 박스
  $(".btn-buy").click(function(){
    $("#buy").before("<div class='overlayblack2' style='width:100%; height: 100vh; overflow:none; background: rgba(0,0,0,0.3); position: fixed; top:0; z-index:11;'></div>");
    $("body").css("overflow", "hidden");
    $("#buy").fadeIn(500);
  });
  $("#buy .close").click(function(){
    $(".overlayblack2").remove();
    $("body").css("overflow", "auto");
    $("#buy").fadeOut(500);
  });

  //order 박스
  $(".btn-order").click(function(){
    $("#order").before("<div class='overlayblack3' style='width:100%; height: 100vh; overflow:none; background: rgba(0,0,0,0.3); position: fixed; top:0; z-index:11;'></div>");
    $("body").css("overflow", "hidden");
    $("#order").fadeIn(500);
  });
  $("#order .close").click(function(){
    $(".overlayblack3").remove();
    $("body").css("overflow", "auto");
    $("#order").fadeOut(500);
  });









});
