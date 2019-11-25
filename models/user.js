// 用户登录注册页面
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/forum')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('success mongoose')
})


let userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    create_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/avatar-default.png'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],  // set default as -1
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        enum: [0, 1, 2],   // 1, cannot post topic, 2, cannot login
        default: 0
    }
})



module.exports = mongoose.model('User', userSchema)