import React, {useState} from 'react';

import "./CreateAccount.css"

export default function Create_account() {
  const [Firstname, setFirstname]=useState("");
  const [Lastname, setLastname]=useState("");
  const [date, setdate]=useState("");
  const [Nationality, setNationality]=useState("");
  const [Phone, setPhone]=useState("");
  const [Email, setEmail]=useState("");
  const [Password, setPassword]=useState("");
  const [cPassword, setcPassword]=useState("");
  const [isSent, setIsSent] = useState(false);
if(isSent){
  return <div className='msg_container'>
    <div className='congratsMassage'>
    <h1 className='congrats'> Congratulations!! {Firstname}  Your Account has been Created Successfully....</h1>
      <h3 className='con_msg_header'>This will be used for Login. So please Note this carefully....</h3>
      <div className='data_important'>
        <h4>Username : {Email}</h4>
        <h4>Password : {Password}</h4>
      </div>
    </div>
    </div>;
}else{
  function handlereset(){
    setFirstname("");
    setLastname("");
    setdate("");
    setNationality("");
    setPhone("");
    setEmail("");
    setPassword("");
    setcPassword("");
  }
  function showdata(){
    if(Password !== cPassword){
      setPassword("");
      setcPassword("");
      alert("Your Password are Not same")
    }
    }

  return (
    <div className="container_account"> 
        <h3 className='title'>Create an Account</h3>
        <form className='form_container' onSubmit={e=>{e.preventDefault();setIsSent(true);alert(`\nFirstName: ${Firstname}\nLastName: ${Lastname}\nDate of Birth: ${date}\nNationality: ${Nationality}\nPhone Number: ${Phone}\nEmail Id: ${Email}\nPassword: ${Password}\n`)}}>
            <label>First Name</label>
            <input type='text' value={Firstname} onChange={e =>setFirstname(e.target.value)} required></input>
            <label>last Name</label>
            <input type='text'value={Lastname} onChange={e =>setLastname(e.target.value)} required></input>
            <label>Date of Birth</label>
            <input type='date' value={date} onChange={e =>setdate(e.target.value)} required maxLength={12}></input>
            <label>Nationality</label>
            <input type='text'value={Nationality} onChange={e =>setNationality(e.target.value)} required></input>
            <label>Phone Number</label>
            <input type='phone'value={Phone} onChange={e =>setPhone(e.target.value)} required maxLength={10}></input>
            <label>Email Id</label>
            <input type='email'value={Email} onChange={e =>setEmail(e.target.value)} required ></input>
            <label>Create Password</label>
            <input type='password' value={Password} onChange={e =>setPassword(e.target.value)} required maxLength={12}></input>
            <label>Confirm Password</label>
            <input type='text'value={cPassword} onChange={e =>setcPassword(e.target.value)} required maxLength={12}></input>
            <div className='buttons'>
            <button type='Reset' className='reset' onClick={handlereset}>Reset</button>
            <button type='submit' className='submiting' onClick={showdata}>Submit</button>
            </div>
        </form>
    </div>
  )
}
}

 