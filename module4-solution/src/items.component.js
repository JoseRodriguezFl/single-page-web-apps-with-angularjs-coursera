(function() {
'use strict';

angular.module('MenuApp')
.component('items', {
    templateUrl: 'src/item.html',
    bindings: {
        items: '<'
    }
});


})();
