import Tag from "./Tag";

import inProgress from "../assets/icons_FEtask/in-progress.svg"
import todo from "../assets/icons_FEtask/To-do.svg"
import backlog from "../assets/icons_FEtask/Backlog.svg"
import done from "../assets/icons_FEtask/Done.svg"
import cancelled from "../assets/icons_FEtask/Cancelled.svg"

import noPriority from "../assets/icons_FEtask/No-priority.svg"
import lowPriority from "../assets/icons_FEtask/Img - Low Priority.svg"
import mediumPriority from "../assets/icons_FEtask/Img - Medium Priority.svg"
import highPriority from "../assets/icons_FEtask/Img - High Priority.svg"
import urgentPriority from "../assets/icons_FEtask/SVG - Urgent Priority grey.svg"
import { useStateContext } from "../hooks/useStateContext";

export default function Card ({ ticket }) {
    const { grouping, ordering } = useStateContext ()

    const statusImgMap = {
        "In progress": inProgress,
        "Backlog": backlog,
        "Todo": todo,
        "Done": done,
        "Cancelled": cancelled
    }

    const priorityImgArray = [noPriority, lowPriority, mediumPriority, highPriority, urgentPriority]

    return (
        <div className="card flex w-90percent">
            <div className="flex-col">
                <div style={{color: '#76787a'}}>
                    {ticket.id}
                </div>
                <div className="flex" style={{marginBottom: '0.5rem', marginTop: '0.5rem'}}>
                    {grouping !== "Status" && <img src={statusImgMap[ticket.status]} style={{marginRight: '0.5rem'}} />}
                    <div style={{fontWeight: "500"}}>{ticket.title}</div>
                </div>
                <div className="flex">
                    {grouping !== "Priority" && <img src={priorityImgArray[ticket.priority]} style={{width: '1.5rem'}} className="tag" />}
                    <div className="flex">
                        {ticket.tag.map (tagString => <Tag tag={tagString} />)}
                    </div>
                </div>
            </div>
            <div className="pfp">

            </div>
        </div>
    )
}