import { EntityRepository } from '@mikro-orm/core';
import { User } from '../entities/user.entity';

export class UserRepository extends EntityRepository<User> {}
