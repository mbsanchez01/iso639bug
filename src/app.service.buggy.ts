import { Injectable, Logger } from '@nestjs/common';
import ISO6391, { LanguageCode } from 'iso-639-1';

@Injectable()
export class AppServiceBuggy {
  getLanguagesBuggy(): LanguageCode[] {
    return ISO6391.getAllCodes();
  }
}
