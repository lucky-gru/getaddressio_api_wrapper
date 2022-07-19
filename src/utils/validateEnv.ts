import {
  cleanEnv, port, str,
} from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    GETADDRESSIO_API_KEY: str(),
  });
}

export default validateEnv;