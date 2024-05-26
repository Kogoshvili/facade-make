import { registerPages, initServer } from '@kogoshvili/facade/server'

registerPages({})

initServer({
    root: __dirname,
    port: 3000,
    clientPath: '../public'
})
