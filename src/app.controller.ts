import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.ok';
import { LanguageCode } from 'iso-639-1';
import { AppServiceBuggy } from './app.service.buggy';

@Controller()
export class AppController {
  constructor(
    private readonly appServiceOk: AppService,
    private readonly appServiceBuggy: AppServiceBuggy,
  ) {}

  @Get('buggy')
  getLanguagesBuggy(): LanguageCode[] {
    return this.appServiceBuggy.getLanguagesBuggy();
  }

  @Get('ok')
  getLanguagesOk(): LanguageCode[] {
    return this.appServiceOk.getLanguagesOK();
  }
}
