'use strict';

module.exports = function($$resolver) {
    $$resolver.add({
        '$login': require('./handlers/login'),
        '$logout': require('./handlers/logout'),
    });
};
