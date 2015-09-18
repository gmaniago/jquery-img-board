'use strict';

$(document).ready(function() {

	var $photoForm = $('#photoForm');
	var $photoUrl = $('#photoUrl');
	var $photoCaption = $('#photoCaption');
	var $imageWindow = $('#imageWindow')
	var url = 'http://tiyfe.herokuapp.com/collections/g1';

	$('#plusBtn').click(function() {
		$photoForm.toggle('slow');
	});
	function photos() {
        $photoUrl = $photoUrl.val('');
        $photoCaption = $photoCaption.val('');
    }
    $('#cancelBtn').click(function(e) {
        e.preventDefault();
        photos();
        $photoForm.hide('slow');
    });
    $('#addBtn').click(function(e) {
        e.preventDefault();
        $photoForm.hide('slow');
        var imgUrl = $photoUrl.val();
        var caption = $photoCaption.val();
        console.log(imgUrl);
        console.log(caption);
        $.post(
            url, {
                imgUrl: imgUrl,
                caption: caption
            },
            function(data) {
                $imageWindow.append('<div class="images"><img src="'+data.imgUrl+
                    '"></div><div class="captions">'+data.caption+'</div>')
            }
        );
	});
	$.get(
        url,
        function(imgcap) {
            imgcap.forEach(function(imgcap) {
                $imageWindow.append('<div class="images"><img src="'+imgcap.imgUrl+
                    '"></div><div class="captions">'+imgcap.caption+'</div>')
            })
        },
        'json'
    );

});


