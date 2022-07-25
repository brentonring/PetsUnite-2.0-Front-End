import { useState } from "react";
import HalfInput from "./HalfInput";
import Nav from './Nav';
import Footer from './Footer';
import Submit from "./Submit";

export default async function NewAdoption() {

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

    function handleChange(e) {
        const {name, value} = e.target;

        setPet(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3500/adoption`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
        })
    }

    return(
        <html>
            <head>
                <title>{html.title || 'PetsUnite'}</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="/css/style.css"></link>
                <link rel="shortcut icon" type="image/jpg" href="/images/favicon/green_house_favicon.ico"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&family=Montserrat:wght@300&display=swap"></link>
            </head>
            <body>
                <header>
                    <Nav />
                </header>
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
                <Footer />
            </body>
        </html>
    )
}