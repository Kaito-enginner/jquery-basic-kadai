$(function() {
    // ボタンをクリックすると文字色が変化
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });

    // ボタンをクリックすると文字内容が変化
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');
    });

    // ボタンをクリックすると文字を非表示
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // ボタンをクリックすると文字を表示
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});