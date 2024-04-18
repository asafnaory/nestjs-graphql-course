import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { PlayersModule } from './players/players.module';
import { PrismaModule } from './prisma/prisma.module';
import { PlayersTeamResolver } from './src/players/players-team.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    PlayersModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, PlayersTeamResolver],
})
export class AppModule {}
