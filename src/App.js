import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";
import "./App.css";

function App() {
    const card = data.map((item) => <Card key={item.id} {...item} />);
    return (
        <>
            <Navbar />
            <Hero />
            <section className="card-list">{card}</section>
        </>
    );
}

export default App;
