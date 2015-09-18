(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    var $photoForm = $('#photoForm');
    var $photoUrl = $('#photoUrl');
    var $photoCaption = $('#photoCaption');
    var $imageWindow = $('#imageWindow');
    var url = 'http://tiyfe.herokuapp.com/collections/g1';

    $('#plusBtn').click(function () {
        $photoForm.toggle('slow');
    });
    function photos() {
        $photoUrl = $photoUrl.val('');
        $photoCaption = $photoCaption.val('');
    }
    $('#cancelBtn').click(function (e) {
        e.preventDefault();
        photos();
        $photoForm.hide('slow');
    });
    $('#addBtn').click(function (e) {
        e.preventDefault();
        $photoForm.hide('slow');
        var imgUrl = $photoUrl.val();
        var caption = $photoCaption.val();
        console.log(imgUrl);
        console.log(caption);
        $.post(url, {
            imgUrl: imgUrl,
            caption: caption
        }, function (data) {
            $imageWindow.append('<div class="images"><img src="' + data.imgUrl + '"></div><div class="captions">' + data.caption + '</div>');
        });
    });
    $.get(url, function (imgcap) {
        imgcap.forEach(function (imgcap) {
            $imageWindow.append('<div class="images"><img src="' + imgcap.imgUrl + '"></div><div class="captions">' + imgcap.caption + '</div>');
        });
    }, 'json');
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map