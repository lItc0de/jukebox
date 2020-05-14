import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { GqlAuthGuard } from 'src/auth/gql-jwt.guard';
import { UserPublicType } from './dto/user-type.dto';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => UserPublicType)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user) {
    return this.usersService.findUserByDisplayName(user.displayName);
  }
}
