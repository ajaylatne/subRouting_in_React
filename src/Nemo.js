import React,{ memo } from 'react'

function Nemo( { todo } ) {
  console.log('nemo')

  return (
    <div>
      {
        todo.map((todo1, index)=>{return(<p key={ index }> { todo1+index } </p>)})
      }
      
    </div>
  )
}

export default Nemo
