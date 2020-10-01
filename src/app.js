import api from '@amacl/roboc-api';
import { apiOptions } from './config';
import routes from './routes';

const bootstrap = () => {
    api(apiOptions,(router, app) => {
        app.use(function(req, res, next) {
            next();
        }); 
        
        routes(router, app);

        return router;
    });
};

export {
    bootstrap,
}