import { Module } from '@nestjs/common';
import { TypeormService } from './typeorm.service';
import { TypeormController } from './typeorm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [TypeormService],
  controllers: [TypeormController]
})
export class TypeormModule { }
