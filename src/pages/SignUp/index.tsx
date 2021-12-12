import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Content } from "./styles";

export function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleCreateAccount = () => {
        console.log({ username, password, confirmPassword, agreed });
    }

    return (
        <Container>
            <Content>
                <h1>Create your account</h1>
                <p>We're glad to have your here</p>

                <Input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                /> 
                <Input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    setValue={setPassword} 
                /> 
                <Input 
                    type="password" 
                    placeholder="Confirm password"
                    value={confirmPassword}
                    setValue={setConfirmPassword} 
                /> 

                <label>
                    <input type="checkbox" onChange={event => setAgreed(event.target.checked)} />
                    I agree to Terms and Conditions
                </label>

                <Button type="button" title="Create my account" onClick={handleCreateAccount} disabled={!agreed} />

                <p className="other-option">
                    Already have an account? 
                    <a href="#">Sign in</a>
                </p>
            </Content>
        </Container>
    )
}