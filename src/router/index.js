import Vue from 'vue'
import VueRouter from 'vue-router'
//安装插件
Vue.use(VueRouter)

const Home = () =>import('../views/home/Home')
const Category = () =>import('../views/category/Category')
const Cart = () =>import('../views/cart/Cart')
const Profile = () =>import('../views/profile/Profile')
const Detail =() =>import('../views/detail/Detail')


const routes =[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta: {
      showTabBar: true//在路由meta对象设置一个布尔值showTabBar
    }
  },
  {
    path:'/category',
    component:Category,
    meta: {
      showTabBar: true//在路由meta对象设置一个布尔值showTabBar
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta: {
      showTabBar: true//在路由meta对象设置一个布尔值showTabBar
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta: {
      showTabBar: true//在路由meta对象设置一个布尔值showTabBar
    }
  },
  {
    path:'/detail/:iid',
    component:Detail,
    meta: {
      showTabBar: false//在路由meta对象设置一个布尔值showTabBar
    }
  }
]
const router=new VueRouter({
  routes,
  mode:'history'
})

export default router

