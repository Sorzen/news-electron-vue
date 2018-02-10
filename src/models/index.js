import apischema from 'apischema'
import axios from 'axios/dist/axios.min'

let baseURL = 'http://news-at.zhihu.com'
const timeout = 30000
const http = axios.create({ baseURL, timeout })

const schema = apischema({ http })

export default schema
