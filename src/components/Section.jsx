import PropTypes from 'prop-types';
import '../styles/section.css';
import { LevelContext } from '../contexts/LevelContext';

export default function Section({level, children}){
return (
    <section className="section">
        <LevelContext.Provider value={level}>
           {children} 
        </LevelContext.Provider>
        
    </section>
);
}

Section.propTypes={
    level: PropTypes.number,
    children: PropTypes.any
}