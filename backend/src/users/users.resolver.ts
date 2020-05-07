import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { User } from './interfaces/user.interface';
import { UserType } from './dto/get-user.dto';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => UserType)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user: User) {
    return this.usersService.findUserByDisplayName(user.displayName);
  }
}
