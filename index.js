const express = require('express')
const bodyParser =require('body-parser')
const app = express()
const port = 3000
const jsonParser = bodyParser.json()
app.use(express.json());
app.use(express.urlencoded());


app.post('/maxMin',(req,res)=>{
    console.log(req.body)

    let max = Math.max.apply(Math,req.body.array); 
    let min =Math.min.apply(Math,req.body.array); 

    res.send({max,min})
})


app.get('/search', (req, res) => {
        let wordsearch = "Oveke_ooAevaBx"
        let n = wordsearch.search(req.query.word);
        if(n != -1){
            res.send('1')
        }else{
            res.send('0')
        }

})



app.get('/validate/:str', (req, res) => {
    // console.log(req.params)  
    let data =req.params.str;
    console.log(data)  
       let validate='1';
       let leftArr=[];
    
    for(let i=0; i<data.length; i++) {
        if(data[i] === '(' ) {
            leftArr.push(data[i]);
        } 
        console.log(leftArr)  

        let leftArrLength = leftArr.length;
        
        if(data[i] === ')' && leftArr[leftArrLength - 1] === '('){
            leftArr.pop();
        }
        else if(data[i] === ')'){
           validate = '0'
        }    
        

    }
	res.send(validate)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})