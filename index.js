window.addEventListener('message', function(event){
    if(event.data.type == "Show"){
        $('#Text2').html(event.data.text);
        $('#Control2').html(event.data.control);
        $('#ui').fadeIn(500)
    } else if(event.data.type == "Hide"){
        $('#ui').fadeOut(500)
    }
});