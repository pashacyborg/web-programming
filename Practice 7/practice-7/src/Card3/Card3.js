import './Card3.css';
import dino from "../assets/dino.png";
import asteroid3 from "../assets/asteroid3.png";

export function Card3 () {
    return (
        <div className="position">
        <div id="card3">
            <img className="dino" src={dino} alt="Динозавр"/>
            <img id="asteroid3" src={asteroid3} alt="Большой астероид"/>
            <label className="name">2022 QT</label>
            <label className="description">
                <label className="date">Дата...................................3 марта 2021</label>
                <label className="distance">Расстояние........................2 866 012 км</label>
                <label className="size">Размер...........................................850 м</label>
            </label>
            <label id="rate31">Оценка:</label>
            <label id="rate32">опасен</label>
            <div className="button">
                <button className="destroy">На уничтожение</button>
            </div>
        </div>
            </div>
    );
}