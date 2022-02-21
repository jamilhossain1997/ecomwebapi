import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
       getData()
        
    }, [])

    function getData(){
        axios.get('personal')
        .then(function (response) {
            
            setData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    async function deleteOperation(id){
        let result= await fetch("http://127.0.0.1:8000/api/personalDelete/"+id,{
            method:'Delete'
        });

        result=await result.json();
        console.warn(result)
        getData()

    }

    return (
        <div>
            <div class="page-wrapper">
                <div class="page-content">
                    <div class="card radius-8">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div>
                                    <h5 class="mb-0">All Person </h5>

                                    <br/><Link to='/addperson'><button class='btn btn-success'>Add Person</button></Link>
                                </div>
                                <div class="font-22 ms-auto"><i class='bx bx-dots-horizontal-rounded'></i>
                                </div>
                            </div>
                            <hr />
                            <div class="table-responsive">
                                <table class="table align-middle mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {data.map((item)=>
                                    <tbody>
                                       

                                            <tr>

                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger mr-3" onClick={()=>deleteOperation(item.id)}>Delete</button>
                                                <Link to={"/update"+item.id}><button type="button" class="btn btn-primary">Edit</button></Link>
                                            </td>

                                            </tr>
                                            </tbody>
                                          )
                                        }
                                        

                                   
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home 
