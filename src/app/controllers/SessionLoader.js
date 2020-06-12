import jwt from 'jsonwebtoken';

import User from "../../app/models/UserModel";
import authConfig from '../../config/auth';
  
export async function sessionUser(_, {input}) {
    const { email, password } = input;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Usuario ou senha nao corresponde a nenhum registro!")
    }

    if (!(await user.checkPassword(password))) {
      throw new Error("Usuario ou senha nao corresponde a nenhum registro!")
    }

    const { id, name } = user;

    return {
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ email }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    }),
  }
}