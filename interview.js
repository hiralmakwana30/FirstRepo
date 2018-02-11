var str1 = "A=123|F=11|G=32|X=789";
var str2 = "X=789|G=32|A=123|F=11";



function test(str1,str2){
var result= false;

var a1 = new Array();
a1=str1.split("|");
var a2 = new Array();
a2 = str2.split("|");

/*console.log(a1);
console.log(a2);*/




if(a1.length==a2.length){
	for(var i= 0;i<a1.length;i++){
		result=a2.includes(a1[i]);
		if(!result)
			break;
		/*if(result) {
			//true
			console.log("loop continues");
		} else {
			console.log("breaking the loop");
			break;
		}*/
		

		}

	} 
	console.log(result);
return result;

}

test(str1,str2);
test("A=123", "A=1233");
test("X","R|D");