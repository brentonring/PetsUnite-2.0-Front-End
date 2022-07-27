import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function EditAdoption() {

    const history = useHistory()

    const {petId} = useParams()

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

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3500/adoption/${petId}`)
            const resData = await response.json()
            setPet(resData)
        }
        fetchData()
    }, [petId])

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3500/adoption/${petId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pet)
        })

        history.push(`/adoption/${petId}`)
    }

    return(
        <main className="index-main m-5 pt-4">
            <h1 style={{textAlign: 'center'}}>Unite a Pet with a Loving Owner</h1>
            <div >
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* <HalfInput name='name' label='Pet Name' value={pet.name} /> */}
                        <div className="form-group col-sm-5 ps-5 ms-5">
                            <label className="col-form-label" htmlFor='name'>Name</label>
                            <input className="form-control" id='name' name='name' value={pet.name} onChange={e => setPet({...pet, name:e.target.value})} required />
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='animal_type'>Type of Pet</label>
                                <select className='form-select' id='animal_type' name='animal_type' value={pet.animal_type} onChange={e => setPet({...pet, animal_type:e.target.value})} required >
                                    <option selected disabled hidden>Species</option>
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
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='breed'>Breed</label>
                            <input className='form-control' id='breed' name='breed' value={pet.breed} onChange={e => setPet({...pet, breed:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='gender'>Gender</label>
                                <select className='form-select' id='gender' name='gender' value={pet.gender} onChange={e => setPet({...pet, gender:e.target.value})}>
                                    <option selected disabled hidden>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='color'>Color</label>
                            <input className='form-control' id='color' name='color' value={pet.color} onChange={e => setPet({...pet, color:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='pic'>Picture</label>
                            <input className='form-control' id='pic' name='pic' value={pet.pic} onChange={e => setPet({...pet, pic:e.target.value})}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='age'>Age</label>
                            <input className='form-control' type='number' id='age' name='age' min='1' value={pet.age} onChange={e => setPet({...pet, age:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='age_unit'>Age Unit</label>
                            <select className='form-select' id='age_unit' name='age_unit' value={pet.age_unit} onChange={e => setPet({...pet, age_unit:e.target.value})}>
                                <option selected disabled hidden>Unit of Age</option>
                                <option value='years'>Years</option>
                                <option value='months'>Months</option>
                                <option value='weeks'>Weeks</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group mx-4 px-5'>
                        <label className='col-form-label' htmlFor='bio'>Bio</label>
                        <textarea className='form-control' id='bio' name='bio' value={pet.bio} onChange={e => setPet({...pet, bio:e.target.value})}/>
                    </div>
                    <div className='form-group mx-5 px-4'>
                        <label className='col-form-label' htmlFor='health_history'>Health History</label>
                        <textarea className='form-control' id='health_history' name='health_history' value={pet.health_history} onChange={e => setPet({...pet, health_history:e.target.value})}/>
                    </div>
                    <div className="text-center pt-3 pb-4">
                        <input className="custom-btn" type="submit" value="Save" />
                    </div>
                    {/* <Submit value='Pet' /> */}
                </form>
            </div>
        </main>
    )
}

export default EditAdoption