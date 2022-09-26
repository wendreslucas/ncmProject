import { NcmsService } from './ncms/ncms.service';
import { NcmsController } from './ncms/ncms.controller';
import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NcmsModule } from './ncms/ncms.module';

dotenv.config();

@Module({
  imports: [NcmsModule, MongooseModule.forRoot(process.env.URL_MONGO)],
  controllers: [NcmsController],
  providers: [NcmsService],
})
export class AppModule {}
