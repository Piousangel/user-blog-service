import { Controller, Get } from '@nestjs/common';
import { StaticsService } from './statics.service';

@Controller('statics')
export class StaticsController {

    constructor(private staticsService: StaticsService){}

    @Get('/')
    async getAllInfo(){
        
    }
}
