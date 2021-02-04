import React, { useState } from 'react';
import firebase from './firebase'

const WeatherInfoCard = ({ info }) => {
    const [city, setCity] = useState(info.city)
    const [condition, setCondition] = useState(info.condition)

    const onUpdate = () => {
        const db = firebase.firestore()
        db.collection('weatherInfo').doc(info.id).set({ ...info, city, condition })
    }

    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('weatherInfo').doc(info.id).delete()
    }

    return (
        <div>
            <input className="p-2" value={city} onChange={(e) => { setCity(e.target.value) }} />
            <input className="p-2" value={condition} onChange={(e) => { setCondition(e.target.value) }} />
            <button className="btn btn-secondary m-2" onClick={onUpdate}>Update</button>
            <button className="btn btn-danger m-2" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default WeatherInfoCard;