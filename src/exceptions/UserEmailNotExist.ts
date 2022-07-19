import HttpException from './HttpException';

class UserEmailNotExistsException extends HttpException {
  constructor(email: string) {
    super(404, `User with email ${email} doesn't exist`);
  }
}

export default UserEmailNotExistsException;
