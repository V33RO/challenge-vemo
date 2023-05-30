import { array } from 'joi';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column('text', { array: true, nullable: true })
  capital: string[] | null;

  @Column({ type: 'jsonb', nullable: true })
  currencies: Record<string, { name: string; symbol: string }> | null;

  @Column({ type: 'text' })
  region: string;

  @Column({ type: 'jsonb', nullable: true })
  languages: Record<string, any> | null;

  @Column({ type: 'int' })
  population: number;

  @Column({ type: 'varchar' })
  flags: string;
}
