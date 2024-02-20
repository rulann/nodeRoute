console.log("start server")
const http  = require('http');
const express = require('express')

var app = express()

app.get('/', function(req, res){
    res.send('start server')
})

app.get('/fact/:num', function(req, res){
    res.json("fact is " + fact(req.params.num))
})

app.get('/multiply/:num', function(req, res){
    res.json('multiply: ' +  multiply(req.params.num))
})

app.get('/fib/:num', function(req, res){
    res.json('fib: ' + fib(req.params.num))
})

app.get('/sum/:num',  function(req, res) {
    res.json('comulative sum: '+ sum(req.params.num))
})

app.get('/string/:word', function(req, res){
    res.json(backward(req.params.word))
})


function fact(n) {
    if ( n == 0 ) return 1;
    else return n * fact(n - 1);
    }

function multiply(num) {
    let ans = [] 
    for (let i = 1; i <= 10; i++){
        let m = num *i
       ans.push(m)
    }      
    return ans
}

function fib(num){
    if (num <= 1)
        return num
    else
        return fib(num - 1) + fib(num - 2);
}

function sum(num){
    let ans = 0
    for (let i = 0; i <= num ; i++ ){
        ans += i
    }
    return ans
}

function backward(word){
    let reverse_word= word.split("").reverse().join("")

    if (reverse_word == word)
        return 'true'
    else 
        return 'false'
}

    var server = app.listen(7000, function(){
        var host = server.address().address
        var port = server.address().port;
    })