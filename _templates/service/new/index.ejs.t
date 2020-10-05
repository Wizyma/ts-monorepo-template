---
to: services/<%= name %>/src/index.ts
---
import http from 'http';

const PORT = process.env.PORT ?? 3000;
const server = http.createServer();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
server.listen(PORT, (error) => {
  if (error) {
    return console.error(error);
  }

  console.log(`Server listening on port ${PORT}`);
});
