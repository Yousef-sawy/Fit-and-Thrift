import React, { useEffect } from "react";
import styled from "styled-components";
import { signInAPI } from "../redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.user && navigate("/home");
  }, [props.user]);
  return (
    <Container>
      <Nav>
        
        <a href="/index.html">
        <Logo src="../../public/images/logo2.png" alt="Logo" />        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to Fit and Thrift</h1>
          <h2>Our business consists of two parts: Styling with Ai
            and Thrifting in two ways. The first part is all about
              chatting with ai so the chatbot creates an idea of each client aesthetic. As well as real life stylists that would be able to help 24/7 
            Second part is thrifting in a swiftly suitable way and exchanging conversat</h2>
          <img src="/images/background.jpg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  padding: 20px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Logo = styled.img`
  width: 120px; 
  height: auto; 
  position: absolute; 
  top: 10px; 
  left: 10px; 

  @media (max-width: 768px) {
    width: 80px; /* Adjust the width for smaller screens */
    top: 5px; /* Adjust the top position for smaller screens */
    left: 5px; /* Adjust the left position for smaller screens */
  }
`;
const Join = styled.a`
  font-size: 21px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0,91,170, 100);
  margin-right: 1px;
  &:hover {
    background-color: rgba(0,91,170, 100);
    color: rgba(0, 00, 0, 255);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 2px #000000;
  color: #005baa;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(0,91,170,100);
    color: #000000;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 130px;
  padding-top: 40px;
  padding: 40px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 66px;
    color: #005baa;
    font-weight: 400;
    line-height: 70px;
    position: relative;
    top: 100px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
      top: 50px;
    }
  }
  h2 {
    padding-top: 10px;
    font-size: 20px;
    color: #333;
    font-weight: 500;
    position: relative;
    top: 100px;
    width: 50%;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 16px;
      top: 60px;
      width: 80%;
    }
  }
  img {
    width: 500px;
    height: 500px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    border-radius: 50%;
    object-fit: cover;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
      border-radius: 0;
    }
  }
`;

const Form = styled.div`
  margin-top: 200px;
  width: 400px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(0,91,170,255);
    color: rgba(0, 0, 0, 0.75);
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signInAPI()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);