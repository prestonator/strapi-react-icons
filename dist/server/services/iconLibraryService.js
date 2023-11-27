"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async find(query) {
        return await strapi.entityService.findMany("plugin::strapi-react-icons.iconlibrary", query);
    },
    async create(data) {
        return await strapi.entityService.create("plugin::strapi-react-icons.iconlibrary", data);
    },
    async update(id, data) {
        return await strapi.entityService.update("plugin::strapi-react-icons.iconlibrary", id, data);
    },
    async delete(id) {
        return await strapi.entityService.delete("plugin::strapi-react-icons.iconlibrary", id);
    },
});
