import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NcmsModule } from './ncms/ncms.module';

dotenv.config();

@Module({
  imports: [NcmsModule, MongooseModule.forRoot(process.env.URL_MONGO)],
  controllers: [],
  providers: [],
})
export class AppModule {}
