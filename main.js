	var posx=0;
	var posy=0;
	function dibujapunto(despx,despy){
		posx=posx+despx;
		posy=posy+despy;
		var canvas=document.getElementById('canvas_game');
		var context=canvas.getContext('2d');
		context.fillStyle='red';
		context.fillRect(posx,posy,5,5);
	}


