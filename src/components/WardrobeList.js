import React, { useEffect, useState } from 'react';
import { fecthWardrobeItems } from '../services/api';

const WardrobeList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fecthWardrobeItems().then((response) => {
            setItems(response.data);
        });
    }, []);

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p>{item.color}</p>
                    <p>Tags: {item.tags}</p>
                </div>
            ))}
        </div>
    );
};

export default WardrobeList;