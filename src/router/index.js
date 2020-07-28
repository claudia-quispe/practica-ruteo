import Vue from 'vue';
import VueRouter from 'vue-router';

// importamos los componentes que deseamos que tengas su propia
import Ingreso from '../components/Ingreso';
import Home from '../components/Home';  // definimos nuestro componente
import Categoria from '../components/Categoria';
import Restoran from '../components/Restoran';
import PagNotFound from '../components/PagNotFound';
import AcercaDe from '../components/AcercaDe';
import Revisiones from '../components/Revisiones';
import Imagenes from '../components/Imagenes';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    //añadimos nuestras rutas
    routes: [
        {
            path: '/', 
            component: Home,
            // acá añadimos rutas nombradas
        },
        {
            path: '/login', // acá definimos nombre de ruta 
            component: Ingreso, // acá cargamos nuestro componente
            name: 'ingreso', // le damo un nuevo apodo a nuestra ruta
            props:true
        },
        {
            path: '/category/:nombrecategoria', //mostrara una lista
            component: Categoria,
            name: 'categoria',
            props: true
        },
        {
            path: '/:yumyum', // :nombre -> ruta dinamica, depende de lo que uno escriba en la url
            component: Restoran,
            name: 'restoran',
            props: true,
            //aqui van nuestras rutas anidadas
            children: [
                {
                    path: '',
                    component: AcercaDe,
                    name: 'acercade',
                    props: true
                },
                {
                    path: 'reviews',
                    component: Revisiones,
                    name: 'revisiones',
                    props: true
                },
                {
                    path: 'images',
                    component: Imagenes,
                    name: 'imagenes',
                    props: true
                }
            ]
        },
        {
            path: '*',
            component: PagNotFound,
            name: 'pagnotfound'
        }
    ]
})