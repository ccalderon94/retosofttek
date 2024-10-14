import { Module } from '@nestjs/common';
import { StarwarsPeopleController } from './controllers/starwars-people.controller';
import { StarwarsPeopleService } from './services/starwars-people.service';

@Module({
  controllers: [StarwarsPeopleController],
  providers: [StarwarsPeopleService],
})
export class StarwarsModule {}
