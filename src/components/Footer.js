import React from 'react';

//Si no se aplica lógica, se puede quitar el return y cambiar los corchetes por paréntesis y eso
//hace que retorne por default
const Footer = ({fecha}) => {
    return (  
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>
    );
}
 
export default Footer;
