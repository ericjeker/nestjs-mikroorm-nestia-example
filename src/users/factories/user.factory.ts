import { faker } from '@faker-js/faker';
import { User } from '../entities/user.entity';
import { EntityDTO } from '@mikro-orm/core';

export const UserFactory = {
  make: (data: Partial<User> = {}): EntityDTO<User> => {
    const user = new User();

    user.id = faker.string.uuid();
    user.name = faker.person.fullName();
    user.title = faker.person.jobTitle();
    user.createdAt = faker.date.past();
    user.updatedAt = faker.date.future({ refDate: user.createdAt });

    return { ...user, ...data };
  },

  many(number: number): EntityDTO<User>[] {
    return Array.from({ length: number }, () => UserFactory.make());
  },
};
