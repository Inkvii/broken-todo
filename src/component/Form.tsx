import { Dispatch, SetStateAction, useState } from "react"
import { TodoItemProps } from "component/TodoItem"

export default function Form(props: {
  setTodoItems: Dispatch<SetStateAction<TodoItemProps[]>>
  timeoutInSeconds: number
}) {
  const [name, setName] = useState("")

  return (
    <div className={"w-2/3 mx-auto child:w-full flex flex-col gap-2"}>
      <InputWithLabel label={"Add new item"} value={name} setValue={setName} />
      <button
        onClick={() => {
          const todoItem: TodoItemProps = {
            title: name,
            expirationTimestamp: Date.now() + props.timeoutInSeconds * 1000,
          }
          props.setTodoItems((prev) => [...prev, todoItem])
        }}
      >
        Add new item
      </button>
    </div>
  )
}

const InputWithLabel = (props: { label: string; value: string; setValue: (newValue: string) => void }) => {
  return (
    <div className={"flex flex-col"}>
      <label>{props.label}</label>
      <input type={"text"} value={props.value} autoFocus={true} onChange={(e) => props.setValue(e.target.value)} />
    </div>
  )
}
