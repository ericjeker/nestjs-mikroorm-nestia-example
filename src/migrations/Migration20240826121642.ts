import { Migration } from '@mikro-orm/migrations';

export class Migration20240826121642 extends Migration {

  override async up(): Promise<void> {
    this.addSql('create table `user` (`id` text not null, `title` text not null, `name` text not null, `password` text not null, `created_at` date not null, `updated_at` date not null, primary key (`id`));');
  }

}
