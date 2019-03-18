import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from './common/errors.interceptor';
import { UserModule } from './auth/user/user.module';
import { HttpExceptionFilter } from './common/http-exception.filter';

@Module({
  // imports: [TypeOrmModule.forRoot(), PhotoModule, UserModule],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '120.78.145.12',
      port: 3306,
      username: 'root',
      password: 'Root@1234',
      database: 'lottery_dev',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PhotoModule, UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ErrorsInterceptor,
    // },
  ],
})
export class AppModule {
}
