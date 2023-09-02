import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service.ok';
import { AppServiceBuggy } from './app.service.buggy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppServiceBuggy],
})
export class AppModule {}
