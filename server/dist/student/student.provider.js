"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentProviders = void 0;
const student_entity_1 = require("./student.entity");
exports.studentProviders = [
    {
        provide: 'STUDENT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(student_entity_1.STUDENT),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=student.provider.js.map