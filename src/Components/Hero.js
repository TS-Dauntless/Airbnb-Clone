import cottage from "../images/cottage.png";
import "./Styles/Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--cottage" src={cottage} alt="Cottage" />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </section>
    );
}
