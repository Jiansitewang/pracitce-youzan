let url = {
  hotLists: '/index/hotList'
}

//开发环境和真实环境
// let host = ''
let host = 'http://rapapi.org/mockjsdata/34221'

for (let key in url){
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}

export default url
