import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  const configService: ConfigService = app.get(ConfigService);

  //Global prefix
  app.setGlobalPrefix('api');

  app.enableCors();

  //Swagger and OpenAPI config
  const config = new DocumentBuilder()
    .setTitle('App test')
    .setDescription('App test backend')
    .setVersion(require('../package.json').version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //Validations
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const refl = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(refl));

  await app.listen(configService.get('PORT') || 8000);
  console.log(`Application server running on: ${await app.getUrl()}`);
}

bootstrap();
