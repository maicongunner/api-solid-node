import { FastifyReply, FastifyRequest } from 'fastify'

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply) {
  if (!request.headers.authorization) {
    return reply.status(401).send({ message: 'Unauthorized' })
  }

  try {
    await request.jwtVerify()
  } catch (error) {
    return reply.status(401).send({ message: 'Unauthorized' })
  }
}
