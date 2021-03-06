const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },

        {
            path: '/table',
            meta: {
                title: ''
            },
            component: (resolve) => require(['./views/table.vue'], resolve)
        },
                {
                    path: '/charts',
                    meta: {
                        title: ''
                    },
                    component: (resolve) => require(['./views/charts.vue'], resolve)
                }
];
export default routers;