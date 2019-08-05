import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { SuscriptionService } from './suscription.service';

@Module({
  controllers: [RegisterController],
  providers: [SuscriptionService]
})
export class RegisterModule {}
