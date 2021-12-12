import {Container, Content} from './styles'

export function SignIn(){
    return (
        <Container>
            <Content>
                <div>

                     <h1>Sign In</h1>
                     <p>Login to manage your account</p>

                     <input type="text" placeholder='Email' name="email" id="email" />
                     <input type="text" placeholder="Password" name="password" id="password" />

                     <label><input type="checkbox"/>Remember me</label>

                     <button type='button'>Sign In</button>

                <div className='adicionais'>
                    <p>Don't have an account?<a href="#">Sign up</a></p>
                    <a href="#"> Forgot a password? </a>
                    </div>
        

                </div>
                </Content>
        </Container>
    )
}


