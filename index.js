window.addEventListener('message', function(event){
    if(event.data.type == "Show"){
        $('#Text2').html(event.data.text);
        $('#Control2').html(event.data.control);
        $('#MedyumEnginHoca').slideDown(300)
        $('#MedyumEnginHoca').show()
    } else if(event.data.type == "Hide"){
        $('#MedyumEnginHoca').hide()
    }
});