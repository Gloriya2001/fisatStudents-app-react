import React from 'react'
import NavBar from './NavBar'

const Search = () => {
    return (
        <div>
<NavBar/>
            <div className="container">
                <div className="row g-3">
                <h2><center>Search Student</center></h2>
                
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                      
                        <label className="form-label">Student Name</label>
                        <input type="text" className="form-control" />
                    </div>
                

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                      
                      <button className="btn btn-success">Search</button>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Search