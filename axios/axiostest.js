const axios =require('axios');

axios.get(' http://127.0.0.1:5000/hello')
 .then(response=>{
    console.log(response.data);
 })
 .catch(error =>{
    console.error(error);
 });

