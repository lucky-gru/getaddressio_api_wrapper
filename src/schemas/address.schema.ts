/**
 * @openapi
 * components:
 *  schemas:
 *    Address:
 *      type: object
 *      properties:
 *        line1:
 *          type: string
 *        line2:
 *          type: string
 *        line3:
 *          type: string
 *        postcode:
 *          type: string
 *        town:
 *          type: string
 *        country:
 *          type: string
 *    FindAddressResponse:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/Address'
 */
