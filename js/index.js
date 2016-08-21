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
});
