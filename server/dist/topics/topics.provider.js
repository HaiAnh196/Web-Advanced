"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topicsProviders = void 0;
const topics_entity_1 = require("./topics.entity");
exports.topicsProviders = [
    {
        provide: 'TOPICS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(topics_entity_1.TOPICS),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=topics.provider.js.map