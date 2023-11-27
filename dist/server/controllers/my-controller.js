"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    index(ctx) {
        ctx.body = strapi
            .plugin('strapi-react-icons')
            .service('myService')
            .getWelcomeMessage();
    },
});
