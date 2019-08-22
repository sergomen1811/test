//alert ('Hello');

function f2(){
   window.open('https://www.facebook.com/profile.php?id=100014553404199&eid=ARCcnkiHYx-uH6-vRqLV5U0nS1TzxhkxttfbqikR8UsKpjiElpy-ty_6Ll_X7XKS1UNdQ6wrsdlH_kIs&timeline_context_item_type=intro_card_relationship&timeline_context_item_source=100006468845417');
}

function f1(){
   window.open('https://www.instagram.com/sergey_kashuba/?hl=ru');
}

function f3(){
   window.open('https://vk.com/sergomen22');
}

//document.getElementById('slider-right').onclick = sliderright;
   autoslider();
   var right = 0;
   var timer;

function autoslider (){
   timer = setTimeout(sliderright, 1000);
}

 function sliderright(){
    var polosa = document.getElementById('polosa');
    right = right - 128;
    if (right < -384) {
    right = 0;
    clearTimeout(timer);
   }
    polosa.style.right = right +'px';
    autoslider();

 }
 document.onwheel = function (event) {
    console.log(event);
 }
 let h2Divs = document.querySelectorAll('.header-bg');

 for (let i = 0; i < h2Divs.length; i++); {
      bgDiv = document.createElement('div');
      bgDiv.style.height = h2Divs[i].offsetHeight + 'px';
      bgDiv.classList.add('square-bg');
      h2Divs[i].appendChild(bgDiv);
      
 }
 