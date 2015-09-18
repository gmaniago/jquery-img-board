'use strict';

$(document).ready(function() {

	var $photoForm = $('#photoForm');
	var $photoUrl = $('#photoUrl');
	var $photoCaptipn = $('#photoCaption');
	var $imageWindow = $('#imageWindow')
	var url = 'http://tiyfe.herokuapp.com/collections/gmaniago';

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

});