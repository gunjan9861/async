// const getTodos = (resource)=>{
//     return new Promise ((resolve,reject)=>{


//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange',() =>{
//             // console.log(request,request.readyState)
//             if(request.readyState === 4 && request.status === 200){
//                 // console.log(request, request.responseText)
//                 const data = JSON.parse(request.responseText)
//                 // callback(undefined,data)
//                 resolve(data)
//             }
//             else if(request.readyState === 4){
//                 // console.log("could not fetch the data")
//                 // callback('could not fetch data',undefined)
//                 reject('error getting the resource')
//             }
//         })
    
//     request.open('GET',resource);
    
//     request.send();

//     })


// }
// getTodos('todos/gunjan.json').then(data=>{
//     console.log('promise 1 resolved',data)
//     return getTodos('todos/todos.json')


// }).then(data=>{
//     console.log('promise 2 resolved',data)
// }).catch(err=>{
//     console.log("rejected",err)
// })



//fetch api

// fetch('todos/gunjan.json').then(response=>{
//     console.log('resoloved',response)
//     return response.json()

// }).then(data=>{
//     console.log(data)
// }).catch(err =>{
//     console.log('rejected',err)
// })


//async and await

const getTodos = async () =>{

   const response=await fetch('todos/gunjan.json')

  if(response.status !== 200){
    throw new Error('cannot fetch the data')
  }
   const data = await response.json()
   return data
}

getTodos()
.then(data=> console.log('resolved',data))
.catch(err=> console.log('rejected',err.message))