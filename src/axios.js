import axios from "axios";

    // the base url is to make requests to the movie database
    // then we can use instance.get('/append remaining url')
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;