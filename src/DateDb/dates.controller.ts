import { Controller, Post, Body, Get } from "@nestjs/common";
import { DatesService } from "./dates.service";

@Controller('dates')
export  class DatesController {

  constructor(private readonly dateService: DatesService) {}


  @Post()
  addDate(
    @Body('IDate') datum: string
  ) {
    const savedDate = this.dateService.insertDate(datum);

     return { Datum : savedDate }
  }

  @Get()
  getAllDates(){
    return this.dateService.getDates();
  }
}
