import { tags } from 'typia';

export interface Store {
  title: string & tags.MinLength<2> & tags.MaxLength<50>;
  name: string & tags.MaxLength<100> & tags.Pattern<'^[a-zA-Z -.]+$'>;
  password: string & tags.MinLength<6> & tags.Format<'password'>;
}

export interface Update extends Store {}
