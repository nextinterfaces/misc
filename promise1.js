
// there was a missing catch block
new Promise((a) => {
  throw new Error('ee')
})
.then(console.log)
.catch(console.log) // the fix

// I would rather use:

async () => {
   try {
      await () => function1_block
      await () => function2_block
      await () => function3_block
      await () => throw new Error('ee')
   } catch(e){
      console.log(e)
   }
}

