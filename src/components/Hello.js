import React from 'react'

const Hello = () => {
   /* return (
       <div class = dummyClass>
            <h1>hiii prayas</h1>
        </div>
        //this was the JSX implementation.
        

     
    )
    */
     /* this without JSX implementation */
     return React.createElement(
         'div'
         ,{id: 'divApp.js' , className: 'dummyClass'}
         ,React.createElement(
             'h1'
             ,null
             ,'hiii Prayas- Without using JSX'
             )
         )
}

export default Hello