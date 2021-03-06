const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 引入路由
const index = require('./routes/index')
const users = require('./routes/users')
const admin = require('./routes/admin')

// error handler
onerror(app)

// middlewares 中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger 日志记录
app.use(async (ctx, next) => {
  // const start = new Date()
  await next()
  // const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// routes 路由分类
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(admin.routes(), admin.allowedMethods());

// error-handling 错误捕获
// app.on('error', (err, ctx) => {
//   // console.error('server error', err, ctx)
// });

module.exports = app;
