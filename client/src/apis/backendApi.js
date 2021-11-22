import axios from "axios";


export default axios.create({
  baseURL: "https://burgerjoint-dt.herokuapp.com/api"
})