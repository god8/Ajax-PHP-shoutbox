$(document).ready(function(){
	$('#submit').on('click', function(){
		var name = $('#name').val();
		var shout = $('#shout').val();
		var date = getDate();
		var dataString = 'name=' + name + '$shout=' + shout + '$date=' + date;
		
		if(name == '' || shout == ''){
			alert('please fill in your name and shout');
		}
		else{
			$.ajax({
				type:"POST",
				url:"../jsshoutbox/shoutbox.php",
				data: datastring,
				cache: false,
				success: function(html){
					$('#shouts ul').prepend(html);
				}
			});
		}
		
		return false;
	});
});