import http from 'http'
import app from "./app";

async function run() {

  const hostname = process.env.HOSTNAME || '127.0.0.1'
  const port = parseInt(process.env.PORT || '3000')
  
  // const server = http.createServer((req, res) => {
  //   res.statusCode = 200
  //   res.setHeader('Content-Type', 'text/plain')
  //   res.end('API is running!')
  // })
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

run();

