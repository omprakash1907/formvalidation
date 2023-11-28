import React, { useState } from 'react'
import image from './image/gradient-circle.png'
import './form.css'

function FormValidation() {
    const initial = {
        name: '',
        email: '',
        password: ''
    }
    const [input, setInput] = useState(initial)
    const [store, setStore] = useState([])
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        // console.log({...input,[e.target.name]:e.target.value})
    }
    const CheckValidate = (input) => {
        console.log(input.name)
        const errors = {}

        if (input.name === "" || input.name === undefined || input.name === ' ') {
            errors.name = 'set name*'
            console.log(errors)
        }
        if (input.email === "" || input.email === undefined || input.email === ' ') {
            errors.email = 'set email*'
            console.log(errors)
        }
        if (input.password === "" || input.password === undefined || input.password.length < 6) {
            errors.password = 'Enter 6 digit password*'
            console.log(errors)
        }
        // if(input.name != '' && input.email != '' && input.password != '' ){
        //     alert('Login Successfullyy...')
        //     // window.location.reload();
        // }
        return errors
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validate = CheckValidate(input)
        setErrors(CheckValidate(input))
        // const newStore = store
        // newStore.push(input)
        // setStore(newStore)
        const check = Object.keys(validate)
        if (check.length < 1) {
            setStore([...store, input])
            setInput(initial)
        }
    }

    return (
        <>
            <div className="gradiant-position">
                <img src={image} alt="" srcset="" className='image-fluid img1' />
                <img src={image} alt="" srcset="" className='image-fluid position-absolute end-0 bottom-0 ' />
            </div>
            <div className="container d-flex  justify-content-between align-items-center">
                <form action="" className='text-center  col-5 mt-5  form-bg' onSubmit={handleSubmit}>
                    <h1 className='mb-4 form-title text-white fw-bold'>Login <span className='text-gradiant'>FORM</span></h1>
                    <input type="text" value={input.name} name='name' placeholder='Enter Your Name' className='form-control mb-3 border-0' onChange={handleChange} />
                    <p className='mb-3 ms-2  text-danger text-start'>{errors && errors.name}</p>
                    <input type="email" value={input.email} name='email' placeholder='Enter Your Email' className='form-control mb-3 border-0' onChange={handleChange} />
                    <p className='mb-3 ms-2  text-danger text-start'>{errors && errors.email}</p>
                    <input type="Password" value={input.password} name='password' placeholder='Enter Your Password' className='form-control mb-3 border-0' onChange={handleChange} />
                    <p className='mb-3 ms-2  text-danger text-start'>{errors && errors.password}</p>
                    <button className='btn btn-gradiant w-100 fw-bold fs-3 text-white border-0'> Submit</button>
                </form>
                <div className="box col-6 form-bg text-center ">
                    <h1 className='mb-4 form-title text-white fw-bold'>List Of  <span className='text-gradiant'>USERS</span></h1>
                    <table class=" w-100 text-white b-0 border-style" >
                        <thead >
                            <tr >
                                <th scope="col" className='border-style'>Sr No.</th>
                                <th scope="col" className='border-style'>Name</th>
                                <th scope="col" className='border-style'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                store.map((e, i) => {
                                    return <tr>
                                        <td className='border-style'>{i + 1}</td>
                                        <td className='border-style'>{e.name}</td>
                                        <td className='border-style'>{e.email}</td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default FormValidation
