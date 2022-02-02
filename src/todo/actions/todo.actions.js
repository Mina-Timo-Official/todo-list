export function addTodo(Todo){
    return {
        type: 'ADD_TODO',
        payload: Todo
    }
}

export function openCloseTodoPupup(){
    return {
        type: 'CHANGE_VISBILE'
    }
}