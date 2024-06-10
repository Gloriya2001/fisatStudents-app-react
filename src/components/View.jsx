import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {


  const [data, changeData] = useState(
    [
      {
        "_id": "66651683741a512717d92b87",
        "firstname": "Manu",
        "lastname": "R",
        "college": "FISAT",
        "dob": "02/04/1999",
        "course": "B-Tech Comp Science",
        "mobile": "+91 95266 7443",
        "email": "aa@gmail.com",
        "address": "Kochi",
        "__v": 0
      },
      {
        "_id": "666516bc741a512717d92b88",
        "firstname": "Rahul",
        "lastname": "D",
        "college": "FISAT",
        "dob": "02/01/1992",
        "course": "MCA",
        "mobile": "+91 95266 74440",
        "email": "aa@gmail.com",
        "address": "Test Address",
        "__v": 0
      }
    ]

  )



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