$(document).ready(() => {
	//format first post card
	$("article.post_cards:nth-child(6n-5)").addClass("is-12");
	$("article.post_cards:nth-child(6n-5) figure.featured").addClass("is-3by1");

	$("article.post_cards:nth-child(2n)").addClass("is-4");
	$("article.post_cards:nth-child(3n)").addClass("is-4");
	$("article.post_cards:nth-child(4n)").addClass("is-4");
	$("article.post_cards:nth-child(5n)").addClass("is-6");
	$("article.post_cards:nth-child(6n)").addClass("is-6");
});

