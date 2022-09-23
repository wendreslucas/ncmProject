import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NcmsModule } from './ncms/ncms.module';

@Module({
  imports: [
    NcmsModule,
    MongooseModule.forRoot(
      'mongodb+srv://wendreslucas:NewHorizons7@cluster0.abnnke3.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
