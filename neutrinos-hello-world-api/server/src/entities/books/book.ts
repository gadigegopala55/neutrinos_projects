//append_imports_start

import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('book')
export class book {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;
  @Column({ name: 'title', nullable: false, type: 'text', primary: false })
  title: string;
  @Column({ name: 'category', nullable: false, type: 'text', primary: false })
  category: string;
  @Column({
    name: 'published_date',
    nullable: false,
    precision: 6,
    type: 'timestamp with time zone',
    primary: false,
  })
  published_date: Date;
}
