import { Request, Response, NextFunction, Router } from "express";
import { AxiosError } from "axios";
import HttpException from "../exceptions/HttpException";
import Controller from "../interfaces/controller.interface";
import AddressService from "../services/address.service";
class AddressController implements Controller {
  public path = "/address";
  public router = Router();
  public addressService = new AddressService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @openapi
     * /api/address/find/{postcode}:
     *  get:
     *     tags:
     *     - FindAddressByPostcode
     *     summary: Find addresses by postcode
     *     parameters:
     *       - in: path
     *         name: postcode
     *         schema:
     *           type: string
     *         required: true
     *         description: Postcode ex. nn13er
     *     responses:
     *      200:
     *        description: Success
     *        content:
     *          application/json:
     *            schema:
     *              addresses:
     *                schedma:
     *                  $ref: '#/components/schemas/FindAddressResponse'
     *              status:
     *                type: number
     *      400:
     *        description: Bad request
     *      404:
     *        description: Postcode not exist
     */

    this.router.get(`${this.path}/find/:postcode`, this.findAddress);
  }

  private findAddress = async (
    request: Request<{ postcode: string }, {}, {}>,
    response: Response,
    next: NextFunction
  ) => {
    const postcode = request.params.postcode;
    try {
      const addresses = await this.addressService.find(postcode);
      response.send({
        status: 200,
        addresses,
      });
    } catch (error) {
      next(new HttpException(error.response.status, error.code));
    }
  };
}

export default AddressController;
