//var input = [1,2,3,4,5....100];
//从该数组中随机抽取十个数，需要去重

var arr = [1,1,1,1,3,4,5,6,6,7,8,8,9,9,100];

function unique(arr){
	if(!arr || Array.isArray(arr) == false){
		return;
	}

	var i;
	var map = {};

	for( i = arr.length ; i >= 0 ; i-- ){
		if( arr[i] in map ){
			arr.splice(i,1);
		}else{
			map[arr[i]] = true;
		}
	}

	return arr;

}

unique(arr);