import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <div>
            <h1>Our Dogs</h1>
            <ul>
                {dogs.map(d => (
                    <li>
                        <img src={d.src} alt={d.name} />
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default DogList;