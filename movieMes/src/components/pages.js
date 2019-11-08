const template = `
<div class="pager">
<a @click="changePage(1)" class="pager-item " :class="{disabled: current === 1}">首页</a>
<a @click="changePage(current - 1)" class="pager-item" :class="{disabled: current === 1}">上一页</a>  
<a class="pager-item" @click="changePage(item)" :class="{active: item === current}" v-for="item in numbers">
    {{item}}
</a>
<a @click="changePage(current + 1)"class="pager-item" :class="{disabled: current === pageNumber}">下一页</a>
<a @click="changePage(pageNumber)"class="pager-item" :class="{disabled: current === pageNumber}">尾页</a> 
<span class="pager-text">
<i>{{current}}</i> 
/
<i>{{pageNumber}}</i></span></div>
`;

export default {
    template,
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            required: true
        },
        pageSize: {
            type: Number,
            default: 10
        },
        panelNumber: {
            type: Number,
            default: 5
        }
    },
    computed: {
        pageNumber() { //总页数
            return Math.ceil(this.total / this.pageSize);
        },
        numbers() {
            var min = this.current - Math.floor(this.panelNumber / 2);
            if (min < 1) {
                min = 1;
            }
            var max = min + this.panelNumber - 1;
            if (max > this.pageNumber) {
                max = this.pageNumber;
            }
            const arr = [];
            for (let i = min; i <= max; i++) {
                arr.push(i);
            }
            console.log(arr);
            return arr;

        }
    },
    methods: {
        changePage(newPage) {
            if (newPage < 1) {
                newPage = 1;
            } else if (newPage > this.pageNumber) {
                newPage = this.pageNumber
            }
            this.$emit("input", newPage);
        }
    }
}