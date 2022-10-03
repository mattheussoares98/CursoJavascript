function pass1(ctx, next) {
    ctx.middle1 = "middle1"
    next()
}

function pass2(ctx, next) {
    ctx.middle2 = "middle2"
    next()
}

const pass3 = ctx => ctx.middle3 = "middle3"


const next = (ctx, ...functions) => {
    const exec1 = index => {
        functions[index](ctx, () => exec1(index + 1))
    }
    exec1(0)
}

const ctx = {}
next(ctx, pass1, pass2, pass3)
console.log(ctx)