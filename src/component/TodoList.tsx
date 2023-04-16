import { Dispatch, SetStateAction } from "react"
import TodoItem, { TodoItemProps } from "component/TodoItem"

export default function TodoList(props: {
  items: TodoItemProps[]
  setItems: Dispatch<SetStateAction<TodoItemProps[]>>
}) {
  return (
    <div className={"p-4 bg-gray-50"}>
      <ul className={"p-4 w-1/2 mx-auto"}>
        {props.items.map((item, index) => (
          <TodoItem
            key={index}
            {...item}
            handleOnCheck={(checked) => {
              const newItems = props.items.map((value) => {
                if (value.title === item.title) {
                  value.checked = checked
                }
                return value
              })
              props.setItems(newItems)
            }}
          />
        ))}
      </ul>
    </div>
  )
}
