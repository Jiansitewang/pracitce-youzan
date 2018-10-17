let url = {
  hotLists: '/index/hotLists',
  banner: '/index/banner',
  topList: '/category/topList',
  subLists: '/category/subList',
  rank: '/category/rank',
  searchList: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',
  addCart: '/cart/add'
}

//开发环境和真实环境
// let host = ''
// let host = 'http://rapapi.org/mockjsdata/34221'
let host = 'http://rap2api.taobao.org/app/mock/7058'

for (let key in url){
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}

export default url
