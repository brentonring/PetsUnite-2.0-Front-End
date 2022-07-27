import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function NewService() {

    const history = useHistory()

    const [service, setService] = useState({
        animal_type: '',
        breed: '',
        service: '',
        gender: '',
        name: '',
        age: '',
        age_unit: '',
        health_history: '',
        details: '',
        pic: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`${process.env.REACT_APP_SERVER_URL}services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })

        history.push('/services')
    }

    return(
        <main className="index-main m-5 pt-4">
            <h1 style={{textAlign: 'center'}}>Unite Your Pet with People Who Want to Help</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='service'>Service</label>
                            <input className='form-control' id='service' name='service' onChange={e => setService({...service, service:e.target.value})} required/>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className= 'col-form-label' htmlFor='name'>Pet Name</label>
                            <input className='form-control' required id='name' name='name' onChange={e => setService({...service, name:e.target.value})}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='animal_type'>Type of Pet</label>
                                <select className='form-select' id='animal_type' name='animal_type' onChange={e => setService({...service, animal_type:e.target.value})}>
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
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='breed'>Breed</label>
                            <input className='form-control' id='breed' name='breed' onChange={e => setService({...service, breed:e.target.value})}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='gender'>Gender</label>
                                <select className='form-select' id='gender' name='gender' onChange={e => setService({...service, gender:e.target.value})}>
                                    <option selected disabled hidden>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='pic'>Picture</label>
                            <input className='form-control' id='pic' name='pic' onChange={e => setService({...service, pic:e.target.value})}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='age'>Age</label>
                            <input className='form-control' type='number' id='age' name='age' min='1' onChange={e => setService({...service, age:e.target.value})} />
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='age_unit'>Age Unit</label>
                                <select className='form-select' id='age_unit' name='age_unit' onChange={e => setService({...service, age_unit:e.target.value})}>
                                    <option selected disabled hidden>Unit of Age</option>
                                    <option value='years'>Years</option>
                                    <option value='months'>Months</option>
                                    <option value='weeks'>Weeks</option>
                                </select>
                        </div>
                    </div>
                    <div className='form-group mx-4 px-5'>
                        <label className='col-form-label' htmlFor='details'>Details</label>
                        <textarea className='form-control' id='details' name='details' onChange={e => setService({...service, details:e.target.value})}/>
                    </div>
                    <div className='form-group mx-4 px-5'>
                        <label className='col-form-label' htmlFor='health_history'>Health History</label>
                        <textarea className='form-control' id='health_history' name='health_history' onChange={e => setService({...service, health_history:e.target.value})}/>
                    </div>
                    <div className='text-center pt-3 pb-4'>
                        <input className='custom-btn' type='submit' value='Add Service' />
                    </div>   
                </form>
            </div>
        </main>    
    )
}