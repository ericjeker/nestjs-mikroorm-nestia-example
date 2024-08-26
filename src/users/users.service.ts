import { Injectable } from '@nestjs/common';
import { EntityRepository, Primary, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import * as UserDtos from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: EntityRepository<User>,
  ) {}

  find(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  get(id: string): Promise<User> {
    return this.usersRepository.findOneOrFail(id);
  }

  async create(input: UserDtos.Store): Promise<Primary<User>> {
    const user = this.usersRepository.create(input);
    await this.usersRepository.getEntityManager().flush();
    return user;
  }

  async update(id: string, input: Partial<UserDtos.Update>): Promise<User> {
    const user = await this.usersRepository.findOneOrFail(id);
    wrap(user).assign(input);
    await this.usersRepository.getEntityManager().flush();
    return user;
  }

  async delete(id: string): Promise<number> {
    await this.usersRepository.findOneOrFail(id);
    return this.usersRepository.nativeDelete(id);
  }
}
