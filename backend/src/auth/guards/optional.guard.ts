import { AuthGuard } from '@nestjs/passport';

export class OptionalJWT extends AuthGuard('jwt') {
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: any,
    status?: any,
  ): TUser {
    return user;
  }
}
