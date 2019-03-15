import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    if (status === 404) {
      response
        .status(status)
        .send(
          `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="回到我的主页"></script>`,
        );
    } else {
      response
        .status(status)
        .json({
          code: exception.getStatus(),
          timestamp: new Date().toLocaleString(),
          path: request.url,
          message: exception.message,
        });
    }
  }
}
