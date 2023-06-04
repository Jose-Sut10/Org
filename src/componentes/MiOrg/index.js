import { useState } from "react";
import "./MiOrg.css";

const MiOrg= () =>{
    //Estado -> hookd
    //usesState
    //usesState()
    //const [variable,funcionActualizadora] = useState(valorInicial);
    const [dato, datoActualizado] = useState(true); 

    const clickImagen = ()=>{
        console.log("Si funciona", !datoActualizado); 
        datoActualizado(!dato); 
    }

    return <section className="orgSection">
        <h3 className="tituloOrg">Mi Organización</h3>
        <img src="/imagenes/add.png" alt="Icono" onClick={clickImagen}/>
    </section> 
}

export default MiOrg; 