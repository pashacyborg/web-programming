import './Card2.css';
import dino from "../assets/dino.png";
import asteroid2 from "../assets/asteroid2.png";

export function Card2 () {
    return (
        <div className="position">
        <div id="card2">
            <img className="dino" src={dino} alt="Динозавр"/>
            <img id="asteroid2" src={asteroid2} alt="Средний астероид"/>
            <label className="name">2021 ER</label>
            <label className="description">
                <label className="date">Дата.................................2 ноября 2021</label>
                <label className="distance">Расстояние........................9 331 775 км</label>
                <label className="size">Размер...........................................300 м</label>
            </label>
            <label id="rate21">Оценка:</label>
            <label id="rate22">не опасен</label>
            <div className="button">
                <button className="destroy">На уничтожение</button>
            </div>
        </div>
        </div>
    );
}