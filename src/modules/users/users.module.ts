import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {UsersProvider} from './providers/users.provider';
import { DatabaseModule } from '../../config/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...UsersProvider],
  exports: [UsersService],
})
export class UsersModule {}


