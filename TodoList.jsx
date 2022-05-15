import { useEffect, useState } from 'react'
import { onSnapshot, orderBy, query, collection } from 'firebase/firestore'
import Todo from './Todo'
import CreateTodo from './CreateTodo'
import {db} from './firebase'

function TodoList() {
    // Use state
    const [todos, setTodos] = useState([]);
    const [openCreateModal, setOpenCreateModal] = useState(false);

    // Use effect
    useEffect( () => {
        
        const todoCollectionRef = query(collection(db, 'Todos'))
        
        onSnapshot(todoCollectionRef, (snapshot) => {
            setTodos(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return(
        <div>
            <h1>TodoList</h1>
            <div>
                { // map out the todos collection using .map & Todo component
                todos.map((todo) => (
                    <Todo
                        key = {todo.id}
                        id = {todo.id}
                        title = {todo.data.Title}
                        description = {todo.data.Description}
                        completed = {todo.data.Completed}
                    />
                ))
                }
            </div>

            <div onClick={ () => setOpenCreateModal(true) }>
                Create Todo
            </div>
            
            {openCreateModal && <CreateTodo stateChange={setOpenCreateModal} />}

        </div>
    )

}

export default TodoList;