import app from '../../server.js'

let server
beforeEach(async () => {
  const port = 3000
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})
