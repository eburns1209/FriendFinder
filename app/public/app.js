$('#submit').on('click', function(){
	

	var newFriend = {
		'name': $("#name").val().trim(),
		'photo': $("#photo").val().trim(),
		'scores':[$("#ql").val(), $("q2").val(), $("q3").val(), $("#q4").val(), $("#q5").val(), $("#6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#ql0").val()] 
	};

	var currentURL = window.location.origin;

	$.post(currentURL+ "/api/friends", newFriend, function(data){
		console.log(data)
	})

	.done(function(data){
		

		$('.modal-body').html('<h1> New Friend Found!</h1>'+
			'<h3> ' + data.name + '</h3>' +
			'<img src="' + data.photo+ '" width=300px>');

		$('#myModal').modal('toggle');

		$("#name").val("");
		$("#photo").val("");
		$("#q1").val("");
		$("#q2").val("");
		$("#q3").val("");
		$("#q4").val("");
		$("#q5").val("");
		$("#q6").val("");
		$("#q7").val("");
		$("#q8").val("");
		$("#q9").val("");
		$("#q10").val("");

	});

});