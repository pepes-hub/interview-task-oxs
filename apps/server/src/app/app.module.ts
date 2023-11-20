import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
