$(document).ready(function(){
	
	var re=localStorage.getItem('result');
	var jre=JSON.parse(re)
	$(jre).each(function(key,value){
		// console.log(key,value)
		$("main").append("<div><h1>"+value.Heading+"<input type= button value=x onclick=myFunction(this)></h1></div>")
		$(".form-select option").remove();
		$(".form-select").append("<option value =Select Heading>Select Heading</option>");
		$(".form-select-sub option").remove();
		$(".form-select-sub").append("<option value =Select Heading>Select Heading</option>");
		// $("main").sortable();
		var new_key=0;
		$("main div h1").each(function(key){
			var k =$( this ).text();			
			new_key++;
			$(".form-select").append("<option value="+new_key+">"+k+"</option> ")
			$(".form-select-sub").append("<option value="+new_key+">"+k+"</option> ")
		})
		// result.push({"Heading":value.Heading,"SubHeading":[]})
		// localStorage.setItem('result',JSON.stringify(result));		
		$(value.SubHeading).each(function(skey,svalue){
			console.log(skey,svalue)
			$("main div:nth-child("+(key+1)+")").append("<h2>"+svalue.SubHeading+"<input type= button value=x onclick=myFunction(this)></h2> ")
			// result[key-1].push({"SubHeading":svalue.SubHeading,"Input":[]})
			// localStorage.setItem('result',JSON.stringify(result));
			$(svalue.Input).each(function(ikey,ivalue){
				console.log(ikey,ivalue)
				
				if(ivalue.Input_selected == 'Radio'){
					ivalue.option_split=ivalue.option.split(",")
					$(ivalue.option_split).each(function(rkey,rvalue){
						// console.log(rkey,rvalue)
						$("main div:nth-child("+(key+1)+") h2:nth-child("+(skey+2)+")").append("<p><label for =" +ivalue.label+">"+rvalue+"</label> <input type="+ivalue.Input_selected+" name="+ivalue.name+" placeholder="+ivalue.placeholder+" class="+ivalue.class+" value="+ivalue.value+"><input type= button value=x onclick=myFunction(this)></p>")
					})
				}
				else if(ivalue.Input_selected == 'Checkbox'){
					ivalue.option_split=ivalue.option.split(",")
					$(ivalue.option_split).each(function(ckey,cvalue){
						// console.log(ckey,cvalue)
						$("main div:nth-child("+(key+1)+") h2:nth-child("+(skey+2)+")").append("<p><label for =" +ivalue.label+">"+cvalue+"</label> <input type="+ivalue.Input_selected+" name="+ivalue.name+" placeholder="+ivalue.placeholder+" class="+ivalue.class+" value="+ivalue.value+"><input type= button value=x onclick=myFunction(this)></p>")
					})
				}
				else if(ivalue.Input_selected == 'Select'){

					var vl=$("<label for="+ivalue.label+">"+ivalue.label+"</label>")
					var se=$("<Select name="+ivalue.name+" id="+ivalue.class+"></Select>").appendTo(vl)
					ivalue.option_split=ivalue.option.split(",")
					$(ivalue.option_split).each(function(sekey,sevalue){
						// console.log(sekey,sevalue)
						$("<option value="+sekey+">"+sevalue+"</option>").appendTo(se)
					})
					$("main div:nth-child("+(key+1)+") h2:nth-child("+(skey+2)+")").append(vl)
				}
				else{
					$("main div:nth-child("+(key+1)+") h2:nth-child("+(skey+2)+")").append("<p><label for =" +ivalue.label+">"+ivalue.label+"</label> <input name="+ivalue.name+" placeholder="+ivalue.placeholder+" class="+ivalue.class+" value="+ivalue.value+"><input type= button value=x onclick=myFunction(this)></p>")
				}
			})
		})		
	})
	$(".btn1").click(function(){
		var x=$("#recipient-name").val()
		$("main").append("<div><h1>"+x+"<input type= button value=x onclick=myFunction(this)></h1></div>")
		$(".form-select option").remove();
		$(".form-select").append("<option value =Select Heading>Select Heading</option>");
		$(".form-select-sub option").remove();
		$(".form-select-sub").append("<option value =Select Heading>Select Heading</option>");
		$("main").sortable();
		var key=0;
		$("main div h1").each(function(key){
			var k =$( this ).text();
			// console.log(k)			
			key++;
			$(".form-select").append("<option value="+key+">"+k+"</option> ")
			$(".form-select-sub").append("<option value="+key+">"+k+"</option> ")
		})
		// result.push({"Heading":x,"SubHeading":[]})
		// localStorage.setItem('result',JSON.stringify(result));
		
		// $("main").sortable();
		// $("main div" ).sortable();
		// $("main div h2").sortable();
		mylocal()
	})
	$(".btn1").click(function(){
        $(".Heading-form").trigger("reset");
    });
	
	$(".btn2").click(function(){
		var y=$("#message-text").val()
		var c=$(".form-select option:selected").val()
		// console.log(c)
		$("main div:nth-child("+c+")").append("<h2>"+y+"<input type= button value=x onclick=myFunction(this)></h2> ")
		// result[c-1].SubHeading.push({"SubHeading":y,"Input":[]})
		// localStorage.setItem('result',JSON.stringify(result));
		
		// $("main div h2").sortable();
		mylocal()


	})
	$(".btn2").click(function(){
        $(".Sub-Headingform").trigger("reset");
    });

	$(".form-select-sub").change(function(){
		var c=$(".form-select-sub option:selected").val()
		$(".form-select-sub-form option").remove();
		$(".form-select-sub-form").append("<option value =Select Sub Heading>Select Sub Heading</option>");
		var b=0;
		$("main div:nth-child("+c+") h2").each(function(){
			var i =$( this ).text();
			// console.log(i)
			b++;
			$(".form-select-sub-form").append("<option value="+b+">"+i+"</option> ")
		})
	})

	$(".btn3").click(function(){
		var selected_value=$(".form-select3").val()
		var a=$(".form-select-sub option:selected").val()
		// console.log(a)
		var b=$(".form-select-sub-form option:selected").val()
		console.log(b)
		var d=$(".form-select3 option:selected").val()
		// console.log(d)
		var c=parseInt(b)+1;	
		// $("main div:nth-child("+a+") h2:nth-child("+c+")").append("<h3><p>"+selected_value+"<input type= button value=x onclick=myFunction(this)></p></h3>")
		var iplabel=$(".form-control-label").val()
		var ipname=$(".form-control-name").val()
		var ipplaceholder=$(".form-control-placeholder").val()
		var ipclass=$(".form-control-class").val()
		var ipvalue=$(".form-control-value").val()
		var ipoption=$(".form-control-option").val()
		var option_split=ipoption.split(",");
		// $("main div p").sortable();
		var app=$("main div:nth-child("+a+") h2:nth-child("+c+")")
		if($(".form-select3 option:selected").val() == 'Radio'){
			$(option_split).each(function(key,value){
				$("main div:nth-child("+a+") h2:nth-child("+c+")").append("<p><label for =" +iplabel+">"+value+"</label> <input type="+d+" name="+ipname+" placeholder="+ipplaceholder+" class="+ipclass+" value="+ipvalue+"><input type= button value=x onclick=myFunction(this)></p>")
				// $("main div h3").sortable();
			})
			// result[c-1].SubHeading[c-2].Input.push({"Input_selected":d,"label":iplabel,"value":ipvalue,"name":ipname,"placeholder":ipplaceholder,"class":ipclass,"option":ipoption})
			// localStorage.setItem('result',JSON.stringify(result));
			mylocal()

		}
		else if($(".form-select3 option:selected").val() == 'Checkbox'){
			$(option_split).each(function(key,value){
				$("main div:nth-child("+a+") h2:nth-child("+c+")").append("<p><label for =" +iplabel+">"+value+"</label> <input type="+d +" name="+ipname+" placeholder="+ipplaceholder+" class="+ipclass+" value="+ipvalue+"><input type= button value=x onclick=myFunction(this)></p>")
			})
			// result[c-1].SubHeading[c-2].Input.push({"Input_selected":d,"value":ipvalue,"name":ipname,"placeholder":ipplaceholder,"class":ipclass,"option":ipoption})
			// localStorage.setItem('result',JSON.stringify(result));
			mylocal()
		}
		else if($(".form-select3 option:selected").val() == 'Select'){
			var vl=$("<label for="+iplabel+">"+iplabel+"</label>")
			var se=$("<Select name="+ipname+" id="+ipclass+"></Select>").appendTo(vl)
			$(option_split).each(function(key,value){
				// console.log(key,value)
				$("<option value="+key+">"+value+"</option>").appendTo(se)
			})
			$("main div:nth-child("+a+") h2:nth-child("+c+")").append(vl)

			// result[c-1].SubHeading[c-2].Input.push({"Input_selected":d,"value":ipvalue,"name":ipname,"placeholder":ipplaceholder,"class":ipclass,"option":ipoption,"label":iplabel})
			// localStorage.setItem('result',JSON.stringify(result));
			mylocal()
		}
		// else{
		// 	$("main div:nth-child("+a+"), h2:nth-child("+c+")").append("<p><label for ="+iplabel+">"+iplabel+"</label> <input name="+ipname+" placeholder="+ipplaceholder+" class="+ipclass+" value="+ipvalue+"><input type= button value=x onclick=myFunction(this)></p>");
		// 	// result[c-1].SubHeading[c-2].Input.push({"Input_selected":d,"label":iplabel,"name":ipname,"placeholder":ipplaceholder,"class":ipclass,"value":ipvalue})
		// 	// localStorage.setItem('result',JSON.stringify(result));
		// 	mylocal()
		// }
		// $("main div h2 p").sortable();
		else{
			$("main div:nth-child("+a+") h2:nth-child("+c+")").append("<p><label for ="+iplabel+">"+iplabel+"</label> <input name="+ipname+" placeholder="+ipplaceholder+" class="+ipclass+" value="+ipvalue+"><input type= button value=x onclick=myFunction(this)></p>")
		}
	})
	$(".btn3").click(function(){
        $(".form-form").trigger("reset");
    });

	myFunction=function(thise){
		$(thise).parent().remove()
		$(".form-select option").remove();
		$(".form-select").append("<option value =Select Heading>Select Heading</option>");
		$(".form-select-sub option").remove();
		$(".form-select-sub").append("<option value =Select Heading>Select Heading</option>");
		var key=0;
		$("main div h1").each(function(key){
			var k =$( this ).text();			
			key++;
			$(".form-select").append("<option value="+key+">"+k+"</option> ")
			$(".form-select-sub").append("<option value="+key+">"+k+"</option> ")
		});
		// localStorage.removeItem("result");
	}
	removelocal=function(){
		localStorage.removeItem("result");
	}
	mylocal=function(){
		result = []
		$(".form-select option").remove();
		$(".form-select").append("<option value =Select Heading>Select Heading</option>");
		$(".form-select-sub option").remove();
		$(".form-select-sub").append("<option value =Select Heading>Select Heading</option>");
		$("main div h1").each(function(key){
			var k =$( this ).text();
			// console.log(k)			
			key++;
			$(".form-select").append("<option value="+key+">"+k+"</option> ")
			$(".form-select-sub").append("<option value="+key+">"+k+"</option> ")
			result.push({"Heading":k,"SubHeading":[]})
			localStorage.setItem('result',JSON.stringify(result));

			// $(".form-select-sub option").remove();

		})
		$("main div h2").each(function(key,value){
			var z =$(this).text()
			// console.log(key,value)
			// console.log(key)
			// console.log(z)
			result[key].SubHeading.push({"SubHeading":z,"Input":[]})
			localStorage.setItem('result',JSON.stringify(result));
			$("p").each(function(skey,svalue){
				console.log(skey,svalue)
				$(".form-select option").remove();
				// result[skey+1].SubHeading[skey].Input.push({"Input_selected":d,"label":iplabel,"name":ipname,"placeholder":ipplaceholder,"class":ipclass,"value":ipvalue})
				// localStorage.setItem('result',JSON.stringify(result));
			})
		})
		


		// var y=$("#message-text").val()
		// 	var c=$(".form-select option:selected").val()
		// 	$("main div h2").each(function(){
		// 		result[c-1].SubHeading.push({"SubHeading":y,"Input":[]})
		// 		localStorage.setItem('result',JSON.stringify(result));
		// 	})
	}
});