import { useStateContext } from "../hooks/useStateContext";

export default function DropdownMenuOverlay () {
    const { grouping, ordering, stateDispatch } = useStateContext ()

    const handleGroupingChange = (e) => {
        stateDispatch ({ type: 'GROUPING', payload: e.target.value })
    }

    const handleOrderingChange = (e) => {
        stateDispatch ({ type: 'ORDERING', payload: e.target.value })
    }

    return (
        <div className="overlay">
            <div className="flex">
                <div style={{width: '7rem', color: '#76787a'}}>
                    Grouping
                </div>
                <select value={grouping} onChange={handleGroupingChange}>
                    <option value={"Status"}>Status</option>
                    <option value={"User"}>User</option>
                    <option value={"Priority"}>Priority</option>
                </select>
            </div>
            <div className="flex" style={{marginTop: '1rem'}}>
                <div style={{width: '7rem', color: '#76787a'}}>
                    Ordering
                </div>
                <select value={ordering} onChange={handleOrderingChange}>
                    <option value={"priority"}>Priority</option>
                    <option value={"title"}>Title</option>
                </select>
            </div>
        </div>
    )
}