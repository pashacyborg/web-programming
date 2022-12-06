import './Card1.css';
import dino from "../assets/dino.png";
import asteroid1 from "../assets/asteroid1.png";

export function Card1 () {
    return (
        <div className="position">
            <div id="card1">
                <img className="dino" src={dino} alt="Динозавр"/>
                <img id="asteroid1" src={asteroid1} alt="Маленький астероид"/>
                <label className="name">2021 FQ</label>
                <label className="description">
                    <label className="date">Дата...........................12 сентября 2021</label>
                    <label className="distance">Расстояние.......................7 235 024 км</label>
                    <label className="size">Размер............................................85 м</label>
                </label>
                <label id="rate11">Оценка:</label>
                <label id="rate12">не опасен</label>
                <div className="button">
                    <button className="destroy">На уничтожение</button>
                </div>
            </div>
        </div>
    );
}