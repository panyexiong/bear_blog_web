import site_header from "@/pages/site_header";

export default {
    name: 'home',
    render(h) {
        return h('div',{
            staticClass: '',
        },[
            this.render_header(h),
            this.render_content(h),
            this.render_footer(h),
        ])
    },
    methods: {
        render_header(h) {
            return h(site_header,{},[])
        },
        render_content(h) {

        },
        render_footer(h) {

        }
    }
}