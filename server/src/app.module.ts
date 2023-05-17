import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { QuizModule } from './modules/quizes/quiz.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    QuizModule,
    UserModule,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
