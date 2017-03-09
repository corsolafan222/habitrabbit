
	$(document).ready(function() {
		initializePage();
		$("#back-button").click(function() {
		window.history.back();
	});

	});

function initializePage() {
	$('.viewedExercise').click(function () {
		ga("send", "event", "view", "click");
	});

	
}