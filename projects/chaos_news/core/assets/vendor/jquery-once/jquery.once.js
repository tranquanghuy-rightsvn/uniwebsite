/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 * http://opensource.org/licenses/MIT
 * http://opensource.org/licenses/GPL-2.0
 */
(function(factory) {
    'use strict';
    if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
})(function($) {
    'use strict';
    var checkId = function(id) {
        id = id || 'once';
        if (typeof id !== 'string') {
            throw new TypeError('The jQuery Once id parameter must be a string');
        }
        return id;
    };
    $.fn.once = function(id) {
        var name = 'jquery-once-' + checkId(id);
        return this.filter(function() {
            return $(this).data(name) !== true;
        }).data(name, true);
    };
    $.fn.removeOnce = function(id) {
        return this.findOnce(id).removeData('jquery-once-' + checkId(id));
    };
    $.fn.findOnce = function(id) {
        var name = 'jquery-once-' + checkId(id);
        return this.filter(function() {
            return $(this).data(name) === true;
        });
    };
});