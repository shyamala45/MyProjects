	var states = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Delaware",
	"District Of Columbia",
	"Florida",
	"Georgia",
	"Hawaii",
	"Idaho",
	"Illinois",
	"Indiana",
	"Iowa",
	"Kansas",
	"Kentucky",
	"Louisiana",
	"Maine",
	"Maryland",
	"Massachusetts"
	];
	var state_des = [
	"alabama is good",
	"alaska is fine",
	"arizona is find"
	];
	
	var products = [
{"id":"Product Title 1","title":"Starting at $500","src":"images\\cereal_b.jpg" ,"desc":"Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod"},
{"id":"Product Title 2","title":"Starting at $1900" ,"src":"images\\flower_b.jpg" ,"desc":"Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod"}, 
{"id":"Product Title 3","title":"Starting at $2730" ,"src":"images\\machine_b.jpg" ,"desc":"Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod"},
{"id":"Product Title 4","title":"Starting at $731" ,"src":"images\\candy_b.jpg" ,"desc":"Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod"}
];

var prodprice=[ 
{"id":"#Box1","price":500},
{"id":"#box2","price":1900},
{"id":"#box3","price":2730},
{"id":"#box4","price":731}
];


var filterprice=[
{"id":"0","minprice":0 ,"maxprice":5000},
{"id":"1","minprice":500,"maxprice":5000},
{"id":"2","minprice":1000 ,"maxprice":2000},
{"id":"3","minprice":2000 ,"maxprice":5000}
];

function producttitleshow(id)
{
	$("#productdetails").show(); 
	document.getElementById("title").innerHTML =
products[id].id ;
document.getElementById("price").innerHTML =
products[id].title ;
document.getElementById("data1").innerHTML =
products[id].desc;
document.getElementById("productdetails2img").src =
products[id].src ;
$("#section").removeClass("fullsectionwithoutp_f").addClass("fullsectionwithp_f");
$("#section").removeClass("fullsectionwithoutp_t").addClass("fullsectionwithp_t");

if(id != 0)
{
	$("#smallimgs").hide();
}
else{
	$("#smallimgs").show();
}
}
$(document).ready(function(){
	$("#productdetails").hide(); 
    $("#img1").click(function(){
		producttitleshow(0);
    });
	$("#img2").click(function(){
		producttitleshow(1);
    });
	$("#img3").click(function(){
		producttitleshow(2);
    });
	$("#img4").click(function(){
		producttitleshow(3);
    });
	$("#close").click(function(){
        $("#productdetails").hide();
{
$("#section").removeClass("fullsectionwithp_f").addClass("fullsectionwithoutp_f");
$("#section").removeClass("fullsectionwithp_t").addClass("fullsectionwithoutp_t");
}		
		
    });
	
	$("#prodtitle1").click(function(){
		producttitleshow(0);		
    });
	$("#prodtitle2").click(function(){
		producttitleshow(1);		
    });
	$("#prodtitle3").click(function(){
		producttitleshow(2);		
    });
	$("#prodtitle4").click(function(){
		producttitleshow(3);		
    });	
	
	$("#stateinput").autocomplete({
        source: states
    });
	
	
		    $('#stateinput').on('autocompleteselect', function (e, ui) {
		//	alert('You selected: ' + ui.item.value);
			$(".modal-title").text(ui.item.label);// = "my test";
			var index = states.indexOf(ui.item.label);
			$(".modal-text").text(state_des[index]);
			$("#myModal").modal('show');
			});
});
function hoverop1(element){
document.getElementById("bullet1").setAttribute('style','position:absolute;width:20px;height:20px;')
document.getElementById("hovimg1").setAttribute('style','position: absolute; top: 35%; left:60%;height:20px;width:20px;')
}
function unhoverop1(element){
document.getElementById("bullet1").setAttribute('style','position:absolute;width:18px;height:18px;')
document.getElementById("hovimg1").setAttribute('style','position: absolute; top: 35%; left:60%;height:18px;width:18px;')
}
function hoverop2(element){
document.getElementById("bullet2").setAttribute('style','position:absolute;width:20px;height:20px;')
document.getElementById("hovimg2").setAttribute('style','position: absolute; top: 50%; left:30%;height:20px;width:20px;')
}
function unhoverop2(element){
document.getElementById("bullet2").setAttribute('style','position:absolute;width:18px;height:18px;')
document.getElementById("hovimg2").setAttribute('style','position: absolute; top: 50%; left:30%;height:18px;width:18px;')
}
function hoverop3(element){
document.getElementById("bullet3").setAttribute('style','position:absolute;width:20px;height:20px;')
document.getElementById("hovimg3").setAttribute('style','position: absolute; top: 80%; left: 50%;height:20px;width:20px;')
}
function unhoverop3(element){
document.getElementById("bullet3").setAttribute('style','position:absolute;width:18px;height:18px;')
document.getElementById("hovimg3").setAttribute('style','position: absolute; top: 80%; left: 50%;height:18px;width:18px;')
}

function filterchanged(element)
{	
	var minprice= filterprice[element.selectedIndex].minprice;
	var maxprice= filterprice[element.selectedIndex].maxprice;
	
	for(var i=0;i<prodprice.length;i++)
	{
	if((prodprice[i].price< maxprice)&&(prodprice[i].price>=minprice) )
	{
	$(prodprice[i].id).show();
	}
	else{
	$(prodprice[i].id).hide();
	}
	}
}
