Vue.component('comp-child', {
    // テンプレートでvalを使用
    template: '<p>{{ val }}</p>',
    // 受け取る属性名を指定
    props: ['val']
})
var app = new Vue({
    el: '#app'
})