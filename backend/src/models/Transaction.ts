import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('transactions')
class Transaction {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('decimal')
  value: number;

  @Column()
  type: 'income' | 'outcome';

  @Column()
  category: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  user_id: string;
}

export default Transaction;
