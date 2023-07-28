import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_URI } from './commons/environment';
import { UsersModule } from './infra/modules/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(DATABASE_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
