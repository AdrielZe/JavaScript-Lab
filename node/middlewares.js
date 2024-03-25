// middleware pattern ( chain of responsability)

const step1 = (ctx,next) => {
    ctx.valor1 = 'mid1'
    next()
}

const step2 = (ctx,next) => {
    ctx.valor2 = 'mid2'
    next()
}

const step3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execStep = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](ctx, () => execStep(indice + 1))
    }
    execStep(0)
}

const ctx = {}
exec(ctx,step1,step2,step3)
console.log(ctx);