import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/LevelContext';
import '../styles/Form.css';

function Form({children}){
    return (
      <Panel title="Welcome">
        {children}
        <Button>Sign Up</Button>
        <Button>Log in</Button>
      </Panel>
    );
  }
  
  
  function Panel({title, children}){
    const theme=useContext(ThemeContext);
    const className='panel panel-'+theme;
    return(
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    )
  }
  
  function Button({children, onClick}){
  const theme = useContext(ThemeContext);
  const className= 'button-'+theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
  }
  
  Panel.propTypes={
    children: PropTypes.any,
    title: PropTypes.string,
  }
  
  Button.propTypes={
    children: PropTypes.any,
    onClick: PropTypes.func,
  }

  Form.propTypes={
    children: PropTypes.any,
  }

export {Form, Panel, Button};