var availableLanguage = [
  ['zh', '中文-简体'],
  ['en', 'English'],
];

$(document).ready(function() {

  var lang = getCookie('language');
  if (lang === null) {
    lang = detectLanguage();
  }

  changeText(lang);

  var handleclick = function() {
    var index = $('#languageList').children().index(this);
    var item = availableLanguage[index];
    changeLanguage(index);
    $('#currentLang').text(item[1]);

    $('#languageList').children('li').removeClass('active');
    $(this).addClass('active');
};

  for (var i = 0; i < availableLanguage.length; i++) {
    var it = availableLanguage[i];
    var dom = $('<li><a href="#">' + it[1] + '</a></li>');
    dom.click(handleclick).appendTo('#languageList');
    if (lang == it[0]) {
      dom.addClass('active');
      $('#currentLang').text(it[1]);
    }
  }
  $('#changeLanguage').click(function() {
    var list = $('#languageList');
    if (list.is(':visible')) {
      list.slideUp();
      $('#changeLanguage .triangle').removeClass('reverse');
    } else {
      list.slideDown();
      $('#changeLanguage .triangle').addClass('reverse');
    }
  });

  addMask($('.what-can-do'));
  addMask($('#contentAbout'));
});

function addMask(item) {
  var width = item.width();
  var height = item.height();
  $('<div class="mask"></div>').width(width).height(height).prependTo(item);
}

function changeText(lang) {
  $.i18n.properties({
    name: 'strings',
    path: 'i18n/',
    mode: 'map',
    language: lang,
    callback: function() {
      for (var key in $.i18n.map) {
        $('#' + key).html($.i18n.prop(key));
      }
    }
  });
}

function changeLanguage(index) {
  setCookie('language', availableLanguage[index][0]);
  changeText(availableLanguage[index][0]);
}

function detectLanguage() {
  var detectedLng = (navigator.language) ? navigator.language : navigator.userLanguage;
  if (detectedLng.indexOf('zh') >= 0) {
    return 'zh';
  } else {
    return 'en';
  }
}

function setCookie(name, value) {
  var cookie = name + '=' + escape(value);
  document.cookie = cookie;
}

function getCookie(name) {
  var arr;
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
