import { useState } from "react";
import "./login.css";

const Login = () => {

    const [form, setForm] = useState({});


    const handleForm = (event) => {
        setForm({
                ...form,
                [event.target.name]: event.target.value
            })
    }

    const estaValido = () => Object.keys(form).length === 0 || form.identifier?.length === 0 || form.password?.length === 0;


    return (
        <div id="div-form">
            <form onSubmit={e => e.preventDefault()} id="login-form" >
                <div className="mb-3 login-div">
                    <input type="text" className="form-input" name="identifier" required aria-describedby="emailHelp"
                        onChange={handleForm}
                        value={form.identifier || ""} />
                    <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="mb-3 login-div">
                    <input type="password" className="form-input" name="password" required
                        onChange={handleForm} 
                        value={form.password || ""}/>
                    <label htmlFor="password" className="form-label">Senha</label>
                </div>
                <button type="submit" className="btn login-botao" disabled={estaValido()}
                >Entrar</button>
            </form>
        </div>
    );
}

export default Login;


