import downIcon from "../assets/icons_FEtask/down.svg"
import { useStateContext } from "../hooks/useStateContext"

export default function Dropdown ({ icon, title }) {
    const { showDropdown, stateDispatch } = useStateContext ()

    const handleDropdownClick = () => {
        stateDispatch ({ type: 'DROPDOWN', payload: !showDropdown })
    }

    return (
        <div className="dropdown" onClick={handleDropdownClick}>
            <div style={{display: "flex"}}>
                {icon && <img src={icon} />}
                <div style={{marginLeft: "0.5rem"}}>
                    {title}
                </div>
            </div>
            <img src={downIcon} style={showDropdown === false ? {marginLeft: "0.5rem"} : {marginLeft: "0.5rem", rotate: "180deg"}} />
        </div>
    )
}