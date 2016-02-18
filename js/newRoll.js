var day = {
	iTop : 0,
	iScale : 0,
	iLength : 0,
	iH : 0,
	aImg : ["img/earthBottom.png","img/earth_bg1.png","img/start_bg1.png","img/start_bg1.png","img/start_bg2.png","img/gotop.gif","img/fly.png","img/fly2.png","img/flyYun.png","img/flyHuo.png","img/earth.png","img/earthTit.png","img/title1.png","img/pro_bg2.png","img/mis.png","img/gui.png","img/gang.png","img/mi.png","img/click.png","img/shouyi.png","img/title2.png","img/tan.png","img/fuzhi.png","img/dieL.png","img/dieR.png","img/title3.png","img/yun1.png","img/yun2.png","img/yun3.png","img/list.png","img/coff.png","img/btn3.png","img/fly.png","img/earthTop.png","img/gongge.png","img/ge1.png","img/ge2.png","img/title4.png","img/chaorenshuo.png","img/chaoren.png","img/chaoreny.png","img/bg5.png","img/xiaofly.png","img/tanchu1.png","img/tanchu2.png"] ,
	init : function(){
		this.oLoad = document.getElementById('load');
		this.oTxt = document.getElementById('load_w');
		this.oContent =document.getElementById("content");
		this.one = {
			aFly :document.getElementById("oneFly"),
			aEarth : document.getElementById("oneEarth"),
			oTit : document.getElementById("oneTit"),
			aBg : document.getElementById('one_bg')
		};
		this.aFly = this.one.aFly.getElementsByTagName("span");
		this.aEarth = this.one.aEarth.getElementsByTagName("span");
		this.aBg = this.one.aBg.getElementsByTagName("div");
		this.oGo = document.getElementById('goTop');
		//第一屏获取元素结束
		this.fly =document.getElementById("mFly");
		this.flyA = this.fly.getElementsByTagName("a");
		//第二屏出现小飞机结束
		this.two = {
			oGang : document.getElementById("gang"),
			aBg : document.getElementById("pro2Bg"),
			Mi : document.getElementById("Mi")
			//oSy : document.getElementById("pro2S")
		}
		this.Gui = document.getElementById('Gui');
		this.Mclick = document.getElementById('Mclick');
		this.Num = document.getElementById('num');
		this.NumSpan = this.Num.getElementsByTagName('span');
		this.add = this.two.oGang.getElementsByTagName('span');
		this.Bg = this.two.aBg.getElementsByTagName('div');
		//第二屏获取元素结束
		this.oPro3 = document.getElementById('three');
		this.oBg3 = document.getElementById("bg3");
		this.oEle = this.oPro3.getElementsByTagName('div');
		//第三屏获取元素结束
		this.yun = document.getElementById('yun');
		this.yunClass = this.yun.getElementsByTagName('div');
		this.title4 = document.getElementById('fourTit');
		this.list4 = document.getElementById('list4');
		this.yunfly = document.getElementById('pro40');
		this.club = document.getElementById('clubL');
		this.clubS = this.club.getElementsByTagName('span');
		this.flyR13 = document.getElementById('flyR13');
		this.flyS = this.flyR13.getElementsByTagName('span');
		//第四屏获取元素结束
		this.chao = document.getElementById('chao');
		this.title5 = document.getElementById('title5');
		this.chaoClass = this.chao.getElementsByTagName('div');
		this.bg5 = document.getElementById('fiveBg');
		this.fiveBg= this.bg5.getElementsByTagName('div');
		this.gongG = document.getElementById('fiveG');
			
		if(this.iScale == 0){
			
			this.iScale = 4.9585;
			this.onLoad(this.iScale);
		}
		this.drag();
		this.clickMi();
		this.clickFly();
		
		if(navigator.userAgent.indexOf("MSIE 8.0")>0 || navigator.userAgent.indexOf("Firefox")>0){ 
			this.offTop(); 
		}else{
			this.roller();
		}  
		
	},
	goTop : function(iScale){
		this.oLoad.style.display = 'none';
		this.oContent.style.display = 'block';
		this.iH = Math.max(this.offsetH(),this.scrollH(),this.view().h);
		this.oContent.style.height = this.iH +'px';
		document.documentElement.scrollTop=document.body.scrollTop = 4000*iScale;
		
	},
	onLoad : function(iScale){
		//加载页面特效
		for(var i=0;i<this.aImg.length;i++){
			this.oImg=new Image();
			this.oImg.src=this.aImg[i];
			var This = this;
			this.oImg.onload= function(){
				This.oTxt.timer = setInterval(function(){
					This.iLength++;
					clearInterval(This.oTxt.timer);
					//alert(This.aImg.length);
					This.oTxt.innerHTML= parseInt(This.iLength/This.aImg.length*100)+"%";
					if(This.iLength == This.aImg.length){
						clearInterval(This.oTxt.timer);
						This.goTop(iScale)
					}
				},100);
				
			};
			this.oImg.onerror=function(){
				alert("加载失败");
			}
			
		}
		},
	roller : function(){
		window.onmousewheel=document.onmousewheel =fn;
		if (document.addEventListener) {
			document.addEventListener('DOMMouseScroll',fn, false);
		}
		/*fn函数式滚轮事件调用的*/
		var This = this;
		function fn(ev){
			  var ev = ev || event;
			  var iBtn = true;
			  This.iTop = This.scrollY();
			  This.iScale = This.iTop / 4000;
			  if (ev.wheelDelta) {
			   iBtn = ev.wheelDelta > 0 ? true : false;
			  } else {
			   iBtn = ev.detail < 0 ? true : false;
			  }
			  if (iBtn) {
				This.offTop();
			  } else {
				This.offTop();
			  }
		}
	},
	drag : function(){
		var This = this;
		window.onscroll = function(){
			This.iTop = This.scrollY();
			This.iScale = This.iTop / 4000;
				//document.title = This.iScale;
			This.offTop();
		}
	},
	offTop : function(){
		
		var This = this;
		var Top =this.view().h;
		var t = this.view().h+this.iTop;
		//document.title =this.iTop+'|'+ t+'|'+this.iScale;
		if(this.iTop <= 19834){this.actHover(0);}
		if(this.iTop <= 17639){this.actHover(1);}
		if(this.iTop <= 11539){this.actHover(2);}
		if(this.iTop <= 7439){this.actHover(3);}
		if(this.iTop <= 5239){this.actHover(4);}
		
		
		if(this.iTop <= 19834){
			
			this.oGo.style.top = 50+'%';
			//滚动提上定位
			for(var i = 0; i<this.aEarth.length;i++){
				this.doMove(this.aEarth[i],{opacity:100},'',500);
			}
			this.one.aEarth.style.display = 'block';
			//蓝色地球出现
			
			for(var i =0 ; i< this.aBg.length; i++){
				this.doMove(this.aBg[i],{opacity:100},'',500);
			};
			//地球，和星球背景出现
			this.doMove(this.one.aEarth,{top:200});
			this.doMove(this.aEarth[0],{opacity:100},'',10);
			this.aFly[1].style.display = 'none';
			this.aFly[2].style.display = 'none';
			//火箭喷云消失
			this.one.aFly.style.bottom =-20+'%';
			//火箭定位
			this.one.aFly.style.display = 'block';
			//火箭出现
			//this.doMove(this.aBg[0],{bottom:0},'',500);
			this.aBg[0].style.bottom = 0+'px';
			this.aBg[4].style.bottom = 0+'px';
			//大地球出现
			this.doMove(this.fly,{opacity:30},'',100);
			this.fly.style.display = 'none';
			//小火箭消失	
			this.doMove(this.Gui,{opacity:0},'',100);
			//米粒回家消失
			this.doMove(this.two.oGang,{opacity:0},'',100);
			//缸消失
			this.doMove(this.oEle[3],{opacity:0},'',100);
			//米粒休闲时光消失
			for(var i=0; i<3; i++){
				this.doMove(this.oEle[i],{opacity:0},'',100);
				this.oEle[i].style.position = 'fixed';
			}
			//弹出和飞碟显示
			this.doMove(this.title4,{opacity:0},'',100);
			//安享财富消失
			this.yun.style.display = 'none';
			//云层消失
			this.doMove(this.yunClass[1],{top:0});
			this.doMove(this.yunClass[2],{top:0});
			//云层复位
			this.doMove(this.list4,{opacity:0},'',100);
			this.doMove(this.yunfly,{opacity:0},'',100);
			//列表消失
			this.yun.style.position = 'fixed';
			this.yun.style.top =0 +'px';
			this.list4.style.position = 'fixed';
			this.list4.style.top =350 +'px';
			this.yunfly.style.position = 'fixed';
			this.yunfly.style.top =0 +'px';
			//定位第四屏
			this.doMove(this.chao,{opacity:0},'',10);
			this.chao.style.display = 'none';
			//超人消失
			this.doMove(this.title5,{opacity:0},'',100);
			this.chaoClass[0].style.display = 'none';
			this.yun.style.zIndex = 5;
			//标题五消失
			this.doMove(this.clubS[0],{top:230,opacity:100},'',100);
			this.doMove(this.clubS[1],{top:60,opacity:100},'',3000);
			this.doMove(this.clubS[2],{top:150,opacity:100},'',2000);
			this.doMove(this.clubS[3],{top:0,opacity:100},'',1000);
			this.doMove(this.clubS[4],{top:120,opacity:100},'',500);
			this.doMove(this.flyS[0],{top:30,opacity:100},'',100);
			this.doMove(this.flyS[1],{top:150,opacity:100},'',3000);
			this.doMove(this.flyS[2],{top:190,opacity:100},'',2000);
			this.doMove(this.flyS[3],{top:90,opacity:100});
			//礼包复位
			this.doMove(this.gongG,{top:0},'backOut');
			//宫格出现
			
			
		}
		if( this.iTop < 19300){
			//var iScale = this.iScale %4;
			this.one.aFly.style.bottom =(1-this.iScale)+'%';
			//火箭定位
			this.aFly[1].style.display = 'block';
			this.aFly[2].style.display = 'none';
			//火箭喷云出现,火苗消失
			this.doMove(this.aEarth[1],{opacity:0},'',500);
			//蓝色地球标题消失
			this.oGo.style.display = 'none';
			//滚动提示消失
		}
		if( this.iTop < 19038){
			this.aFly[1].style.display = 'none';
			this.aFly[2].style.display = 'block';
			//火箭喷云消失,火苗出现
			this.aBg[0].style.bottom = -100+'px';
			this.aBg[4].style.bottom = -100+'px';
			// 大地球消失
			this.doMove(this.one.aEarth,{top:0},'',100);
			this.doMove(this.aEarth[0],{opacity:0},'',100);
			this.one.aEarth.style.display = 'none';
			//蓝色地球向上消失
		}
		if(this.iTop < 18937 ){
			this.aBg[0].style.bottom = -280+'px';
			this.doMove(this.aBg[4],{opacity:0});
			// 大地球消失
		}
		if( this.iTop <17839 ){
			this.one.aFly.style.display = 'none';
			//火箭减速消失
			this.doMove(this.fly,{opacity:100});
			this.fly.style.display = 'block';
			//小火箭出现	
		}
		if(this.iTop < 17532){
			this.doMove(this.Gui,{opacity:100});
			//米粒回家出来
		}
		if( this.iTop < 17231){
			var iScale = this.iTop/this.iH;
			this.doMove(this.Gui,{opacity:0});
			//米粒回家消失
			this.two.oGang.style.position = 'fixed'
			this.doMove(this.two.oGang,{opacity:100});
			this.doMove(this.two.Mi,{opacity:100});
			this.two.oGang.style.top = Top-this.objH(this.two.oGang)*(1-iScale+0.3)+'px';
			//缸出现
		}
		if(this.iTop < 12159){
			
			this.two.oGang.style.position = 'absolute'
			this.two.oGang.style.top = 12300+'px';
			//缸消失
		}
		if(this.iTop < 11633){
			this.doMove(this.oEle[3],{opacity:100});
			//米粒休闲时光出现
		}
		if( this.iTop < 11110){
			this.doMove(this.oEle[3],{opacity:0},'',100);
			//米粒休闲时光消失
			for(var i=0; i<3; i++){
				this.doMove(this.oEle[i],{opacity:100});
				this.oEle[i].style.position = 'fixed';
			}
			//弹出和飞碟显示
			iScale = this.iScale % 2;
			this.oEle[0].style.top = 406+'px';
			this.oEle[1].style.top = 20+'px';
			this.oEle[2].style.top = 200+'px';
			this.oEle[1].style.left = (1-iScale)* 800-500+'px';
			this.oEle[2].style.right = (1-iScale) * 800-500+'px';
			//弹出框和飞碟运动
		}
		if( this.iTop < 8139){
			
			for(var i=0; i<3; i++){
				this.oEle[i].style.position = 'absolute';
			}
			this.oEle[0].style.top = 406+'px';
			this.oEle[1].style.top = 106+'px';
			this.oEle[2].style.top = 256+'px';
			this.oEle[1].style.left =233+'px';
			this.oEle[2].style.right =233+'px';
			//弹出框和飞碟定位
		}
		if( this.iTop < 7639){
			this.doMove(this.title4,{opacity:100});
			//安享财富出现
		}
		if(this.iTop < 7339){
			iScale = this.iTop %1;
			this.doMove(this.title4,{opacity:0},'',100);
			//安享财富消失
			this.yun.style.display = 'block';
			//云层出现
			this.doMove(this.yunClass[1],{top:-100});
			this.doMove(this.yunClass[2],{top:-10});
			//云层运动
			
		}
		if( this.iTop < 7039){
			this.doMove(this.yunClass[1],{top:0});
			this.doMove(this.yunClass[2],{top:0});
			//云层复位
			this.doMove(this.list4,{opacity:100},'',100);
			this.doMove(this.yunfly,{opacity:100},'',100);
			//列表出来
			
		}
		if(this.iTop < 6685){
			this.doMove(this.clubS[0],{top:-1000,opacity:0},'',100);
			this.doMove(this.clubS[1],{top:-1000,opacity:0},'',3000);
			this.doMove(this.clubS[2],{top:-1000,opacity:0},'',2000);
			this.doMove(this.clubS[3],{top:-1000,opacity:0},'',1000);
			this.doMove(this.clubS[4],{top:-1000,opacity:0},'',500);
			this.doMove(this.flyS[0],{top:-1000,opacity:0},'',100);
			this.doMove(this.flyS[1],{top:-1000,opacity:0},'',3000);
			this.doMove(this.flyS[2],{top:-1000,opacity:0},'',2000);
			this.doMove(this.flyS[3],{top:-1000,opacity:0});
			// 礼包动态
		}
		if(this.iTop <6276 ){
			
			this.yun.style.position = 'absolute';
			this.yun.style.top =6200 +'px';
			this.yun.style.zIndex = 55;
			this.list4.style.position = 'absolute';
			this.list4.style.top =2500 +'px';
			this.yunfly.style.position = 'absolute';
			this.yunfly.style.top =2800 +'px';
			this.yunfly.style.zIndex = 56;
		}
		if(this.iTop <5800){
			this.doMove(this.chao,{opacity:100});
			this.chao.style.display = 'block';
			//超人出来
			
			this.chao.style.left =(1-this.iScale)* 800+'px';
		}
		if(this.iTop < 4639){
			this.chaoClass[0].style.display = 'block';
			
		}
		if(this.iTop < 3283){
			this.chaoClass[0].style.display = 'none';
			this.doMove(this.title5,{opacity:100});
		}
		if(this.iTop < 2739){
			this.doMove(this.chao,{opacity:0},'',10);
			this.chao.style.display = 'none';
			//超人出来
			this.doMove(this.title5,{opacity:0},'',100);
		}
		if(this.iTop < 2119){
			this.doMove(this.gongG,{top:1800},'backOut');
			//宫格出现
			
			//小飞机焦点
			
		}
		
	},
	clickMi : function(){
		var This = this;
		var iNum = 0;
		this.two.Mi.onclick = function(){
			iNum = iNum + 0.00001;
			This.Mclick.style.display = 'none';
			This.doMove(this,{top:12430,opacity:0},'',1000,function(){
				
				This.doMove(This.add[1],{opacity:100},'',1000,function(){
					This.doMove(This.add[1],{opacity:0});
					This.doMove(This.add[2],{opacity:100},'',1000,function(){
						This.doMove(This.add[2],{opacity:0});
						This.two.Mi.style.top = 12290+'px';
						This.doMove(This.two.Mi,{opacity:100},'',100);
						This.two.Mi.style.zIndex = 999;
						This.Mclick.style.display = 'block';
						This.flop(iNum.toFixed(5)); //预期年化收益 翻牌
						});
					});
					This.two.Mi.style.zIndex = 1;	
					
					
			});
			
			//alert(iNum);
			
		}	
	},
	flop : function(num){
		var str = num+'';
		var arrNum = [];
		arrNum = str.split('');
		arrNum.unshift('0');
		for(var i=0; i<arrNum.length; i++){
			if(i != 2){
				this.NumSpan[i].innerHTML = arrNum[i];
			}
		}
	},
	clickFly : function(){
		var This = this;
		var n = 0;
		var arr = [4.9585,3.03475,2.10975,1.70975,0.45975];
		for(var i = 0 ; i<this.flyA.length; i++){
			this.flyA[i].index = i;
			if( i<5 ){
				this.flyA[i].onclick = function(){
					This.goTop(arr[this.index]);
					n = this.index;
					This.actHover(n);
				}
			}
		}
		
		
	},
	actHover : function(num){
		for(var i=0; i< this.flyA.length; i++){
			this.flyA[i].className = '';	
		}
		this.flyA[num].className = 'act';	
	},
	objH : function(obj){
		return obj.offsetHeight;
	},
	//页面数据获取函数
	doMove :function(obj, json, fx, d, fn){
		clearInterval(obj.iTimer);
		var iStartTime = +new Date();
		var b = {};
		var c = {};
		var d = d || 1000;
		var fx = fx || 'linear';
		
		for (var attr in json) {
			if ( attr == 'opacity' ) {
				b[attr] = Math.round ( this.css( obj, 'opacity' ) * 100 );
			} else {
				b[attr] = parseInt( this.css( obj, attr ) );
			}
			c[attr] = json[attr] - b[attr];
		}
		var This = this;
		obj.iTimer = setInterval(function() {
			
			var t = +new Date() - iStartTime;
			
			if ( t >= d ) {
				t = d;
			}
			
			for (var attr in json) {
				var v = This[fx](t, b[attr], c[attr], d);
				if ( attr == 'opacity' ) {
					obj.style.opacity = v / 100;
					obj.style.filter = 'alpha(opacity='+v+')';
					obj.style.MozOpacity=v/100;
				} else {
					obj.style[attr] = v + 'px';
				}
			}
			
			if ( t == d ) {
				clearInterval(obj.iTimer);
				fn && fn();
			}
			
		}, 15);
	},
	css :function(obj,attr){
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	},
	scrollH : function(){
		return document.body.scrollHeight;	
	},
	view : function(){
		return {
			w : document.documentElement.clientWidth,
			h :	document.documentElement.clientHeight
		}	
	},
	scrollY : function(){
		return document.body.scrollTop || document.documentElement.scrollTop;
	},
	offsetH : function(){
		return document.body.offsetHeight || document.documentElement.offsetHeight;	
	},
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - this['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
	
};
day.init();