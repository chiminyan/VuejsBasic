Vue.component('comp-child', {
    template: '<div>ここにスロットを埋め込む → <slot></slot></div>',
})
var app = new Vue({
    el: '#app'
})