import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { CompetitionModule } from './competition/competition.module';

@Module({
  imports: [TeamModule, CompetitionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
