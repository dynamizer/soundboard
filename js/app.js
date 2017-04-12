/*$(document).ready(function(){
	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
	    $("#sonPere").append($('<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"><button class="btn btn-primary btn-block">'+audio.attr("title")+'</button></div>').click(function(){that.play();}));
	});
});*/

$.getJSON("../sounds.json", function(data){
	for (var i = 0; i < data.sounds.length; i++) {
		var html ='<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">';
		html += '<button id="btn'+[i]+'" onclick="playSong('+data.sounds[i].fichier+',this.id);" class="btn btn-primary btn-block">'+data.sounds[i].nom+'</button>';
		html +='<audio id="'+data.sounds[i].fichier+'" src="sounds/'+data.sounds[i].fichier+'.mp3"></audio>';
		html+='</div>';
		$(html).appendTo( "#sonPere");
	}
});