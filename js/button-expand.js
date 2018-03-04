'use strict';
(function () {
  var expandHeadings = document.querySelectorAll('.news__year-title');

  Array.prototype.forEach.call(expandHeadings, function (expandHeading) {
    var btn = expandHeading.querySelector('.button-expand');
    var target = expandHeading.nextElementSibling;

    btn.addEventListener('click', function() {
      var expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.setAttribute('aria-expanded', !expanded);
      target.hidden = expanded;
    });
  })
})();
