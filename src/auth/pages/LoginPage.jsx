import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import seePass from '../../assets/eye-line.svg';
import notSeePass from '../../assets/eye-off-line.svg'
import './styles.css'

export const LoginPage = () =>{

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const [message, setMessage] = useState({
        state: false,
        message: ""
    });

    const [seePassword, setSeePassword] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        const data = JSON.stringify({
            email,
            password
        })
        console.log(data);

        setTimeout(()=>{
            setMessage({
                state: true,
                message:"Logeado correctamente"
            });
        },1000)
    }

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleChangePass(event) {
        setPassword(event.target.value);
    }

    return(
        <div className="container-2 d-flex align-items-center ">
            <form className="form" onSubmit={onSubmit} noValidate="novalidate">
                <h2 className="form__title">Iniciar sesión 2</h2>
                <p className="form__paragraph">¿Aún no tiene cuenta? <Link to='/auth/register' className="form__link">Entra aquí</Link></p>
                
                <div className="form__container">
                    <div className="form__group">
                        <input type="email" id="usuario" className="form__input" placeholder="Correo" value={email} onChange={handleChange} required/>
                    </div>
                    <div className="form__group form__input_pass">
                        <input type={seePassword ? "text":"password"} id="password" className="form__input" placeholder="Contraseña" value={password} onChange={handleChangePass}  required/>
                        <div className="btn_pass" onClick={()=>setSeePassword(!seePassword)}>
                            <img src={seePassword ?  notSeePass : seePass} alt="" className="see"/>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Ingresar"/>
                    {
                        message.state && (
                            <>
                                <p>{message.message}</p>
                                <p><Navigate to="/"/></p>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    )
}