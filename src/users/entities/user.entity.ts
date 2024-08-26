import { v4 } from 'uuid';
import { Entity, Hidden, PrimaryKey, Property } from '@mikro-orm/core';
import { BaseEntity } from '../../shared/base.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryKey()
  id = v4();

  @Property()
  title: string;

  @Property()
  name: string;

  @Property({ hidden: true })
  password: Hidden<string>;

  @Property({ onCreate: () => new Date() })
  createdAt = new Date();

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt = new Date();
}
