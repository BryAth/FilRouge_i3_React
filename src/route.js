import About from "./containers/pages/about/about";
import NotFound from "./containers/pages/errors/not-found";
import Home from "./containers/pages/home/home";


export const routes = [

        {
            path : '/',
            element : <Home />
        },
        {
            path : '/about',
            element : <About />
        },
        {
            path : '*',
            element : <NotFound />
        }

                        ];

