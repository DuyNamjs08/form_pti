import React from 'react'

import Todo from './todo'
function TodoList({ todoList, onCheckButtonClick }) {
    return (
        <>
            {
                todoList.map((item) => <Todo key={item.id} item={item} onCheckButtonClick={onCheckButtonClick}></Todo>)
            }
        </>
    );
}

export default TodoList;