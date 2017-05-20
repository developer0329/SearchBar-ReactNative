import apisauce from 'apisauce';
import Constants from '../../constants';

const create = (baseURL = 'http://localhost:3000/api') => {
  
  const api = apisauce.create({ baseURL, timeout: 10000 });
  
  function json(param){
    return JSON.stringify(param);
  }
  
  function formData(param){
    const str = [];
    for(const p in param){
      const key = encodeURIComponent(p);
      const value = encodeURIComponent(param[p]);
      str.push(`${key}=${value}`);
    }
    return str.join('&');
  }

  const searchAPI = (param) => {
    // const { key }  = param;
    // var data = json({ key });
    // return api.post('/search', data, {headers: {'Content-type': 'application/json'}});
    
    var temp_data = Constants.PRODUCTS;
    var result = [];
    for(var i = 0; i < temp_data.length; i++){
      if(temp_data[i].title.indexOf(param) >= 0){
        result.push(temp_data[i]);
      }
    }
    return result;
  }
  
  return {
    searchAPI,
  };
};

export default {
  create,
};
