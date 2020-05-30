import axios from 'axios'

axios.post('/proxy', {},  {
  headers: {'Cvsoldier-Header': 'COOOOOOOOORS'}
}).then(result => {
  console.log(result);
})
