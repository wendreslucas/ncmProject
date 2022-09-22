import { Module } from '@nestjs/common';
import { NcmsModule } from './ncms/ncms.module';

@Module({
  imports: [NcmsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
