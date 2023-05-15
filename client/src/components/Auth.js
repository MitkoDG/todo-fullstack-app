import { useState } from 'react';

const Auth = () => {
    
    const [error, setError] = useState(null);
    const isLogin = false;

    return (
        <div className="auth-container">
            <div className="auth-container-box">
                <form>
                    <h2>{isLogin ? 'Please log in' : 'Please sign in'}</h2>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    {!isLogin && <input type="password" placeholder="confirm password" />}
                    <input type="submit" className="create" />
                    {error && <p>{error}</p>}
                </form>
                <div className="auth-options">
                    <button>Sign Up</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}
export default Auth;