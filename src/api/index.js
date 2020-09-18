import api from './api';

const GetList = (query) => api.get('/'+query);

export {
    GetList,    
}
