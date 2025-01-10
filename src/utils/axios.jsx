import axios from 'axios';
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTRjOTE1YjdkYjVhZjBlNTlmOWQzYmIyZDhiYTg4ZCIsIm5iZiI6MTczNjE4MDk3NC4wODUsInN1YiI6IjY3N2MwNGVlMjVlMGU5MWM1Nzc1MTkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QdhuOvyT7UvR_c4Puapkq960ok5E8pyujZEhqOEzW_o'
    }
})
export default instance;