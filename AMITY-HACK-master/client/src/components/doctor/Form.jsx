import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Input from './Input';

const Form = () => {
    let { _id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true); // Track loading state

    const getUser = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/user/user/${_id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const userData = await response.json();
            setData(userData.data);
            setLoading(false); // Data is loaded
            console.log(data)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        getUser();
    }, [_id]); // Run effect whenever _id changes

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [goals, setGoals] = useState([]);
    const [allergies, setAllergies] = useState([]);
    const [isDiabetic, setIsDiabetic] = useState(false);
    const [isHighBP, setIsHighBP] = useState(false);
    const [isPregnant, setIsPregnant] = useState(false);
    const [isAsthmatic, setIsAsthmatic] = useState(false);
    

    // Set initial values based on fetched data
    useEffect(() => {
        if (!loading) {
            const { name, email, age, gender, height, weight, goals, allergies, isDiabetic, isHighBP, isPregnant, isAsthmatic } = data;
            setName(name || '');
            setEmail(email || '');
            setAge(age || '');
            setGender(gender || '');
            setHeight(height || '');
            setWeight(weight || '');
            setAllergies(allergies || []);
            setGoals(goals || []);
            setIsDiabetic(isDiabetic || false);
            setIsHighBP(isHighBP || false);
            setIsPregnant(isPregnant || false);
            setIsAsthmatic(isAsthmatic || false);
        }
    }, [data, loading]);

    if (loading) {
        return <div>Loading...</div>;
    }





    return (
      <div>
        <Navbar />
        <Input 
        _id={_id}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        age={age}
        setAge={setAge}
        gender={gender}
        setGender={setGender}
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
        goals={goals}
        setGoals={setGoals}
        allergies={allergies}
        setAllergies={setAllergies}
        isDiabetic={isDiabetic}
        setIsDiabetic={setIsDiabetic}
        isHighBP={isHighBP}
        setIsHighBP={setIsHighBP}
        isPregnant={isPregnant}
        setIsPregnant={setIsPregnant}
        isAsthmatic={isAsthmatic}
        setIsAsthmatic={setIsAsthmatic}

        />
        <Footer />
      </div>
    );
}

export default Form