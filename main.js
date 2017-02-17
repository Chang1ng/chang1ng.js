var util;
util = {
	//get elements by class
	getByClass : function(oParent, sClass){
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
	//addevent
	/*
	*obj -element
	*type-event type
	*fn  -callback function
	*/
	addEvent(obj,type,fn){
	    if(typeof obj.addEventListener!=='undefined'){
	        obj.addEventListener(type,fn,false);
	    }else if(typeof obj.attachEvent!=='undefined'){
	        obj.attachEvent('on'+type,fn);
	        fn.call(obj,window.event);
	    }
	    
	}
};
