import add from "../assets/icons_FEtask/add.svg"
import threeDot from "../assets/icons_FEtask/3 dot menu.svg"
import Card from "./Card"
import { useEffect, useState } from "react"
import { useStateContext } from "../hooks/useStateContext"

export default function TicketList ({ icon, heading, tickets }) {
    const { ordering } = useStateContext ()
    const [sortedTickets, setSortedTickets] = useState(tickets);

    useEffect (() => {
        const sorted = [...tickets].sort((a, b) => {
            if (ordering === "priority") {
                return b.priority - a.priority;
            } else if (ordering === "title") {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

        setSortedTickets(sorted);
    }, [ordering])

    return (
        <div className="flex-col grouped-tickets">
            <div className="ticket-header w-90percent">
                <div className="flex">
                    {icon && <img src={icon} />}
                    <div style={icon && {marginLeft: '0.5rem', fontWeight: '500'}}>
                        {heading}
                    </div>
                    {tickets && <div style={{marginLeft: '0.5rem'}}>
                        {tickets.length}
                    </div>}
                </div>
                <div className="flex">
                    <img src={add} style={{marginRight: '0.5rem'}} />
                    <img src={threeDot} />
                </div>
            </div>
            {sortedTickets.map (ticket => <Card key={ticket.id} ticket={ticket} />)}
        </div>
    )
}