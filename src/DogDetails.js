import React from 'react';
import { useParams, Link } from 'react-router-dom';

function DogDetails({ dogs }) {
    const { name } = useParams();

    const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <p>Age: {dog.age}</p>
            <h3>Facts</h3>
            <ul>
                {dog.facts.map(f => (
                    <li>{f}</li>
                ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
}

export default DogDetails;