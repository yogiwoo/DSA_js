setTimeout(()=>{
    console.log('this should be executed after 3sec set time out')
},3000)

setImmediate(()=>{
    setTimeout(()=>{
        console.log("immediate task")
    },3000)
})
