"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const product_entity_1 = require("../products/product.entity");
const customer_entity_1 = require("../customer/customer.entity");
const order_entity_1 = require("../order/order.entity");
const user_entity_1 = require("../auth/user.entity");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'LeHaiAnh196@',
                database: 'ecommerce_db',
                entities: [product_entity_1.Product, customer_entity_1.CUSTOMER, order_entity_1.ORDER, user_entity_1.User],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map