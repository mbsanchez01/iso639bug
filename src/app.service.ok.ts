import { Injectable, Logger } from '@nestjs/common';
import * as ISO6391 from 'iso-639-1';
import { LanguageCode } from 'iso-639-1';

@Injectable()
export class AppService {
  getLanguagesOK(): LanguageCode[] {
    return (ISO6391 as any).getAllCodes();
  }
}
