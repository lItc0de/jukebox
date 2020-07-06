import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { GqlAuthGuard } from 'src/auth/gql-jwt.guard';
import { UserPublicDTO } from './dto/user.dto';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => UserPublicDTO)
  @UseGuards(GqlAuthGuard)
  me(@CurrentUser() user) {
    return this.usersService.findUserByDisplayName(user.displayName);
  }
}
