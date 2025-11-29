// research.js — lightweight scroll-triggered reveal using IntersectionObserver
(function(){
  'use strict';

  function onReady() {
    var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      }, {root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08});

      reveals.forEach(function(el){ obs.observe(el); });
    } else {
      // fallback: reveal all
      reveals.forEach(function(el){ el.classList.add('in-view'); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
})();
