import request from 'supertest';
import { Test } from '@nestjs/testing';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { Controller, Post } from '@nestjs/common';

import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/interfaces/user.interface';

export const testUser: User = {
  type: 'user',
  spotifyId: 'test_id',
  displayName: 'test_user',
  accessToken: 'test_token',
  refreshToken: 'test_refresh_token',
};

@Controller()
class TestController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Post('auth/login')
  async login() {
    const user = await this.userService.findAndUpdateUser(testUser);
    const { accessToken } = await this.authService.login(user);
    return { accessToken };
  }
}

export const createTestingModule = (options: ModuleMetadata) =>
  Test.createTestingModule({
    imports: [
      ConfigModule.forRoot({
        envFilePath: '.env.test',
      }),
      GraphQLModule.forRoot({
        autoSchemaFile: 'src/schema.gql',
      }),
      MongooseModule.forRoot('mongodb://localhost/nestgraphqltesting'),
      AuthModule,
      UsersModule,
      ...(options.imports || []),
    ],
    controllers: [TestController, ...(options.controllers || [])],
    providers: [...(options.providers || [])],
    exports: [...(options.exports || [])],
  }).compile();

export const login = (app) => request(app.getHttpServer()).post('/auth/login');
