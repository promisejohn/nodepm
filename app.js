const http = require('http');
const port = 3000;
const server = http.createServer((req,res) => {
    console.log(res.url);
    res.end('Hello World from app.js to test webhook success!!');
});

server.listen(port, (err)=>{
    if(err) { 
       console.log('sth went wrong', err);
       return false;
    }
    console.log(`Server is running on port ${port}`);
});
