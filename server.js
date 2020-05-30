let app = require('express')()

app.listen(8001, _ => {
  console.log('on!')
})

app.get('/list', (req, res) => {
  let { callback = () => {} } = req.query
  let data = {
    code: 2000,
    message: 'cvSoldier'
  }
  res.send(`${callback}(${JSON.stringify(data)})`)
})

// const CORS = {
//   ORIGIN: 'http://127.0.0.1:8181',
//   METHODS: 'PUT, POST, GET, DELETE, OPTIONS, HEAD',
//   HEADERS: 'Content-Type, Content-Length, Authorization, Accept, Cvsoldier-Header',
//   CREDENTIALS: true
// }

// app.use((req, res, next) => {
//   const {
//     ORIGIN,
//     METHODS,
//     HEADERS,
//     CREDENTIALS
//   } = CORS
//   res.header('Access-Control-Allow-Origin', ORIGIN)
//   res.header('Access-Control-Allow-Credentials', CREDENTIALS)
//   res.header('Access-Control-Allow-Headers', HEADERS)
//   res.header('Access-Control-Allow-Methods', METHODS)
//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Max-Age', 0)
//     res.end() // OPTIONS请求不做任何处理
//   } else {
//     next()
//   }
// })

app.put('/list', (req, res) => {
  let data = {
    code: 2000,
    message: 'cvSoldier'
  }
  res.send(data)
})

app.post('/proxy', (req, res) => {
  let data = {
    code: 2000,
    message: 'cvSoldier'
  }
  res.send(data)
})