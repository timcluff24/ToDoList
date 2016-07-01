$(document).ready(function(){

	$("body").on('click', '.addButton', function() {
		var task = $(".taskInputToDo").val();

		if(task.length != 0) {
			var id = task.replace(/\s/g, '') + "1";
			var appended = "<div class=\"toDo\" id=\"" + id + "\"><p class=\"task\">" + task + "<strong class=\"fin\">&#x2713</strong><strong class=\"delete\">X</strong></p></div>";

			$(".Unfinished").append(appended);
			$(".taskInputToDo").val("");

			$("#" + id).click(function(){
				$(".Finished").append(this);
			});

			$(".delete").click(function(){
				$("#" + id).remove();
			});
		}
		else {

		}
	});
 	
 	$(".tabs p").click(function(){

 		if($(this).attr('class') == "all") {
 			$(".Unfinished").show();
 			$(".Finished").show();

 			$(".unf").css("border-bottom", "2px solid #C4C4C4");
			$(".dun").css("border-bottom", "2px solid #C4C4C4");
			$(".all").css("border-bottom", "2px solid #3369E8");
 		}
 		else if($(this).attr('class') == "unf") {
 			$(".Unfinished").show();
 			$(".Finished").hide();

 			$(".unf").css("border-bottom", "2px solid #3369E8");
			$(".dun").css("border-bottom", "2px solid #C4C4C4");
			$(".all").css("border-bottom", "2px solid #C4C4C4");
 		}
 		else {
 			$(".Unfinished").hide();
 			$(".Finished").show();

 			$(".unf").css("border-bottom", "2px solid #C4C4C4");
			$(".dun").css("border-bottom", "2px solid #3369E8");
			$(".all").css("border-bottom", "2px solid #C4C4C4");
 		}
 	});
});