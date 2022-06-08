$(function () {
	// window.onerror=function(){return true;} 
	/*瀵艰埅褰撳墠鐘舵€佺嚎*/
	if($("#nav").length){
		var navtimer,curnavleft,curnavwidth;
		$("#nav >ul > li").mouseenter(function () {
			$this=$(this);
			// $current=$("#nav > ul > .current");
			// $thisleft=$this.position().left;
			// $("#currentline").css({"left":$thisleft+"px","width":$this.width()});
			clearTimeout(navtimer);
			$child=$this.find("ul.subnav");
			$('.subnav').hide();
			if($child.length)
			{
				$child.show();
			}
			
		}).mouseleave(function () {
			// $("#currentline").css({"left":$current.position().left,"width":$current.width()});
			navtimer=setTimeout("$('.subnav').hide()",300);
		});
		
		// $("#currentline").css({"left":curnavleft+"px","width":curnavwidth});
	}
	
	/*棣栭〉banner*/
// 	if($("#pc").length && $("#pc").is(":visible") && $(".gallery-thumbs").length){
// 		var galleryThumbs = new Swiper('.gallery-thumbs', {
// 				spaceBetween: 10,
// 				slidesPerView: 6,
// 				freeMode: true,
// 				watchSlidesVisibility: true,
// 				watchSlidesProgress: true,
// 			});
// 
// 		
// 		var galleryTop = new Swiper('.gallery-top',{
// 			on:{
// 				init: function(){
// 					swiperAnimateCache(this); //闅愯棌鍔ㄧ敾鍏冪礌 
// 					swiperAnimate(this); //鍒濆鍖栧畬鎴愬紑濮嬪姩鐢�
// 				}, 
// 				slideChangeTransitionEnd: function(){ 
// 					swiperAnimate(this); //姣忎釜slide鍒囨崲缁撴潫鏃朵篃杩愯褰撳墠slide鍔ㄧ敾
// 				} 
// 			},
// 			thumbs: {
// 					swiper: galleryThumbs
// 				}
// 
// 		});
// 	}

  if($("#pc").length && $("#pc").is(":visible") && $(".gallery-top").length){

		 new Swiper('.gallery-top', {
		  // direction: 'vertical',
		  autoplay: {
			delay: 2000,//1绉掑垏鎹竴娆�
		  },
		  loop:true,
		  pagination: {
			el: '.gallery-top-pagination',
			clickable: true,
		  },
		});

  }


	
	/*鍏充簬鎴戜滑 楂樼浠嬬粛*/
	if($(".gaoguanlist").length){
		$(".gaoguanlist > li").click(function () {
			if($(this).is(".current")){
				$(this).removeClass("current");
			}else{
				$(this).addClass("current").siblings("li.current").removeClass("current");
			}
		})
	}
	
	/*棣栭〉WOW鍔ㄧ敾*/
	new WOW().init();
	/*棣栭〉瑙嗗療鍔ㄧ敾*/
	if($(".scene").length){
		$('.scene').parallax();
	}
	/*棣栭〉鎴愬姛瀹㈡埛*/
	if($(".tabkehu").length){
		$(".tabkehu > li").mouseenter(function () {
			$(this).addClass("current").siblings(".current").removeClass();
			$(".conkehu > li").hide().eq($(this).index()).show();
		})
	}
	
	
	/*棣栭〉800+*/
  var numcount=0;
	function grownum(){
    if(numcount>5){return;}
    $(".zhanyoulv .num").not(".end").each(function () {
      let curnum=parseInt($(this).html());
      let endnum=parseInt($(this).data("num"));
      if(curnum>=endnum){
        numcount++;
        $(this).addClass('end');
      }else{
        $(this).html(++curnum);
      }
    	
    })
    setTimeout(grownum,30);
	}
	
	if($(".zhanyoulv").length){
		var otop=$(".zhanyoulv").offset().top;
		$(document).scroll(function() {
			if(!$(".zhanyoulv").is(".run")){
				var scroH = $(document).scrollTop();  //婊氬姩楂樺害
				var viewH = $(window).height();  //鍙楂樺害
				if(otop-scroH>0 && otop-scroH<viewH){
					$(".zhanyoulv").addClass("run");
					grownum();
				}
			}
		})
	}
	
	/*鍙充晶鑱旂郴鏂瑰紡*/
	if($(".rcicon").length){
		$(".rcicon1").click(function (event) {
			$(".rccon").toggle();
			event.stopPropagation();
		})
		$(".rcicon1").click(function (event) {
			event.stopPropagation();
		})
		$("html").click(function () {
			$(".rccon").hide();
		})
		$('[data-toggle="tooltip"]').tooltip();
		$('.rightcontact .backup').click(function () {
			$("html,body").animate({'scrollTop':0},200);
		})
	}
	
	
	/*棣栭〉涓€鍙ヨ瘽蹇*/
	if($(".onenews").length){
		 var onenewsswiper = new Swiper('.onenews', {
		  direction: 'vertical',
		  autoplay: {
			delay: 10000,//1绉掑垏鎹竴娆�
		  },
		  loop:true,
		  // pagination: {
			// el: '.swiper-pagination',
			// clickable: true,
		  // },
		});
	}

	// xsad
	if($(".xsad").length){
		 var xsadswiper = new Swiper('.xsad', {
		  // direction: 'vertical',
		  autoplay: {
			delay: 10000,//1绉掑垏鎹竴娆�
		  },
		  // loop:true,
		  // pagination: {
			// el: '.swiper-pagination',
			// clickable: true,
		  // },
		});
	}
	
	
	
	
	/*寮瑰嚭瑙嗛*/
	if($(".showvideo1").length)
	{
		$('.showvideo1').on('shown.bs.modal', function (e) {
		  // do something...
		  $('.showvideo1 video').get(0).play();
		})
		$('.showvideo1').on('hidden.bs.modal', function (e) {
		  // do something...
		  $('.showvideo1 video').get(0).pause();
		})
	}
	
  
  
  
  	if($(".appindexnewstab").length){
  	$(".appindexnewstab > li").click(function () {
  		$(this).addClass("current").siblings(".current").removeClass();
  		$(".appindexnewscon > div").hide().eq($(this).index()).show();
  	})
  }
  
  
  
  
  
  
  
  
  
  
})