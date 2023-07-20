// import photo from "../images/photo.png";
import star from "../images/star.png";
import "./Styles/Card.css";

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) badgeText = "SOLD OUT";
    else if (props.location === "Online") badgeText = "ONLINE";
    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img
                className="photo"
                src={require("../images/" + props.coverImg)}
                alt=""
            />
            <div className="line1">
                <img className="star" src={star} alt="" />
                <span> {props.stats.rating}</span>
                <span className="gray"> ({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}
