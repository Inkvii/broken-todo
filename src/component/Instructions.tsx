export default function Instructions() {
  // Attention: There is no problem here, you can ignore this component entirely
  return (
    <section className={"shadow max-w-2xl p-6 bg-gray-100 rounded space-y-4 mx-auto "}>
      <article>
        <h2 className={"text-2xl"}>Expected behaviour:</h2>
        <ul className={"list-disc list-inside child:pl-4"}>
          <li>
            Adding new item can be done by clicking on button <code>ADD NEW ITEM</code> or hitting <code>ENTER</code>{" "}
            key after filling the textfield
          </li>
          <li>
            New todo item contains <code>title</code>, <code>text</code>, whether it is <code>checked</code> and
            expiration timestamp (see <code>TodoItemProps</code>)
          </li>
          <li>Adding new item should clear all text fields</li>
          <li>
            Expired todo items will be removed automatically using <code>useItemsWithTimeout</code> hook. Logic about
            whether item is expired will be handled there. Check for expired items should occur exactly in 1000ms
            interval.
          </li>
          <li>
            Expiration timestamp for each todo item is measured as difference between current timestamp and{" "}
            <code>expirationTimestamp</code> of the todo item. Each todo item card will show expiration time using{" "}
            <code>Math.ceiling</code> function in relative time as number of <b>seconds</b> before it expires. <br />
            Example: current timestamp is 0, expirationTimestamp is 3840, text on the todo item card will say:
            <i>Expires in 4 seconds</i>)
          </li>
          <li>
            Individual items can be checked/unchecked by clicking on the checkbox input. Item&apos;s style will change
            when checked property is changed.
          </li>
          <li>
            Each todo item should be treated as <b>unique</b>. There is no shared behaviour.
          </li>
          <li>Add new item textfield will be focused when this page is shown</li>
        </ul>
      </article>
      <article>
        <h2 className={"text-2xl"}>Instructions:</h2>
        <ul className={"list-disc list-inside child:pl-4"}>
          <li>Look through the code and fix any issues you find.</li>
          <li>
            Alter the code in a way that user can also input <code>text</code> to the todo item.
          </li>
          <li>Change expiration timeout for user created todo items to 5 seconds</li>
        </ul>
      </article>
    </section>
  )
}
