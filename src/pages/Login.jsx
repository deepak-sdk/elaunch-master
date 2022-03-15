import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
),
url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  height: fit-content;
  ${mobile({width: "75%"})}
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 25px;
  margin:10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  margin:10px;
  padding: 10px;
  min-width: 40%;
`;
const Button = styled.button`
  min-width: 40%;
  border: none;
  margin:10px;
  padding: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link=styled.a`
margin:10px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>Login</Button>
                <Link>Forgot Password?</Link>
                <Link>Create Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login