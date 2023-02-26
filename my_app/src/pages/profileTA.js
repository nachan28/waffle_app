import { useState } from 'react';
import  Language  from "/src/component/select.js"

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="App">
      <h1>登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" name="username" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            type="password"
          />
        </div>
        <div className="cardArea">  
          <Language />  
       </div> 


        <div>
          <button type="submit">TAとして登録</button>
       
        </div>

      </form>
    </div>
  );
}

export default App;