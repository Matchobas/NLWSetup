import Fastify from 'fastify';

const app = Fastify();

app.get('/', () => {
  return "Hello NLW Setup for 2023";
});

app.listen({ port: 3333 }, () => {
  console.log("Server on")
});