import axios from "axios";
const BASEURL = "https://dog.ceo/api/breeds/image/random"
const BREEDURL = "https://dog.ceo/api/breed/"


export default {
  search: function(query) {
    if(query){
    return axios.get(BREEDURL + query + "/images/random/5");
  }else{
    return axios.get(BASEURL);
    
    }
  }
};


