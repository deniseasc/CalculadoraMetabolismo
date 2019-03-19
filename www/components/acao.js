$(document).on('click','#calcular',function(){
	var peso = $("#peso").val();
	var alt  = $("#alt").val();
	var idade= $("#idade").val();
	var ativ = $("#ativ").val();
	var sexoM = $("input[id='sexo2']:checked").val();
	var sexoF = $("input[id='sexo1']:checked").val();
	var mb; 
	if (sexoM == "masc"){
		mb = parseFloat(ativ)*(66 + (13.7*parseFloat(peso))+ (5*parseFloat(alt))-(6.8*parseFloat(idade)));
		
	}
	 else if (sexoF == "fem"){
		 mb = parseFloat(ativ)*(65.5 + (9.6*parseFloat(peso))+ (1.8*parseFloat(alt))-(4.7*parseFloat(idade)));
	 }
	 
	 $("#mb").val(mb);
	
});

$(document).on('click','#limpar',function(){
	   $("#peso").val("");
       $("#alt").val("");
       $("#idade").val("");
	    $("#ativ  option:selected" ).val("");
       $("#sexo").val("");
       $("#mb").val("");
	
	
	
});

