import jwt, { Secret } from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export function verificaTokenJWT (req, res, next): void {
  const token = req.headers.token

  if (!token) { return res.status(401).json({ auth: false, message: 'Nenhum token informado.' }) }

  jwt.verify(token, process.env.SECRET as Secret, function (err, decoded) {
    if (err) { return res.status(500).send({ auth: false, message: 'Falha ao autenticar o token.' }) }

    req.userId = decoded.id
    next()
  })
}
