Vue.component('comp-child', {
    // テンプレートでvalを使用
    template: '<p id="child" class="child">ChildComponent</p>',
    // 受け取る属性名を指定
    props: ['val']
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    }
})