import { Module } from '@nestjs/common';
import { NcmsService } from './ncms.service';
import { NcmsController } from './ncms.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ncm, NcmSchema } from './entities/ncm.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Ncm.name, schema: NcmSchema }])],
  controllers: [NcmsController],
  providers: [NcmsService],
})
export class NcmsModule {}
