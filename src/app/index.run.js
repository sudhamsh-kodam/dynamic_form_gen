(function() {
  'use strict';

  angular
    .module('samplePro')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
