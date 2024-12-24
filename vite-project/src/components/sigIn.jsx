import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";3

const SignIn = () => {
  const navigate = useNavigate();

  return (
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '97vh',
    }}>
      <div style={{
        width: '400px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        backgroundColor: '#fff',
      }}>
        <h2 style={{
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '24px',
          color: '#333',
        }}>Sign in</h2>
        <form>
          <label style={{ display: 'block', marginBottom: '10px', fontSize: '15px', color: '#555',fontWeight:'600' }}>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              width: '95%',
              padding: '10px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
             
            }}
          />
          <label style={{ display: 'block', marginBottom: '10px', fontSize: '15px', color: '#555',fontWeight:'600' }}>Password</label>
          <input
            type="password"
            placeholder="123@efg6"
            style={{
              width: '95%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
             fontSize: '14px',
              
            }}
          />
          <a href="#" style={{
            display: 'block',
            marginBottom: '5px',
            fontSize: '12px',
            color: '#007bff',
            textDecoration: 'none',
            marginLeft:"18rem"
          }}>Forgot your password?</a>
          <div style={{ marginBottom: '15px' }}>
            <input type="checkbox" id="remember" style={{ marginRight: '10px' }} />
            <label htmlFor="remember" style={{ fontSize: '14px', color: '#555' }}>Remember me</label>
          </div>
          <button
          onClick={() => navigate("/chat")}
            type="submit"
            style={{
              width: '100%',
              height:'38px',
              padding: '10px',
              backgroundColor: 'rgb(106, 90, 205)',
              color: '#fff',
              fontSize: '16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >Sign in</button>
        </form>
        <div style={{ textAlign: 'center', margin: '20px 0', fontSize: '14px', color: '#555' }}>
          Don&apos;t have an account? <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Sign up</a>
        </div>
        <div style={{ textAlign: 'center', fontSize: '14px', color: '#555', margin: '10px 0' }}>or</div>
        <button
          style={{
            width: '100%',
            height:'38px',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          
           <FaGoogle size={30} style={{ margin: '10px',width:'24px',color:"#0000ff94",height:"20px" }}/>
          Sign in with Google
        </button>
        <button
          style={{
            width: '100%',
            height:'38px',
            padding: '10px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
           <FaFacebook size={30} style={{ margin: '10px',width:'24px',height:"20px",color:"#0000ff94" }} />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignIn;
