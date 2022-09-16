import { useState } from "react";
import monster from '../IMG/monster.png';
/* const apiUrl = process.env.REACT_APP_API_URL */

function RegisterPage() {
    const [firstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [password, setPassword] = useState("")


    /* const SignUp = async () => {

        let userInfo = { firstName, LastName, password }
        console.warn(userInfo)

        let result = await fetch(`${apiUrl}/users`, {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }

        });
        userInfo = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
    } */




    return (
        <>
            <div className="RegisterPagedDiv">

                 <div className='form-wrapper'>
                    <form id='registerUser'>
                        <h4 className='headerRegisterUser'>Register a user</h4>
                        <label id='user'>First name </label>
                        <input type="text" value={firstName} className='form-control' placeholder='First name' onChange={(e) => setFirstName(e.target.value)}></input>
                        <label id='user'>Last name </label>
                        <input type="text" value={LastName} className='form-control' placeholder='Last name' onChange={(e) => setLastName(e.target.value)}></input>
                        <label id='user'>Password </label>
                        <input type="Password" value={password} className='form-control' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
                        <button id='addUser' type="submit" value="Submit" /*</form>onClick={SignUp}*/>Click to register</button>
                        <br />

                    </form>
                </div>

            </div>

        </>

    );



}
export default RegisterPage

