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

  var blocs = document.querySelectorAll(".container div");

  blocs.forEach(function(bloc){
    bloc.addEventListener("click", function(e){
      if (e && e.preventDefault) e.preventDefault();
      blocs.forEach(function(otherBloc){
        var otherDivC = otherBloc.querySelector('.zoom div');
        if (otherDivC != null){
          otherDivC.classList.remove("affiché");
        }
        otherBloc.classList.remove("zoom");
      });
      bloc.classList.add("zoom");
      var divC = bloc.querySelector('.zoom div');
      if (divC) {
        var img = divC.querySelector('img');
        if (img) {
          var rect = bloc.getBoundingClientRect();
          if (rect.left < window.innerWidth / 2) {
            img.style.left = '20vw';
            img.style.right = 'auto';
          } else {
            img.style.right = '20vw';
            img.style.left = 'auto';
          }
        }
        divC.classList.add("affiché");
      }
      console.log("Animation relancée.");
    });
  });

  document.addEventListener("click", function(e){
    if (!e.target.closest(".container div")) {
      blocs.forEach(function(bloc){
        var divC = bloc.querySelector('.zoom div');
        if (divC != null){
          divC.classList.remove("affiché");
          var img = divC.querySelector('img');
          if (img) {
            img.style.left = '';
            img.style.right = '';
          }
        }
        bloc.classList.remove("zoom");
      })
    }
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
