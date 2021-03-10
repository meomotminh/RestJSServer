import { Injectable } from '@nestjs/common'
import { Datum } from './dates.model'

@Injectable()
export class DatesService {
    private dates: Datum[] = [];

    insertDate(IDate: string){
       const newDate = new Datum(IDate);

       this.dates.push(newDate);
       return IDate;
    }

    getDates(){
      return [...this.dates]
    }
}
