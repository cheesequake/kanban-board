import { useContext } from "react"
import { StateContext } from "../contexts/StateContext"

export const useStateContext = () => {
    const context = useContext (StateContext)

    if (!context) {
        throw Error ('useContext must be used inside a provider')
    }

    return context
}