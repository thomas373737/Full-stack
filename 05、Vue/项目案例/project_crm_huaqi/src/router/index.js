import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
	roles: ['admin','editor']    control the page roles (you can set multiple roles)
	title: 'title'               the name show in sidebar and breadcrumb (recommend set)
	icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
	breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
	activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: {
                title: '首页',
                icon: 'dashboard'
            }
        }]
    },
    {
        path: '/customer-pool',
        component: Layout,
        redirect: '/customer-pool',
        name: 'customerpool',
        meta: {
            title: '客户池',
            icon: 'el-icon-film'
        },
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/customer-pool/index'),
            meta: {
                title: '客户池',
                icon: 'el-icon-film'
            }
        }]
    },
    {
        path: '/userInfo',
        component: Layout,
        hidden: true,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/userInfo/index'),
            meta: {
                title: '个人信息',
                icon: 'el-icon-user'
            },
        }]
    },
    {
        path: '/online-consumer',
        component: Layout,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/online-consumer/index'),
            meta: {
                title: '线上客户',
                icon: 'el-icon-user'
            },
        }]
    },
    {
        path: '/offline-customer',
        component: Layout,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/offline-customer/index'),
            meta: {
                title: '线下客户',
                icon: 'el-icon-user-solid'
            },
        }]
    },
    {
        path: '/product',
        component: Layout,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/product/index'),
            meta: {
                title: '产品',
                icon: 'el-icon-s-platform'
            }
        }]
    },
    {
        path: '/operation-list',
        component: Layout,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/operation-list/index'),
            meta: {
                title: '操作记录',
                icon: 'form'
            }
        }]
    },
    // {
    //     path: '/example',
    //     component: Layout,
    //     redirect: '/example/table',
    //     name: 'Example',
    //     meta: {
    //         title: '图表',
    //         icon: 'el-icon-s-help'
    //     },
    //     children: [{
    //             path: 'table',
    //             name: 'Table',
    //             component: () =>
    //                 import ('@/views/table/index'),
    //             meta: {
    //                 title: '表格',
    //                 icon: 'table'
    //             }
    //         },
    //         {
    //             path: 'tree',
    //             name: 'Tree',
    //             component: () =>
    //                 import ('@/views/tree/index'),
    //             meta: {
    //                 title: 'Tree树',
    //                 icon: 'tree'
    //             }
    //         }
    //     ]
    // },

    // {
    //     path: '/form',
    //     component: Layout,
    //     children: [{
    //         path: 'index',
    //         name: 'Form',
    //         component: () =>
    //             import ('@/views/form/index'),
    //         meta: {
    //             title: '表单',
    //             icon: 'form'
    //         }
    //     }]
    // },

    // {
    //     path: '/nested',
    //     component: Layout,
    //     redirect: '/nested/menu1',
    //     name: 'Nested',
    //     meta: {
    //         title: '父子嵌套',
    //         icon: 'nested'
    //     },
    //     children: [{
    //             path: 'menu1',
    //             component: () =>
    //                 import ('@/views/nested/menu1/index'), // Parent router-view
    //             name: 'Menu1',
    //             meta: {
    //                 title: 'Menu1'
    //             },
    //             children: [{
    //                     path: 'menu1-1',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-1'),
    //                     name: 'Menu1-1',
    //                     meta: {
    //                         title: 'Menu1-1'
    //                     }
    //                 },
    //                 {
    //                     path: 'menu1-2',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-2'),
    //                     name: 'Menu1-2',
    //                     meta: {
    //                         title: 'Menu1-2'
    //                     },
    //                     children: [{
    //                             path: 'menu1-2-1',
    //                             component: () =>
    //                                 import ('@/views/nested/menu1/menu1-2/menu1-2-1'),
    //                             name: 'Menu1-2-1',
    //                             meta: {
    //                                 title: 'Menu1-2-1'
    //                             }
    //                         },
    //                         {
    //                             path: 'menu1-2-2',
    //                             component: () =>
    //                                 import ('@/views/nested/menu1/menu1-2/menu1-2-2'),
    //                             name: 'Menu1-2-2',
    //                             meta: {
    //                                 title: 'Menu1-2-2'
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     path: 'menu1-3',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-3'),
    //                     name: 'Menu1-3',
    //                     meta: {
    //                         title: 'Menu1-3'
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'menu2',
    //             component: () =>
    //                 import ('@/views/nested/menu2/index'),
    //             name: 'Menu2',
    //             meta: {
    //                 title: 'menu2'
    //             }
    //         }
    //     ]
    // },
    {
        path: 'external-link',
        component: Layout,
        children: [{
            path: 'https://www.hqtcsz.cn/',
            meta: {
                title: '公司官网',
                icon: 'link'
            }
        }]
    },

    // 404 page must be placed at the end !!!
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router