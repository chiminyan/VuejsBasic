var app = new Vue({
    // オプション
    el: '#app',
    data: {
        video1: false,
        video2: false
    },
    directives: {
        directive: {
            bind: function() {
                console.log('aaa')
            }
        },
        focus: {
            // 紐付いている要素がDOMに挿入されるとき
            inserted: function(el) {
                el.focus() // 要素にフォーカスを当てる
            }
        },
        video(el, binding) {
            if(binding.value !== binding.oldvalue) {
            binding.value ? el.play() : el.pause()
            }
        }
    }
})
Vue.directive('focus', {
    inserted: function(el) {
        el.focus()
    }
},
'example', {
    bind: function(el, binding) {
        console.log('v-example bind')
    },
    inserted: function(el, binding) {
        console.log('v-example inserted')
    },
    update: function(el, binding) {
        console.log('v-example update')
    },
    componentUpdated: function(el, binding) {
        console.log('v-example componentUpdated')
    },
    unbind: function(el, binding) {
        console.log('v-example unbind')
    }
})