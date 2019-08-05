import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from './landing/register.controller';
// import { RegisterModule } from './landing/register.module';
import { SuscriptionService } from './landing/suscription.service';  
import { MongooseModule } from '@nestjs/mongoose';
import { LandingSchema } from './landing/schemas/landing.schema';
@Module({
  imports: [
    // RegisterModule, 
    MongooseModule.forRoot('mongodb://localhost/landing'),
    MongooseModule.forFeature([{name: 'Suscription', schema: LandingSchema}])
  ],
  controllers: [AppController, RegisterController],
  providers: [AppService, SuscriptionService],
})
export class AppModule {}
