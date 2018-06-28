
// there was a missing catch block
new Promise((a) => {
  throw new Error('ee')
})
.then(console.log)
.catch(console.log)

I would rather use:

async () => {
   try {
      throw new Error('ee')
   } catch(e){
      console.log(e)
   }
}

