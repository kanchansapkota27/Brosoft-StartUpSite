const NavBarRoutes=[
    {
        label:'About Us',
        path:'/about',
        isActive:true,
    },
    {
        label:'Portfolio',
        path:'/portfolio',
        isActive:true,
    },
    {
        label:'Carrers',
        path:'/carrers',
        isActive:true,
    }

]

const QuickLinkRoutes=[
    {
        label:'Home',
        path:'/',
        isActive:true,
    },
    ...NavBarRoutes,
    {
        label:'Contact',
        path:'/contact',
        isActive:true,
    },

]


export {NavBarRoutes,QuickLinkRoutes}