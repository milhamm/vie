import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompetitionModule } from './competition/competition.module';
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TeamModule, UserModule, CompetitionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
