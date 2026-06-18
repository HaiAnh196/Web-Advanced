import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { StudentModule } from './student/student.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
