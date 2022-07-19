import logger from "../utils/logger";
class HttpException extends Error {
  public status: number;
  public message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
    logger.info(status);
    logger.info(message);
  }
}

export default HttpException;