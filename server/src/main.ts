import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  
  app.use(cookieParser());
  app.use(
    session({
      secret: 'my-session-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
