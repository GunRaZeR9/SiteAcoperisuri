import { Module } from '@nestjs/common';
import { FormsController } from './forms.controller';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [FormsController],
})
export class FormsModule {}
