import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function NewEvent() {

    const history = useHistory()

    const [event, setEvent] = useState({
        event_name: '',
        date: '',
        start_time: '',
        end_time: '',
        location: '',
        address: '',
        city: '',
        state: '',
        event_details: '',
        pic: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:3500/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })

        history.push('/events')
    }

    return(
        <main className="index-main m-5 pt-4">
            <h1 style={{textAlign: 'center'}}>Unite Pet Lovers with Your Event</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='event_name'>Event Name</label>
                            <input className='form-control' id='event_name' name='event_name' onChange={e => setEvent({...event, event_name:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='date'>Date</label>
                            <input className='form-control' id='date' name='date'  onChange={e => setEvent({...event, date:e.target.value})}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='start_time'>Start Time</label>
                            <input className='form-control' id='start_time' name='start_time' onChange={e => setEvent({...event, start_time:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='end_time'>End Time</label>
                            <input className='form-control' id='end_time' name='end_time' onChange={e => setEvent({...event, end_time:e.target.value})}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='location'>Location</label>
                            <input className='form-control' id='location' name='location' placeholder='e.g. PetSmart, Reedy Creek Dog Park, etc.' onChange={e => setEvent({...event, location:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='address'>Address</label>
                            <input className='form-control' id='address' name='address' onChange={e => setEvent({...event, address:e.target.value})}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city' onChange={e => setEvent({...event, city:e.target.value})}/>
                        </div>
                        <div className='form-group col-sm-5 ps-5 ms-5'>
                            <label className='col-form-label' htmlFor='state'>State</label>
                            <select className='form-select' id='state' name='state' onChange={e => setEvent({...event, state:e.target.value})}>
                                <option selected disabled hidden>Choose State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group mx-4 px-5'>
                        <label className='col-form-label' htmlFor='event_details'>Details</label>
                        <textarea className='form-control' id='event_details' name='event_details' onChange={e => setEvent({...event, event_details:e.target.value})}/>
                    </div>
                    <div className='form-group mx-4 px-5'>
                        <label className='col-form-label' htmlFor='pic'>Picture (optional)</label>
                        <input className='form-control' id='pic' name='pic' onChange={e => setEvent({...event, pic:e.target.value})}/>
                    </div>
                    <div className='text-center pt-3 pb-4'>
                        <input className='custom-btn' type='submit' value='Add Event' />
                    </div>       
                </form>
            </div>
        </main>
    )
}