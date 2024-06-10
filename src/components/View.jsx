import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {


  const [data, changeData] = useState([])
  const fetchData = () => {
    axios.get("https://courseapplogix.onrender.com/getdata").then(

    (response) => {changeData(response.data)}
    
  ).catch(

(error) => {
  console.log(error.message)
  alert(error.message)
}

  ).finally()
  }
  useEffect(()=>{fetchData()},[])



  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <h2><center>Student Detail</center></h2>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


            <table class="table">
              <thead>
                <tr>
                  <th scope="col">index</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">College</th>
                </tr>
              </thead>
              <tbody>


              {data.map(
                (value,index) => {

                  return <tr>
                  <th scope="row">{index}</th>
                  <td>{value.firstname}</td>
                  <td>{value.lastname}</td>
                  <td>{value.college}</td>
                  <td>{value.college}</td>
                  <td>{value.college}</td>
                  <td>{value.college}</td>
                  <td>{value.college}</td>
                  <td>{value.college}</td>
                  <td>{value.college}</td>
                </tr>


                }
              )}
                
              </tbody>
            </table>


          </div>
        </div>
      </div>



    </div>
  )
}

export default View