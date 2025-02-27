import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Req() req): string {
    console.log(req);
    return this.appService.getHello();
  }

  @Get("hello/:id")
  getCustomeHello(@Req() req, @Query() querry, @Param() param): string {
    // console.log(querry, param);
    return this.appService.getCustomHello();
  }

}
