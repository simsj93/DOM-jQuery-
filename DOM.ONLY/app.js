
document.addEventListener("DOMContentLoaded", function () {

  const tenFriends = ['Jake B', 'Cebastian', 'Jake E', 'Winnie', 'Eddie', 'Tanner', 'Caleb', 'Zach', 'Tyler', 'James']

  const btn1 = document.createElement('button');
  document.body.appendChild(btn1);
  btn1.id = "obj-1-button";
  btn1.innerText = "Cause Alert";

  btn1.addEventListener('click', function () {

    alert("You're not going to believe this. You've caused an alert to trigger!");

  });

  let btn2 = document.getElementById('obj-2-button');
  btn2.addEventListener('click', function () {
    let alertText = document.getElementById('obj-2-text').value;
    alert(alertText);
  });

  let div3 = document.getElementById("obj-3-div");
  div3.addEventListener('mouseover', function (event) {
    event.target.style.backgroundColor = '#FF5733';
    div3.addEventListener('mouseout', function () {
      event.target.style.backgroundColor = 'black';
    });
  });

  let p4 = document.getElementById("obj-4-para");
  p4.addEventListener('click', function (event) {
    event.target.style.color = (getRandomColor())
  });

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  let btn5 = document.getElementById("obj-5-button");
  let div5 = document.getElementById("obj-5-div");
  btn5.addEventListener('click', function () {
    let nameSpan = document.createElement('span');
    nameSpan.innerText = "Jake";
    div5.appendChild(nameSpan);

  }); 

  let ul6 = document.getElementById('obj-6-ul'); 
  let btn6 = document.getElementById('obj-6-button');
  btn6.addEventListener('click', function () {
    for (var i=0; i < tenFriends.length; i++) {
     let li6 =  document.createElement('li'); 
     li6.innerText = tenFriends[i]; 
     ul6.appendChild(li6); 
    }
  }
  )


}); 