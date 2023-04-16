import { Dispatch, SetStateAction, useEffect, useState } from "react"

/**
 * Hook that handles interval heartbeat and modifies its state to automatically expire items, whose expiration timestamp is reached
 * @param initialItems initial items
 * @param timeoutInSeconds how long it takes for item to be removed from the state (in seconds), defaults to 20 seconds
 */
export default function useItemsWithTimeout<T extends { expirationTimestamp: number }>(
  initialItems: T[],
  timeoutInSeconds = 20,
): [T[], Dispatch<SetStateAction<T[]>>, number] {
  const [items, setItems] = useState<T[]>(initialItems)

  useEffect(() => {
    setInterval(() => {
      console.log("Interval heartbeat")
      setItems((prev) => prev.filter((item) => item.expirationTimestamp > Date.now()))
    }, 1000)
  }, [])

  return [items, setItems, timeoutInSeconds]
}
