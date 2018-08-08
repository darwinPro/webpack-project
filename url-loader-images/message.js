import renderToDom from './render-to-dom.js'
import makeMessage from './make-message.js'
const waitTiem= new Promise((todoOk, todoMal)=>{
    setTimeout(()=>{
        todoOk('han pasado 3 segundos')
    },3000)
})
module.exports = {
    firsrMessage:  "hola desde m,odulo",
    delayedMessage: async () =>{
        const message = await waitTiem;
        console.log(message)
        
        renderToDom(makeMessage(message))
    }
}