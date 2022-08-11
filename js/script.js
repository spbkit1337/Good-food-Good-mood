//swiper js слайдер с отзывами

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  



//pop-up при клике на картинку в блоке about us

// создаем переменную popup и находим через id картинку в about us с id popup

let popup = document.getElementById("popup");

// добавляем событие по клику то есть событие click будет происходить функция
popup.addEventListener('click', function(){

  // тут написал код я взял его из библеотеки SweetAlert2 (есть еще просто sweetalert но тут я юзаю вторую версию) и добавил ссылку на ролик 

  Swal.fire({    
    html:      
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/FshTJqcMo-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ',
      width: 800,
      height: 800,
      background: "000",
  })

});




// Есть еще один способ вывести этот алерт. Можно просто добавить вместо id в html атрибут onclick="popup()" (popup() - можно назвать по другому) и вызвать функцию ниже


// function popup(){
//   Swal.fire({    
//     html:      
//       '<iframe width="560" height="315" src="https://www.youtube.com/embed/FshTJqcMo-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ',
//       width: 800,
//       height: 800,
//       background: "000",
//   })
// }