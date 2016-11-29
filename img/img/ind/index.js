// JavaScript Document
function go(index){
$("html,body").animate({scrollTop: ($("#"+index).offset().top-85)}, 500);}
$(document).ready(function(){
	$("img.myweb").hover(
	   function() 
	   {
		   $(this).stop().animate({opacity: '0.5'},300);
	   }, 
       function() 
	   {
            $(this).stop().animate({opacity: '1'},300);
    });
	$('a.nourl').click(function(e)
	{
		$('body').append('<div id="black" ></div>');e.preventDefault();
		$('#black').css({'background-color':'#000','width':'100%','left':'0','top':'0','filter':'alpha(opacity=80)','opacity':'0.8','z-index':'19','position':'fixed!important','position':'absolute','height':$(document).height()+'px'});
		$('body').append('<div class="alert_all"><div class="alert_title"><span style="float:left">徐波的在线简历</span><span style="float:right"><a class="alert-close"   href="#">×</a></span></div><div class="alert_content">对不起O(∩_∩)O~<br/><br/>网站暂时关闭，有问题请联系QQ：601450868~</div></div>');
		$('a.alert-close').bind('click',function(){$('#black').remove();$('.alert_all').remove();});
	});
	$('a.nourl1').click(function(e)
	{
		$('body').append('<div id="black" ></div>');e.preventDefault();
		$('#black').css({'background-color':'#000','width':'100%','left':'0','top':'0','filter':'alpha(opacity=80)','opacity':'0.8','z-index':'19','position':'fixed!important','position':'absolute','height':$(document).height()+'px'});
		$('body').append('<div class="alert_all"><div class="alert_title"><span style="float:left">徐波的简历</span><span style="float:right"><a class="alert-close"   href="#">×</a></span></div><div class="alert_content">对不起O(∩_∩)O~有问题请联系QQ：601450868<br/><br/></div></div>');
		$('a.alert-close').bind('click',function(){$('#black').remove();$('.alert_all').remove();});
	});
	function zyk()
	{
		$('body').removeClass().addClass('bj');
		$('#head_middle').removeClass().addClass('head_middle');
		$("[name='connect_title']").removeClass().addClass('connect_title');
	}
	function zyk2()
	{
		$('body').removeClass().addClass('bj2');
		$('#head_middle').removeClass().addClass('head_middle2');
	    $("[name='connect_title']").removeClass().addClass('connect_title2');
	}
	function zyk3()
	{
		$('body').removeClass().addClass('bj3');
		$('#head_middle').removeClass().addClass('head_middle3');
		$("[name='connect_title']").removeClass().addClass('connect_title3');
	}
	function zyk4()
	{
		$('body').removeClass().addClass('bj4');
		$('#head_middle').removeClass().addClass('head_middle4');
		$("[name='connect_title']").removeClass().addClass('connect_title4');
	}
	function zyk5()
	{
		$('body').removeClass().addClass('bj5');
		$('#head_middle').removeClass().addClass('head_middle5');
		$("[name='connect_title']").removeClass().addClass('connect_title5');
	}

	$('#mine').waypoint(function() {zyk();});
	$('#ability').waypoint(function() {zyk2();}, { offset: 200 });
	$('#project').waypoint(function() {zyk3();}, { offset: 200 });
	$('#honour').waypoint(function() {zyk4();},{ offset: 200 });
	$('#practice').waypoint(function() {zyk5();},{ offset: 200 });
	$(window).scroll(function () {
		var dt = $(document).scrollTop();
		var wt = $(window).height();
		if (dt <= 0) 
		{
			$("#top").hide();
			return;
		}
		$("#top").show();
		});
	$("#top").click(function () { $("html,body").animate({ scrollTop: 0 }, 500) });
	});