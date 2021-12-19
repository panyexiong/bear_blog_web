 export default [
     {
         path: '/',
         name: 'home',
         component: () => import('../pages/home')
     },
     {
         path: '*',
         redirect: {name: 'home'}
     }
 ]