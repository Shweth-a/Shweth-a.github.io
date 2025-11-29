// site.js — smooth page transitions (fade out on navigation)
(function(){
  'use strict';

  var FADE_MS = 360;

  function isLocalLink(href){
    try{
      var url = new URL(href, location.href);
      return url.origin === location.origin;
    }catch(e){ return false; }
  }

  function init(){
    // ensure body visible on load
    document.documentElement.classList.remove('page-exit');

    document.addEventListener('click', function(e){
      var a = e.target.closest && e.target.closest('a');
      if(!a) return;
      var href = a.getAttribute('href');
      if(!href || href.startsWith('#')) return; // allow anchors
      if(!isLocalLink(href)) return; // external links untouched

      // intercept navigation
      e.preventDefault();
      document.documentElement.classList.add('page-exit');
      setTimeout(function(){ window.location = href; }, FADE_MS);
    }, true);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
