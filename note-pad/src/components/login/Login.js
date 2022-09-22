import React from 'react';
import { FcGoogle } from "react-icons/fc";
import style from './Login.module.css';
import Logo from '../../imagenes/logo_notepad_white.png';
import ImageLogin from '../../imagenes/image_login.png';
import ImageBackground from '../../imagenes/bg_notepad.png';

function Login() {
  return(
    <section className={style.loginContainer}>
        <div className= {style.imageLoginContainer} > 
            <img 
              className={style.imageLogin}
              src= {ImageLogin}
              alt='ImageLogo' />
        </div>
        <form className={style.formContainer}>            
            <img
              className={style.logo}
              src= {Logo}
              alt='Logo' />                     
            <button type='submit' className={style.submitBtn}>
					    Ingresar
				    </button>   
            <button className={style.googleSubmitBtn}>
                  <FcGoogle className={style.googleIcon} /> Continua con Google
				    </button>            
            <p className={style.questionSignUp} >¿No tienes una cuenta? Crea una aquí</p>                      
        </form>
    </section>
  );
}

export default Login;