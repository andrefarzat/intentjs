(function (root, factory) {
    
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([root], factory);
    } else if (typeof angular !== 'undefined'){
        // angular. Register as a service.
        angular.module('intentjs', []).service('Intent', function(){
            return factory(root, {});
        });
    } else {
        // Browser globals
        root.Intent = factory(root, {});
    }

}(this, function (window, Intent) {

    /**
     * Obvious funtion
     * @private
     * @see http://youmightnotneedjquery.com/#extend
     */
    function extend(out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;

            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                out[key] = arguments[i][key];
            }
        }

        return out;
    }

    /**
     * Urls for the services
     * @type {Object}
     */
    Intent._urls = {
        'facebook': '//facebook.com/dialog/feed',
        'twitter': '//twitter.com/intent/tweet',
        'gplus': '//plus.google.com/u/0/share'
    };

    /**
     * All registered services
     * @type {Object}
     */
    Intent.services = {

        /**
         * Facebook default config
         * @see https://developers.facebook.com/docs/sharing/reference/feed-dialog
         */
        'facebook': {
            'url': '//facebook.com/dialog/feed',
            'config': {
                'display': 'popup',
                'ref': 'share'
            }
        },

        /**
         * Twitter default config
         * @see https://dev.twitter.com/docs/intents
         */
        'twitter': {
            'url': '//twitter.com/intent/tweet',
            'config': {}
        },

        /**
         * Google default config
         */
        'gplus': {
            'url': '//plus.google.com/u/0/share',
            'config': {}
        }
    };

    /**
     * Opens the facebook dialog
     *
     * @param {Object} config The facebook config parameters
     */
    Intent.facebook = function(config){
        config = extend({}, Intent.services.facebook, config || {});
        Intent.open('facebook', config);
    };

    /**
     * Opens the twitter dialog
     * @param  {Object} config
     */
    Intent.twiter = function(config){
        Intent.open('twitter', config);
    };

    /**
     * Opens the google plus dialog
     * @param  {Object} config
     */
    Intent.gplus = function(config){
        Intent.open('gplus', config);
    };

    /**
     * Opens the url by the service name
     * @param  {string} serviceName
     * @param  {object} data Will be added as get parameters
     */
    Intent.open = function(serviceName, data){
        var url = Intent.services[serviceName].url,
            params = [],
            i, top, left, w, h;

        w = data.width || 650;
        h = data.height || 306;
        top = (screen.height / 2) - (h / 2);
        left = (screen.width / 2) - (w / 2);

        if( !url ){
            throw new Error("Service "+serviceName+" does not exist");
        }

        delete data.width;
        delete data.height;

        for( i in data ){
            if( data.hasOwnProperty(i) && data[i] ){
                params.push(i+'='+escape(data[i]));
            }
        }

        window.open(url+'?'+params.join('&'), 'sharer', 'toolbar=0,status=0,width='+w+',height='+h+',top='+top+',left='+left);
    };

    return Intent;
}));