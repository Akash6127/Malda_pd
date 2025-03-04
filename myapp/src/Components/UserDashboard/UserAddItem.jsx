import React from 'react'

function UserAddItem() {
  return (
    <div>
      <form>
        <div className='container border border-primary mt-3 '>
          <div className='row'>
          <div className='col'> <label>Item Id</label>
            <input type='text' /></div>
          <div className='col'>  <label>Serial No.</label>
            <input type='text' /></div>
            </div>
            <div className='row'>
          <div className='col'> <label>Hardware Name</label>
            <input type='text' /></div>
          <div className='col'>  <label>Model Name</label>
            <input type='text' /></div>
          <div>
          </div>
          <div className='row'>
          <div className='col'>
            <label>Service Type</label>
            <select>
              <option>service1</option>
              <option>service2</option>
              <option>service3</option>
              <option>service4</option>
            </select>
          </div>
          <div className='col'>
            <label>Issue Date</label>
            <input type='date' />
          </div>
          </div>
          </div>
          <div className='row'>
          <div className='col'>
            <label>Choose Current situation</label>
            <input type='radio' id='active' value="active" /><label>Active</label>
            <input type='radio' id='inactive' value="inactive" /><label>InActive</label>
          </div>
        <div className='col'>
          <label>Issued By</label>
          <input type='text'/>
        </div>
        </div>
        </div>
        <div></div>
      </form>
    </div>
  )
}

export default UserAddItem