$(document).ready(function(){
var error;
	function station(i, a){
		if(i==0){
			return "A";
		}
		else return "s" + i;
	}
	
	$(".distance").focus(function(){
		//this.css("box-shadow","0px 0px 10px black");
		alert(this);
	});
	$("input").on("focus",function(){
		$(this).css("border-bottom","1px black solid ");
	});
	
    $("#OK").click(function(){
	$("#distance").css({"position":"fixed","bottom":"10px","top":"400px","left":"50%","right":"50%","visibility":"visible"});
	$("#distance").css({"width":"200px","height":"200px"});
	$("#distance").css({"-moz-border-radius":"100px 100px 100px 100px","border-radius":"100px 100px 100px 100px","background-color":"#12AAEE"});
        var a=parseInt($("#n").val());
        var divInput=$("#divDistance");
		var pointeur=$("<span class='pointeur'></span>");
        var input=$("<input type='text' class='distance'/>");
        var valider=$("<button id='valider'>Valider</button>");
		var timeline=$("<span class='timeline'> </span>");
    var i;
       // alert(a);            
       for(i=0;i<=a;i++){ 
		   //var label=$("<label>d"+i+"</label>");
		   //$("#divDistance").append($("<br>"));
		   //$("#divDistance").append($(label).clone());
		   $(pointeur).text(station(i,a));
		   //$("#divDistance").append($(pointeur).clone());
		   $(pointeur).clone().insertBefore("#timelineDiv");
		   //$("#divDistance").append($(input).clone());
		   $(input).clone().insertBefore("#timelineDiv");
		   $("#timelineDiv").append($(timeline).clone());
        }
		$(pointeur).text("B");
		//$("#divDistance").append($(pointeur).clone());
		$(pointeur).clone().insertBefore("#timelineDiv");
		$("#timelineDiv").append($(timeline).clone());
		//$("#divDistance").append($("<br>"));
		$("<br>").insertBefore("#timelineDiv");
       // alert("hello");
	/*fin de la fonction valider.click*/
	$("#divDistance").append($(valider));
    //$("#OK").attr("disabled", "disabled"); /*? disable all inputs before calculating*/
    });
	/*?laisser les inputs vides , code js bloqué , exception detected*/
	/*?faire un di > m , boucle infinie*/
	/*?mise en forme css, je veux la faire */
$("#OK").click(function(){
	$("#slide1").css( "left","-999px");
	$("#divDistance").css( "left","0px");
	//$("#slide1").css( "visibility","hidden");
	//$("#slide1").css( "opacity","0");
	
	
$(valider).click(function(){
	error=0;	
		//test d'affichage du résultats en changeant la couleur ou la  classe 
		//$(".timeline").addClass("timelineActive");
		//$(".pointeur").css("background","#3e7e07");
		$(".timeline").removeClass("timelineActive");
		

		
		//le traitement
        //la distance qu'on peut parcourir avec un plein de carburant
        var d=$("#distance");
	
	//verification de distances avec distanceMax
	
	$(".distance").each(function(index){
			if( parseInt($(this).val()) > parseInt(d.val()) ){
				alert("Erreur at distance"+index+": "+$(this).val() + " > " + d.val());
				error=1;
				return false;
			}
		});
	if(error==1){
		//alert("vérifier les distances en entrée > distance max pour un plein");
		//sortir de la fonction si error
		return false;
	}
	
        //la liste des distances n+1 tq n est le nombre de station
        var distances=$(".distance");
        //var solution=$("<div id='resultat'></div>");
        var i=0;
		var dist=0;
		var continu=0;
																		//alert("le nombre de stations"+parseInt($("#n").val()));
       while(i<=parseInt($("#n").val())){
        dist=0;
        continu=1;
           while(continu==1 && i<=parseInt($("#n").val()))
           {
               if(dist+parseInt($(".distance:eq("+i+")").val())<=parseInt($(d).val()))
               {
                  // alert("la distance"+dist+"la prochaine distance  "+$(".distance:eq("+i+")").val());
               dist=dist+parseInt($(".distance:eq("+i+")").val());
																		//alert("la prochaine distance est "+dist);
																		//alert("i avant l'incrémentation"+i);
                   i++;
                  // $(i).val($(i).val()+1);
                }
				else{
				continu=0;
				}
            }
			// alert("i avant la comaparaison"+i);
		    if(i<=parseInt($("#n").val())){
			    //var labelS=$("<label class='sol'>S"+i+"</label>");
																		//alert(i);
				//$(solution).append($("<br><label>resultat:</label>"));       
				//$(solution).append($(labelS));
					$(".timeline:eq("+i+")").addClass("timelineActive");
		    }
        }     
		//$("#divbody").append($(solution));
    });
	
});
});