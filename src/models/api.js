import schema from './'
// 获取最新新闻
export const getNews = schema.get('/api/4/news/latest', {})
