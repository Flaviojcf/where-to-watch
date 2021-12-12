import {Container} from './styles'

export function SignIn(){
    return (
        <Container>
                <div>

                     <h1>Sign In</h1>
                     <p>Login to manage your account</p>
                     <input type="text" name="email" id="email" />
                     <input type="text" name="password" id="password" />
                     <label><input type="checkbox"/>Remember me</label>
                     <button type='button'>Sign In</button>
                <div className='informações'>
                    <p>Don't have an account? Sign up</p>
                    <p>Forgot password?</p>
                    </div>
        

                </div>

        </Container>
    )
}


