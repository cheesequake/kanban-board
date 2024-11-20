export default function Tag ({ icon, tag }) {
    return (
        <div className="flex tag">
            {icon && <img src={icon} />}
            {tag && <div>
                {tag}
            </div>}
        </div>
    )
}