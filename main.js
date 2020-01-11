var state = { count: 0 }
var app = new Vue({
    // オプション
    el: '#app',
    data: {
        // フォームの入力と紐付けるデータ
        budget: 300,
        // 表示件数
        limit: 2,
        // もとになるリスト
        list: [
            { id: 1, name: 'りんご', price: 100 },
            { id: 2, name: 'ばなな', price: 200 },
            { id: 3, name: 'おれんじ', price: 300 },
            { id: 4, name: 'めろん', price: 500 }
        ],
        order: false,
        filterType: 'all',
        width: 800,
        height: 600
    },
    computed: {
        matched: function() {
            return this.list.filter(function(el) {
                return el.price <= this.budget
            }, this)
        },
        // sortedを新しく追加
        sorted: function() {
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },
        // matchedで返ったデータをlimit件返す算出プロパティ
        limited: function() {
            return this.sorted.slice(0, this.limit)
        },
        computedData: function() { return Math.random() },
        // 算出プロパティhalfWidthを定義
        halfWidth: {
            get: function() { return this.width / 2 },
            // halfWidthの2倍の数値をwidthに代入する
            set: function(val) { this.width = val * 2 },
        },
        halfHeight: function() {
            return this.height / 2
        },
        // 「width × height」の中心座標をオブジェクトで返す
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        }
    },
    methods: {
        methodsData: function() { return Math.random() }
    },
    watch: {
        list: {
            handler: function(newVal, oldVal) {
                // listが変化したときに行いたい処理
            },
        deep: true,
        immediate: true
        }
    }
    })