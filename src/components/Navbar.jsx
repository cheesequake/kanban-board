import Dropdown from "./Dropdown";
import dropdownIcon from "../assets/icons_FEtask/Display.svg"

export default function Navbar () {
    return (
        <div id="navbar">
            <Dropdown title="Display" icon={dropdownIcon} />
        </div>
    )
}