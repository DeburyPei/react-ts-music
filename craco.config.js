const path = require('path')

// 通过多个参数组合成绝对路径   __dirname 是当前路径
const resolve = (dir) => path.resolve(__dirname,dir)

module.exports = {
    webpack:{
        alias:{
            '@':resolve('src')
        }
    }
}
