import { TodoItemProps } from "component/TodoItem"
import TodoList from "component/TodoList"
import useItemsWithTimeout from "hooks/useItemsWithTimeout"
import Instructions from "component/Instructions"
import Form from "component/Form"

const initialItems: TodoItemProps[] = [
  {
    checked: false,
    title: "First item",
    text: "This is a first item to be done",
    expirationTimestamp: Date.now() + 5000,
  },
  {
    checked: true,
    title: "Second item",
    text: "This is a second item with some lorem ipsum",
    expirationTimestamp: Date.now() + 10000,
  },
  {
    title: "Third item",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta doloribus ex libero mollitia non quaerat quam quod. Ab amet assumenda, at, autem beatae dolore excepturi fuga fugiat illo laborum neque nihil, nulla odit quam quasi quibusdam repudiandae voluptatum? Alias aliquid, beatae facere molestias nesciunt quis quisquam! Ab doloribus, expedita.",
    expirationTimestamp: Date.now() + 12000,
  },
]

export default function HomePage() {
  const [todoItems, setTodoItems, timeoutInSeconds] = useItemsWithTimeout(initialItems)

  return (
    <div className={"space-y-4"}>
      <h1 className={"text-center"}>Slightly broken TODO list</h1>
      <Instructions />
      <Form setTodoItems={setTodoItems} timeoutInSeconds={timeoutInSeconds} />
      <TodoList items={todoItems} setItems={setTodoItems} />
    </div>
  )
}



