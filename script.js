document.addEventListener('DOMContentLoaded', function(){
  "use strict";
  var titres = document.querySelectorAll(".titre_section");
  titres.forEach(function(t){ t.classList.add('run-animation'); });
  titres.forEach(function(titre){
    titre.addEventListener("click", function(e){
      if (e && e.preventDefault) e.preventDefault();
      titre.classList.remove("run-animation");
      void titre.offsetWidth;
      titre.classList.add("run-animation");
      console.log("Animation relancée.");
    });
  });

  let deroules = document.querySelectorAll(".deroule");

  deroules.forEach(function(el){
    el.addEventListener('click', function(){
      var container = el.closest('.description');
      if (!container) return;
      var list = container.querySelector('ul');
      if (list) list.classList.toggle('open');
    });
  });
});
