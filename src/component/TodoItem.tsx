import clsx from "clsx"

export interface TodoItemProps {
  checked?: boolean
  title: string
  text?: string
  expirationTimestamp: number
}

export default function TodoItem(props: TodoItemProps & { handleOnCheck: (value: boolean) => void }) {
  const formatExpirationInSeconds = () => {
    const expiration = Math.ceil((props.expirationTimestamp - Date.now()) / 1000)

    let text = ""
    if (expiration === 1) text = "in " + expiration + " second"
    if (expiration > 1) text = "in " + expiration + " seconds"

    return text
  }

  return (
    <li
      className={clsx(
        "flex gap-4 px-6 py-6 items-center",
        "rounded shadow border border-gray-200",
        "transition-all duration-200",
        "mb-4",
        "relative",
        props.checked ? ["bg-green-700 text-white"] : ["bg-gray-100"]
      )}
    >
      <input type={"checkbox"} checked={props.checked} onChange={(e) => props.handleOnCheck(e.target.checked)} />
      <div>
        <h1 className={clsx("leading-normal text-xl shrink-0", props.checked ? ["text-white"] : ["text-gray-950"])}>
          {props.title}
        </h1>
        <p className={clsx(props.checked ? ["text-gray-100"] : ["text-gray-600"])}>{props.text}</p>
      </div>
      <p className={"text-sm font-light absolute right-0 top-0 px-1"}>Expires {formatExpirationInSeconds()}</p>
    </li>
  )
}
