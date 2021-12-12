import { Content, Container} from './styles'
import { SignIn } from '../../pages/SignIn'

export function Header() {
    return (
        <Container>
            <Content>
                <button type="button" onClick={SignIn}>
                    Sign In
                </button>
                </Content>
                </Container>
            
    )
}