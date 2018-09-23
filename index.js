const Koa = require('./application')
const app = new Koa()
app.use((ctx,next) => {
    ctx.body = 'adads'
    console.log(1111)
    next()
    console.log(2222)
})
app.use((ctx, next) => {
    console.log(3333)
    next()
    console.log(4444)
})
app.listen(3333)