import React, { useState } from 'react'

export default function Form() {

    var [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        address2: '',
        city: '',
        province: 'not selected',
        postal_code: '',
        terms: 'not selected'
    })


    const provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia",
        "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"]

    const onValueChanged = (event) => {
        setFormData({...formData , [event.target.name]:event.target.value})
    }

    var [submitted, setSubmitted] = useState(false);


    const onSubmitForm = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }


    return (
        <>
            {submitted ? (
                <div className="App">
                    <h2>Email: {formData.email}</h2>
                    <h2>Full Name: {formData.name}</h2>
                    <h2>Address: {formData.address}</h2>
                    <h2>City: {formData.city}</h2>
                    <h2>Province: {formData.province}</h2>
                    <h2>Postal Code: {formData.postal_code}</h2>
                </div>
            ) : (
                <form onSubmit={(e) => onSubmitForm(e)} >

                    <label>Name:</label><br />

                    <input
                        name='name'
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="Full name" />

                    <label>Email:</label><br />
                    <input
                        name='email'
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="Enter email" />

                    <label>Address:</label><br />
                    <input
                        name='address'
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="1234 Main Street" />

                    <label>Address2:</label><br />
                    <input
                        name='address2'
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="Apartment, Studio, Floor" />

                    <label>City</label><br />
                    <input
                        name='city'
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="" />

                    <label>Province</label>
                    <select name='province' onChange={(e) => onValueChanged(e)}>
                        {
                            provinces.map((province) => (
                                <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select>

                    <input
                        name='terms'
                        type="checkbox"
                        value="terms"
                        id="terms"
                        onChange={(e) => onValueChanged(e)} /> Agree terms &conditions

                    <input
                        name='btnSubmit'
                        type="submit"
                        value="Submit"
                        id='submit-btn'
                    />

                    <label>Postal Code</label>
                    <input
                        name='postalCode'
                        type="text"
                        onChange={(e) => onValueChanged(e)}
                        placeholder="Postal Code" />

                </form>
            )}
        </>
    )
}

