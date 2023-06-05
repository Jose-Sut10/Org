import "./MiOrg.css";

const MiOrg= (props) =>{
    //Estado -> hooks
    //usesState()
    //const [variable,funcionActualizadora] = useState(valorInicial);
    // const [dato, datoActualizado] = useState(true); 


    return <section className="orgSection">
        <h3 className="tituloOrg">Mi Organización</h3>
        <img src="/imagenes/add.png" alt="Icono" onClick={props.estado}/>
    </section> 
}

export default MiOrg; 