import { Module } from '@nestjs/common';
import { NcmsService } from './ncms.service';
import { NcmsController } from './ncms.controller';

@Module({
  controllers: [NcmsController],
  providers: [NcmsService],
})
export class NcmsModule {}
