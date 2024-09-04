/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ThemeContext, CurrentUserContext } from "../contexts/LevelContext";

export default function MultipleContexts(){
    const [theme, setTheme]=useState('light');
    const [currUser, setCurrUser]= useState(null);

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={
               { currUser, setCurrUser}
            }>

        <WelcomePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          />
          Use dark mode
        </label>

            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
        
    );
}

function WelcomePanel(){
    const {currUser}=useContext(CurrentUserContext);
    return (
        <Panel title="welcome">
            {currUser !==null?<Greeting/> : <LoginForm/>}
        </Panel>
    );
}

function Greeting() {
    const {currUser} = useContext(CurrentUserContext);
    return (
      <p>You logged in as {currUser.name}.</p>
    )
  }
  
  function LoginForm() {
    const {setCurrUser} = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const canLogin = firstName.trim() !== '' && lastName.trim() !== '';
    return (
      <>
        <label>
          First name{': '}
          <input
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last name{': '}
          <input
          required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <Button
          disabled={!canLogin}
          onClick={() => {
            setCurrUser({
              name: firstName + ' ' + lastName
            });
          }}
        >
          Log in
        </Button>
        {!canLogin && <i>Fill in both fields.</i>}
      </>
    );
  }

  function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    )
  }
  
  function Button({ children, disabled, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button
        className={className}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  