const app = Vue.createApp({
    data() {
        return {
            a: '',
            b: '',
            c: '',
        }
    },
    computed: {
        delta() {
            return parseFloat(this.b ** 2 - 4 * this.a * this.c).toFixed(2)
        },
        p() {
            return parseFloat((this.b * -1) / (2 * this.a)).toFixed(2)
        },
        q() {
            return parseFloat(((this.b ** 2 - 4 * this.a * this.c) * -1) / (4 * this.a)).toFixed(2)
        },
        x1() {
            if(this.b ** 2 - 4 * this.a * this.c>=0) {
                return parseFloat(((this.b * -1) + ((this.b ** 2 - 4 * this.a * this.c) ** 0.5)) / (2 * this.a)).toFixed(2)
            } else {
                return "Ø"
            }
        },
        x2() {
            if(this.b ** 2 - 4 * this.a * this.c>=0) {
                return parseFloat(((this.b * -1) - ((this.b ** 2 - 4 * this.a * this.c) ** 0.5)) / (2 * this.a)).toFixed(2)
            } else {
                return "Ø"
            }
        },
        direction() {
            if(this.a>0) {
                return 'Ramiona skierowane w górę'
            } else if(this.a<0) {
                return 'Ramiona skierowane w dół'
            } else {
                return ''
            }
        },
    },
    methods: {
        changeTheme () {
            const element = document.getElementById('body')
            element[0].classList.toggle("darkTheme");
        },
    }
    
})

app.mount('#square')