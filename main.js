var app = new Vue({
    // オプション
    el: '#app',
    data: {
        price: 19800,
        message: "Hello!",
        foo: "aaa",
    },
    filters: {
        localeNum: function(val) {
            return val.toLocaleString()
        },
        filter: function(message, foo, num) {
            console.log(message, foo, num)
        },
        // 小数点以下を第2位に丸めるフィルタ
        round: function(val) {
            return Math.round(val * 100) / 100
        },
        // 度からラジアンに変換するフィルタ
        radian: function(val) {
            return val * Math.PI / 180
        }
    }
})
Vue.filter('localeNum', function(val) {
    return val.toLocaleString()
})