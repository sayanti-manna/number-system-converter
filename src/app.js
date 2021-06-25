const expr = require('express');
const app = new expr();
const path = require('path');
const ns = require('number-system');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3003;
const stylePath = path.join(__dirname,'../public');
const imgPath = path.join(__dirname,'../public/images');
app.use(expr.static(stylePath));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended:true}));

app.post('/', (req, res)=>{
    try{
        const userValue = req.body.number;
        const numType = req.body.from;
        //ns(binary/decimal/hexa/octal) => (2/8/10/16)
        const number = new ns(numType);
        //number.bin(user value)
        //binary = bin
        const data = number.bin(userValue);
        // console.log(data);
        //decimal = dec
        const data1 = number.dec(userValue);
        // console.log(data1);
        //oct = oct
        const data2 = number.oct(userValue);
        // console.log(data2);
        //hexa = hex
        const data3 = number.hex(userValue);
        // console.log(data3);
        res.render('index', {data, data1, data2, data3});
    }catch(e){
        res.render('BaseErrorPage', {error : e});
    }
});

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(port);
