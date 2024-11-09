import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Child } from './child.entity';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Child])],
  providers: [ChildService],
  controllers: [ChildController],
  exports: [ChildService],
})
export class ChildModule {}
