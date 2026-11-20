
import { useState } from 'react';

function Login({ onLogin, onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter email and password.');
      return;
    }

    onLogin(email);
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Welcome Back!</h1>
        <p>Login to your Eventify account</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{' '}
          <span onClick={onSignup}>Sign Up</span>
        </p>
      </div>
    </section>
  );
}

export default Login;
