/* istanbul ignore file */
module.exports = ({ key }, app) => async (ctx, next) => {
  ctx.session[key] = ctx.session[key] || {}
  const msgFlashV2 = ctx.session[key]
  ctx.session[key] = {}
  function set(msg) {
    ctx.session[key] = msg

  }

  const get = () => msgFlashV2

  Object.defineProperty(ctx, 'msgFlashV2', {
    set,
    get,
    enumerable: true
  })

  ctx.request.msgFlashV2 = (type, msg) => {
    ctx.msgFlashV2 = {type, message: msg}
  }

  ;['success', 'error', 'info', 'warning'].forEach(type => {
    ctx['msgFlashV2_' + type] = msg => (ctx.msgFlashV2 = {tyep, message: msg})
  })


  await next()

  if (ctx.status === 302 && ctx.session && ctx.session[key]) {
    ctx.session[key] = msgFlashV2
  }
}