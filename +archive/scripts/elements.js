PROJECTMADHOUSE.Elements = (function () {
  'use strict';

  function init() {
    PROJECTMADHOUSE.Elements.Template = document.getElementById('project-madhouse-app');
    PROJECTMADHOUSE.Elements.Loader = document.getElementById('showbox');
    
  }

  return {
    init: init
  };
}());