// Imports
import './TodoList.css'
import {useState} from 'react'
import { doc, onSnapshot, query, collection, updateDoc, deleteDoc } from 'firebase/firestore'
import {db} from './firebase'
import ViewSingleTodo from './ViewSingleTodo'


function Todo(props) {

    const [openViewModal, setOpenViewModal] = useState(false);

    // Change status of todo - complete / uncomplete
    const changeStatus = async () => {
        // query for db
        const editQuery = doc(db, 'Todos', props.id)

        try {
            //wait for update of db
            await updateDoc(editQuery, {
                completed: true
            })

        } catch (err) {
            
            alert(err)
        
        }
    }

    // Delete todo
    const deleteTodo = async () => {
        // query for db
        const deleteQuery = doc(db, 'Todos', props.id)

        try{
            // wait for deletion of todo
            await deleteDoc(deleteQuery)

        } catch (err) {

            alert(err)

        }

    }

    return(
        <div>
            <h3>{props.title}</h3>
            <p>ID: <code>{props.id}</code></p>
            <p>{props.description}</p>

            <div>
            <div onClick={deleteTodo}>Delete</div>
                <div onClick={() => setOpenViewModal(true)}>View</div>
            </div>

            {openViewModal && <ViewSingleTodo stateChange={setOpenViewModal} title={props.title} id={props.id} description={props.description} /> }

        </div>
    )

}

export default Todo;