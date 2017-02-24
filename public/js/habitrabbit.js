
	$(document).ready(function() {
		//initializePage();
		$("#back-button").click(function() {
		window.history.back();
	});

	});

/*
function initializePage() {
	//adds exercise to favorites EVENTUALLY
	$('.fav').click(addFav);

}

function addFav(e) {
	e.preventDefault();
	//from lab6 get div ID,
	var exerciseID = $(this).closest('.exercise').attr('id');
	console.log("User clicked on exercise " + exerciseID);

*/