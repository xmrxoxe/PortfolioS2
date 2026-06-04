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
      var section = el.closest('section');
      if (!section) return;
      var list = section.querySelector('.description ul');
      if (list) list.classList.toggle('open');
    });
  });
});
