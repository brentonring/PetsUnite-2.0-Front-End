import { useState } from "react";
// import HalfInput from "../HalfInput";
// import TextArea from '../TextArea';
// import Submit from "../Submit";
import { useHistory } from "react-router-dom";

export default function NewAdoption() {

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
        // await res.json()
        // if (res.status===200) {
        //     setPet("")
        //     console.log('Pet added')
        // } else {
        //     console.log('error')
        // }

        history.push('/adoption')
    }

    return(
        <main id="main-container">
            <h1 style={{textAlign: 'center'}}>Unite a Pet with a Loving Owner</h1>
            <div >
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* <HalfInput name='name' label='Pet Name' value={pet.name} /> */}
                        <div className="form-group col-sm-6">
                            <label className="col-form-label" htmlFor='name'>Name</label>
                            <input className="form-control" id='name' name='name' value={pet.name} onChange={e => setPet({...pet, name:e.target.value})} required />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label className='col-form-label' htmlFor='animal_type'>Type of Pet</label>
                                <select className='form-select' id='animal_type' name='animal_type' onChange={e => setPet({...pet, animal_type:e.target.value})} required >
                                    <option>Dog</option>
                                    <option>Cat</option>
                                    <option>Bird</option> 
                                    <option>Rodent</option>
                                    <option>Reptile</option>
                                    <option>Fish</option>
                                    <option>Other</option>
                                </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label className='col-form-label' htmlFor='breed'>Breed</label>
                            <input className='form-control' id='breed' name='breed' onChange={e => setPet({...pet, breed:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label className='col-form-label' htmlFor='gender'>Gender</label>
                                <select className='form-select' id='gender' name='gender' onChange={e => setPet({...pet, gender:e.target.value})}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label className='col-form-label' htmlFor='color'>Color</label>
                            <input className='form-control' id='color' name='color' onChange={e => setPet({...pet, color:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label className='col-form-label' htmlFor='pic'>Picture</label>
                            <input className='form-control' id='pic' name='pic' onChange={e => setPet({...pet, pic:e.target.value})}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label className='col-form-label' htmlFor='age'>Age</label>
                            <input className='form-control' type='number' id='age' name='age' min='1' onChange={e => setPet({...pet, age:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label className='col-form-label' htmlFor='age_unit'>Age Unit</label>
                            <select className='form-select' id='age_unit' name='age_unit' onChange={e => setPet({...pet, age_unit:e.target.value})}>
                                <option value='years'>Years</option>
                                <option value='months'>Months</option>
                                <option value='weeks'>Weeks</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label' htmlFor='bio'>Bio</label>
                        <textarea className='form-control' id='bio' name='bio' onChange={e => setPet({...pet, bio:e.target.value})}/>
                    </div>
                    <div className='form-group'>
                        <label className='col-form-label' htmlFor='health_history'>Health History</label>
                        <textarea className='form-control' id='health_history' name='health_history' onChange={e => setPet({...pet, health_history:e.target.value})}/>
                    </div>
                    <div className="text-center">
                        <input className="btn btn-primary" type="submit" value="Add Adoption" />
                    </div>
                    {/* <Submit value='Pet' /> */}
                </form>
            </div>
        </main>
    )
}