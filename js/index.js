$(document).ready(function() {
  $.i18n.properties({
    name: 'strings',
    path: 'i18n/',
    mode: 'map',
    language: 'zh',
    callback: function() {
      for (var key in $.i18n.map) {
        $('#' + key).html($.i18n.prop(key));
      }
    }
  });

  function addMask(item) {
    var width = item.width();
    var height = item.height();
    $('<div class="mask"></div>').width(width).height(height).prependTo(item);
  }
  addMask($('.what-can-do'));
  addMask($('#contentAbout'));
});
