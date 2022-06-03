jQuery(window).on('load', function () {

  //sp navi
  var current = false;
  var $gBtn = $('#js-gnav-menu');
  var $gNav = $('#js-gnav');
  $gBtn.on('click', function () {
    if (current == false) {
      current = true;
      if (!$(this).hasClass('is--close')) {
        $gNav.stop().addClass('is--enable');
        $gBtn.addClass('is--close');
        current = false;
      } else {
        $gNav.stop().removeClass('is--enable');
        $gBtn.removeClass('is--close');
        current = false;
      }
    } else {
      return false;
    }
  });
  //pagetop
  var flag = false;
  var pagetop = $('#js-pagetop');
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  //sp tel link
  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    $('.js-tel').each(function () {
      var str = $(this).html();
      if ($(this).children().is('img')) {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
      } else {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
      }
    });
  }
});

//typekit
(function (d) {
  var config = {
      kitId: 'juz6adp',
      scriptTimeout: 3000,
      async: true
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config)
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s)
})(document);
