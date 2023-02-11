const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/customers', (req, res) => {
res.send([{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김완준2',
  'birthday': '961212',
  'gender': 'male',
  'job': '억만장자'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍찬의',
  'birthday': '961212',
  'gender': 'male',
  'job': '부자'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '조영민',
  'birthday': '961212',
  'gender': 'male',
  'job': '평범'
}]
  
)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })