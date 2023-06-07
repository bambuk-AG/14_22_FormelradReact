import {useState} from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: ""
    })

    return (
        <>
        <section>
            <header>         
            <h2>Formelrad</h2>
            <img src={formelrad} width="200" alt="Formelrad"/>
            </header>
            <div>
                <form>
                    <div>
                        <InputField color={"black"} value={values.u} label="Spannung" handleChange={e => {setValues(values => ({...values, u: e.target.value}))}} />
                    </div>
                    <div>
                        <InputField color={"black"} value={values.i} label="Stromstärke" handleChange={e => {setValues(values => ({...values, i: e.target.value}))}} />
                    </div>
                    <div>    
                        <InputField color={"black"} value={values.r} label="Widerstand" handleChange={e => {setValues(values => ({...values, r: e.target.value}))}} />
                    </div>
                    <button type="submit">Calculate</button>
                </form>
            </div>
        </section>
        </>
    )
}