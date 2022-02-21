import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PersonAdd = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(null);

    function handlesubmit(e) {
        e.preventDefault();
        const item = { name, phone }
        console.warn(item);

        axios.post('addPerson', item)

            .then(function (response) {
                setMessage(response.data.message);
            })
            .catch(function (error) {
                setMessage(error.response.data.message);
            })

    }
    return (
        <div>
            <div class="page-wrapper">
                <div class="page-content">
                    <div class="row">
                        <div class="col-xl-9 mx-auto">
                            <h6 class="mb-0 text-uppercase">Horizontal Form</h6><br />
                            <Link to='/'><button type="button" class="btn btn-success">ALL PERSON</button></Link>
                            <hr />
                            <div class="card border-top border-0 border-4 border-info">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="card-title d-flex align-items-center">
                                            <div><i class="bx bxs-user me-1 font-22 text-info"></i>
                                            </div>
                                            <h5 class="mb-0 text-info">User Add</h5>
                                        </div>
                                        <hr />
                                        <form onSubmit={handlesubmit}>
                                            {message && <div class="alert alert-secondary" role="alert">
                                                {message}
                                            </div>}
                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Enter Your Name</label>
                                                <div class="col-sm-9">
                                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="inputEnterYourName" placeholder="Enter Your Name" />
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Phone No</label>
                                                <div class="col-sm-9">
                                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} class="form-control" id="inputPhoneNo2" placeholder="Phone No" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <label class="col-sm-3 col-form-label"></label>
                                                <div class="col-sm-9">
                                                    <button type="submit" class="btn btn-info px-5">Person Add</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonAdd
