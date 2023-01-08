import { useState, useContext } from 'react'; 
import { loginService } from '../../services/Auth.service';

const Login = () => {
    const [formulario, setFormulario] = useState({
        email: '',
        password: ''
    });
    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        loginService(formulario).then((res) => {
            alert('Inicio de sesion exitoso');
        }).catch((err) => {
            alert('Error al iniciar sesion');
    })
    }
    return (
        <div className="container">
        <form className="form-login mt-5" onSubmit={enviarDatos}>
            <h1 className="text-center mb-5">Login</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control form-control-lg" id="email" onChange={handleInputChange} value={formulario.email} name="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label form-label-lg">Password</label>
                <input type="password" className="form-control form-control-lg" id="password" onChange={handleInputChange} value={formulario.password} name="password" />
            </div>
            <div className="d-grid">
                <button className="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    </div>
    );
}

export default Login;