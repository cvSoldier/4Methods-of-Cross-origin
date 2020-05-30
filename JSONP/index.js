$.ajax({
  url: 'http://127.0.0.1:8001/list',
  method: 'get',
  dataType: 'jsonp', // 关键
  success: res => {
    console.log(res)
  }
})