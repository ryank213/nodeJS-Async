// const axios = require('axios');
import axios from 'axios';

axios.get('https://gorest.co.in/public/v2/users').then(resp => {
    console.log(resp.data);
});