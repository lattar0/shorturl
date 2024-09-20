import fastify from 'fastify';

const server = fastify();

const PORT = 3000

server.get('/ping', async (req, res) => {
  return 'pong\n'
});

server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1)
  }

  console.log(`Server listening at ${address}`);
});
