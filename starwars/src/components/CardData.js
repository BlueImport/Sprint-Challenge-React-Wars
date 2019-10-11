import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import {Container, Row} from 'bootstrap/dist/css/bootstrap.min.css';

 function CardData () {

    const [person, setPerson] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const starWarsData = await axios.get('https://swapi.co/api/people/');
                console.log(starWarsData);
                setPerson(starWarsData.data.results);
            }catch(err) {
                console.log(err);
            }
        }

        fetchData();
    }, [])

    console.log(person);

    return (
        <Container>
            <Row>
            {person.map((char, index) => {
                return (
                <StarWarsCard
                    key = {index}
                    name = {char.name} 
                    gender = {char.gender}
                    hair = {char.hair_color}
                    eyes = {char.eye_color}
                    birthYear = {char.birth_year}
                    species = {char.species}

                />
                )
            })}
            </Row>
        </Container>
    );
} 
export default CardData;