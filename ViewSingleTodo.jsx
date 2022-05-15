// Imports

function ViewSingleTodo(props){

    return(
        <div className="modal-box" id={props.id}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div onClick={ () => props.stateChange(false) }>Close</div>
        </div>
    )

}

export default ViewSingleTodo