// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Image as VanImage, Icon } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(VanImage)
Vue.use(Icon)
