import { BaseEntity as MikroOrmBaseEntity, wrap } from '@mikro-orm/core';

export class BaseEntity extends MikroOrmBaseEntity {
  toJSON(...args: any[]) {
    return wrap(this, true).toObject(args);
  }
}
