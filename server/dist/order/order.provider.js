"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProviders = void 0;
const order_entity_1 = require("./order.entity");
exports.orderProviders = [
    {
        provide: 'ORDER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(order_entity_1.ORDER),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=order.provider.js.map