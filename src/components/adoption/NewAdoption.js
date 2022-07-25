import { useState } from "react";
import HalfInput from "../HalfInput";
import TextArea from '../TextArea';
import Submit from "../Submit";
import { useHistory } from "react-router-dom";

export default async function NewAdoption() {

    const history = useHistory()

    const [pet, setPet] = useState({
        animal_type: '',
        breed: '',
        color: '',
        gender: '',
        name: '',
        age: '',
        age_unit: '',
        health_history: '',
        bio: '',
        pic: ''
    })

    // function handleChange(e) {
    //     const {name, value} = e.target;

    //     setPet(prevInput => {
    //         return {
    //             ...prevInput,
    //             [name]: value
    //         }
    //     })
    // }

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3500/adoption`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
        })

        history.push('/adoption')
    }

    return(
        <main id="main-container">
            <h1 style={{textAlign: 'center'}}>Unite a Pet with a Loving Owner</h1>
            <div>
                <form method="POST" action="/adoption">
                    <div className="row">
                        <HalfInput name='name' label='Pet Name' value={pet.name} />
                    </div>
                    <Submit value='Pet' />
                </form>
            </div>
        </main>
    )
}