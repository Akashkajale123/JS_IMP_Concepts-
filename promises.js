const promiseOne = new Promise(function(resolve,reject){
    //  Do an async task
    // Db calls, network calls
    setTimeout(function(){
        resolve();
        console.log('Async task is complete');
       
    },1000)
    
});

promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
        console.log('Async task 2')
    },1000)
}).then(function(){
    console.log('Async 2 resolve');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({username:'akash',password:"12345"})
        }else{
            reject('Error something went wrong')
        }
    },1000)
})

 promiseFour.then((user)=>{
    console.log(user)
    return (user.username,user.password)
}).then((username,password)=>{
    console.log(username,password)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log('The promise is either resolve or rejected'))

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: 'javascript', password: "12345" })
        } else {
            reject('Error JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive; // Use lowercase "promiseFive" here
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();

async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(responce);
    const data=await response.json();
    console.log(data);
   } catch (error) {
    console.log("E :",error)
   }
}
getAllUsers();///



fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('Error :',error)
})
