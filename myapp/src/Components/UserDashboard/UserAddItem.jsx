import React from 'react'
import './UserAddItem.css'
function UserAddItem() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Item Added");
  }
  return (

    <form onSubmit={handleSubmit}>
      <div className='form_container'>
        <div className='input_field' >
          <div className='first_division'>

            <div className='label_input'> <label>Item Id</label>
              <input type='text' /></div>
            <div className='label_input'>  <label>Serial No.</label>
              <input type='text' /></div>


            <div className='label_input'> <label>Hardware Name</label>
              <input type='text' /></div>
            <div className='label_input'>  <label>Model Name</label>
              <input type='text' /></div>

          </div>
          <div className='second_division'>
            <div className='label_input'>
              <label>Service Type</label>
              <select>
                <option>service1</option>
                <option>service2</option>
                <option>service3</option>
                <option>service4</option>
              </select>
            </div>
            <div className='label_input'>
              <label>Issue Date</label>
              <input type='date' />
            </div>



            <div className='label_input'>
              <label>Choose Current situation</label>
              <div>
              <input type='radio' id='active' name='status_type' value="active" /><label>Active</label>
              <input type='radio' id='inactive'name='status_type'  value="inactive" /><label>InActive</label>
              </div>
            </div>
            <div className='label_input'>
              <label>Issued By</label>
              <input type='text' />
            </div>

          </div>
        </div>
        <div className='submit_field'><button type='submit' className='btn btn-primary'>Submit</button></div>
      </div>
    </form>

  )
}

export default UserAddItem