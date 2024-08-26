import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const className = context.getClass().name;
    const handlerName = context.getHandler().name;

    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log(
            `Execution time: ${Date.now() - now}ms`,
            `${className}.${handlerName}`,
          ),
        ),
      );
  }
}
