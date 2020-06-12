import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (authHeader) => {

  if (!authHeader) {
    throw new Error('Token not provided' );
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    // req.userId = decoded.id;

    return;
  } catch (err) {
    throw new Error('Token not provided' );
  }
};
