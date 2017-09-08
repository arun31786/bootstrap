
$(document).ready(function(){/* activate sidebar */
	$('#sidebar').affix();

	/* activate scrollspy menu */
	$(document.body).scrollspy({
		target: '#sidebar'
	});

});