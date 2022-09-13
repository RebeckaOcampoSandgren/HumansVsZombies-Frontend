import { useForm } from "react-hook-form";

const usernameConfig = {
    required: true,
    minLength: 6
}
const passwordConfig = {
    required: true,
    minLength: 10
}

const RegisterPage = () => {

  
    const {
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm()

   
    const onSubmit = async ({ username }) => { 
      
      
    };


    const errorMessage = (() => {
        if(!errors.username) {
            return null
        }

        if(errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if(errors.username.type === 'minLength'){
            return <span>Username is to short (min. 3)</span>
        }
    })()

    return (
        <>
            <div className="RegisterPagedDiv">

                <div className='form-wrapper'>
                    <form id='createUser' onSubmit={handleSubmit(onSubmit)}>
                        <h5 className='headerRegisterUser'>Register a user</h5>
                        <label>Username </label>
                        <input type="text" className='form-control' placeholder='Username'{...register("username", usernameConfig) }></input>
                        <label>Password </label>
                        <input type="text" className='form-control' placeholder='password' {...register("pasword", passwordConfig) }></input>
                        <button type="submit" value="Submit">Click to register</button>
                        <br/>
                   {errorMessage}
                </form>
            </div>

        </div>

        </>

    );
}
export default RegisterPage