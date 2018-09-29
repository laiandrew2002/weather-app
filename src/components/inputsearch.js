import React from 'react'

const InputSearch =({getWeather}) => {
  return (
      <div className="container text-center mt-3">
        
            <form className="" onSubmit={getWeather}>
                <div className='row mb-3'>
                    <div className='col '>
                        <input className='form-control' type='text' name='country' placeholder="Enter Country" />
                    </div>
                    <div className='col'>
                        <input className='form-control' type='text' name='city' placeholder='Enter City' />
                    </div>
                </div>
               <div className="">
                    <button className='btn btn-success grow shadow-4'>
                    <i className="fas fa-cloud"></i>  Get Weather
                    </button>
               </div>
            </form>
        
      </div>
  )
}

export default InputSearch;