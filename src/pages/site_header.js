import bear from '../../public/bear.png';

const menus = [
    {
        name: 'Home',
        desc: '首页',
        route() {

        }
    },
    {
        name: 'Articles',
        desc: '文章',
        route() {
        }
    },
    {
        name: 'Projects',
        desc: '项目',
        route() {
        }
    },
    {
        name: 'About',
        desc: '关于我',
        route() {

        }
    },


]

export default {
    name: 'site_header',

    render(h) {
        return h('div', {
            staticClass: 'row no-wrap',
            style: {
                height: '50px',
                minHeight: '50px',
                maxHeight: '50px',
                margin: '0 10px',
                justifyContent: 'space-between',
                alignItems: 'center'
            }
        }, [
            this.render_title(h),
            this.render_menus(h),
            this.render_icon(h)
        ])
    },

    methods: {
        render_title(h) {
            return h('h3', {}, [
                'Bear\'s Blog'
            ])
        },
        render_menus(h) {
            return h('div', {
                staticClass: 'row'
            }, [
                menus.map(menu => h('div', {
                    staticClass: 'menu',
                    style: {
                        padding: '10px 15px',
                    }
                }, [menu.name]))
            ]);
        },
        render_icon(h) {
            return h('img', {
                staticClass: 'radius',
                attrs: {src: bear},
                style: {height: '100%'}
            })
        }
    }
}