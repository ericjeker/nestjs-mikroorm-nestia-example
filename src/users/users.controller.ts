import { Primary } from '@mikro-orm/core';
import { Controller } from '@nestjs/common';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import * as UserDtos from './dtos/user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @TypedRoute.Get()
  find(): Promise<User[]> {
    return this.usersService.find();
  }

  @TypedRoute.Get(':id')
  get(@TypedParam('id') id: string): Promise<User> {
    return this.usersService.get(id);
  }

  @TypedRoute.Post()
  post(@TypedBody() user: UserDtos.Store): Promise<Primary<User>> {
    return this.usersService.create(user);
  }

  /**
   * Reminder: PUT is idempotent, `user` is a full instance
   *
   * @param id
   * @param user
   */
  @TypedRoute.Put(':id')
  put(
    @TypedParam('id') id: string,
    @TypedBody() user: UserDtos.Update,
  ): Promise<User> {
    return this.usersService.update(id, user);
  }

  /**
   * Reminder: PATCH is NOT idempotent, `user` is a partial instance
   *
   * @param id
   * @param user
   */
  @TypedRoute.Patch(':id')
  patch(
    @TypedParam('id') id: string,
    @TypedBody() user: Partial<UserDtos.Update>,
  ): Promise<User> {
    return this.usersService.update(id, user);
  }

  @TypedRoute.Delete(':id')
  delete(@TypedParam('id') id: string): Promise<number> {
    return this.usersService.delete(id);
  }
}
