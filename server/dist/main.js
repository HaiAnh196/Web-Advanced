"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const student_module_1 = require("./student/student.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(student_module_1.StudentModule, { cors: true });
    app.enableCors();
    await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
//# sourceMappingURL=main.js.map