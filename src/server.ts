import 'dotenv/config';
import 'module-alias/register';
import App from './app';
import validateEnv from './utils/validateEnv';
import AddressController from "./controllers/address.controller";

validateEnv();

const app = new App(
  [
    new AddressController(),
  ],
);

app.listen();