$('document').ready(function () {

    const tenFriends = ['Jake B', 'Cebastian', 'Jake E', 'Winnie', 'Eddie', 'Tanner', 'Caleb', 'Zach', 'Tyler', 'James']

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    $('body').append("<input type='button' id='obj-1-button' value='click me'>")

    $('#obj-1-button').click(function () {
        alert('This is an alert.')
    });

  
    $('#obj-2-button').click(function () {
        alert($('#obj-2-text').val()); 
    }); 

   $('#obj-3-div').mouseenter(function (e) {
    e.target.style.backgroundColor = '#FF5733'; 
    $('#obj-3-div').mouseout(function (e){
        e.target.style.backgroundColor = 'black'; 
    });
   });

   $('#obj-4-para').click(function (e) {
        e.target.style.color = getRandomColor(); 
   });

   $('#obj-5-button').click(function (e) {
       $('#obj-5-div').append('<span>Jake</span>'); 
   })

   $('#obj-6-button').click(function (e) {
    for (let i=0; i < tenFriends.length; i++) {
        $('#obj-6-ul').append('<li>'  + tenFriends[i] +  '</li>'); 
    }
   }); 
});