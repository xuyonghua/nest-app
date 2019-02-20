import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Render('index')
  root() {
    return this.appService.getHello();
  }

  @Get('hello')
  getHello() {
    return this.appService.getHello();
  }
}
