import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/user.entity';
import { PrismaModule } from './prisma/prisma.module';
import { TypeormModule } from './typeorm/typeorm.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'mysql',
      // host: 'localhost',
      // port: ,
      // username: '',
      // password: '',
      // database: '',
      // entities: [User],
      // synchronize: true,
      // logging: true
    }),
    PrismaModule,
    TypeormModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
