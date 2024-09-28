import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { CocosService } from './src/cocos/cocos.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const cocosService = app.get(CocosService);

  for (let i = 0; i < 100; i++) {
    const title = `Random Title ${Math.floor(Math.random() * 1000)}`;
    await cocosService.create({ title });
  }

  await app.close();
}

bootstrap();
