// imports
import { useState } from "react"
import { db } from "./firebase"
import { collection, serverTimestamp, addDoc } from "firebase/firestore"

function CreateTodo(props){

    const[newTodoTitle, setNewTodoTitle] = useState('')
    const[newTodoDescription, setNewTodoDescription] = useState('')

    const createNewTodo = async (e) => {

        e.preventDefault()
        
        try{
            await addDoc(collection(db, 'Todos'), {
                Title: newTodoTitle,
                Description: newTodoDescription,
                Created: serverTimestamp(),
                Completed: false
            })
            props.stateChange(false)
        } catch(e) {
            alert(e)
        }

    }

    return(

        <div className='modal-box'>
            <h1>Create New Todo Modal !!!</h1>

            <form onSubmit={createNewTodo}>
                <label>
                    Title:
                    <input type='text' name='title' onChange={(e) => setNewTodoTitle(e.target.value.toUpperCase())}></input>
                </label>
                <label>
                    Description:
                    <textarea onChange={(e) => setNewTodoDescription(e.target.value)} placeholder='Enter todo description' value={newTodoDescription} ></textarea>
                </label>
                <button type='submit'>Save</button>
            </form>

            <div onClick={ () => props.stateChange(false) }>
                Close
            </div>
        </div>

    )

}

export default CreateTodo