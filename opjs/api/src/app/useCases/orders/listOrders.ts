import { Request, Response} from 'express';

import { Order } from '../../models/Order';

export async function listOrders (req: Request, res: Response) {
  try {
    const products = await Order.find()
      .sort({createdAt: 1})
      .populate('products.product');
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
