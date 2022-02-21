import React,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const UpdataPerson = (props) => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message,setMessage]=useState(null);
    
    
    useEffect( async() => {
        let result= await fetch("http://127.0.0.1:8000/api/personalget/"+props.match.params.id);
        result= await result.json();
        setData(result);
        setName(result.name)
        setPhone(result.phone);
        
       
       }, [])
    

     
       async function handleUpdate(id){
        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('phone', phone);

        // let result = await fetch("http://127.0.0.1:8000/api/personalUpdate/"+id+"?_method=PUT", {
        //     method: "POST",
        //     body: formData

        // });
        // setMessage(result.response.data.message)
        const item = { name, phone }
        console.warn(item);

        axios.post("personalUpdate/"+id+"?_method=PUT", item)

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
                                      
                                            {message && <div class="alert alert-danger" role="alert">
                                                {message}
                                            </div>}
                                            <div class="row mb-3">
                                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Enter Your Name</label>
                                                <div class="col-sm-9">
                                                    <input type="text" defaultValue={data.name} onChange={(e) => setName(e.target.value)} class="form-control" id="inputEnterYourName" placeholder="Enter Your Name" />
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Phone No</label>
                                                <div class="col-sm-9">
                                                    <input type="text" defaultValue={data.phone} onChange={(e) => setPhone(e.target.value)} class="form-control" id="inputPhoneNo2" placeholder="Phone No" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <label class="col-sm-3 col-form-label"></label>
                                                <div class="col-sm-9">
                                                    <button  onClick={()=>handleUpdate(data.id)} type="submit" class="btn btn-info px-5">Person Add</button>
                                                </div>
                                            </div>
                                       
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

export default UpdataPerson
