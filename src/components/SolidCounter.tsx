import { createSignal } from "solid-js"

const SolidCounter = props => {
  const [count, setCount] = createSignal(0)

  return (
    <div>
      <div>Hello, the count is: {count()}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <div>{props.title}</div>
      <button onClick={() => setCount(count() + 1)}>Increae Count</button>
    </div>
  )
}
export default SolidCounter