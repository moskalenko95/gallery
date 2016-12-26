$(document).ready(function () {

	$(".slide_item").on("click", function(){
		$(".slide_img").attr("src", $(this).attr("src"));
	});
});
