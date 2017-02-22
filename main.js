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
	Array.prototype.unique2 = function(){
		this.sort();
	 	var res = [this[0]];
		for(var i = 1; i < this.length; i++){
		    if(this[i] !== res[res.length - 1]){
		       res.push(this[i]);
		    }
		}
		return res;
	}
};
