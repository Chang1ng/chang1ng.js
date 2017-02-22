var util;
util = {
	//get elements by class
	getByClass : function (oParent, sClass){
		var aEle=oParent.getElementsByTagName('*');
		var aResult=[];
		var re=new RegExp('\\b'+sClass+'\\b', 'i');
		var i=0;
		for(i=0;i<aEle.length;i++){
		  
			 if(re.test(aEle[i].className)){
			 	aResult.push(aEle[i]);
			 }
		}
		return aResult;
	},
	//addEvent
	addEvent : function (obj,type,fn){
	    if(typeof obj.addEventListener !== 'undefined'){
	        obj.addEventListener(type,fn,false);
	    }else if(typeof obj.attachEvent !== 'undefined'){
	        obj.attachEvent('on'+type,fn);
	        fn.call(obj,window.event);
	    }
	},
	//removeEvent
	removeEvent : function (obj,type,fn){
	    if(typeof obj.removeEventListener!=='undefined'){
	        obj.removeEventListener(type,fn,false);
	    }else if(typeof obj.detachEvent !== 'undefined'){
	        obj.detachEvent('on'+type);
	    }
	},
	//close default event
	preDef : function (event){
	    var e = event;
	    if(typeof e.preventDefault !== 'undefined'){
	        e.preventDefault();
	    }else{
	        e.returnValue=false;
	    }
	},
	//get url param
	getUrlParam : function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) {
            return  decodeURI(r[2]);
        }else{
            return null;
        }
	},
	//deep copy object 
	deepCopy : function(source) { 
		var result={};
		for (var key in source) {
		      result[key] = typeof source[key]===’object’? deepCoyp(source[key]): source[key];
		} 
		return result; 
	},
	//array de emphasis
	unique : function(){
		this.sort();
	 	var res = [this[0]];
		for(var i = 1; i < this.length; i++){
		    if(this[i] !== res[res.length - 1]){
		       res.push(this[i]);
		    }
		}
		return res;
	},
	//ajax request
	ajax : function(opt) {
         opt = opt || {};
         opt.method = opt.method.toUpperCase() || 'POST';
         opt.url = opt.url || '';
         opt.async = opt.async || true;
         opt.data = opt.data || null;
         opt.success = opt.success || function () {};
         var xmlHttp = null;
         if (XMLHttpRequest) {
             xmlHttp = new XMLHttpRequest();
         }
         else {
             xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
         }var params = [];
         for (var key in opt.data){
             params.push(key + '=' + opt.data[key]);
         }
         var postData = params.join('&');
         if (opt.method.toUpperCase() === 'POST') {
             xmlHttp.open(opt.method, opt.url, opt.async);
             xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
             xmlHttp.send(postData);
         }
         else if (opt.method.toUpperCase() === 'GET') {
             xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
             xmlHttp.send(null);
         } 
         xmlHttp.onreadystatechange = function () {
             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                 opt.success(xmlHttp.responseText);
             }
         };
     }

};
