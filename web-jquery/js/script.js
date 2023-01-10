function animasiIntro(){
    $("#text span").velocity("transition.slideLeftIn",{
		                      stagger: 200,
							  complete: function(){
								animasiButtonStart();
							  }
							});
}

function animasiButtonStart(){
	$("#start").velocity("transition.bounceUpIn")
	           .mouseenter(function(){
					$(this).velocity({widht:100});
				})
			   .mouseleave(function(){
				$(this).velocity({widht:145});
		   		});
}

$(document).ready(function(){
	animasiIntro();
});