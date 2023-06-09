import "./footer.css";

const Footer = ()=>{
    return <footer className="footer" style={ {backgroundImage: "url(/imagenes/footer.png)"}}>
        <div className="redes">
            <a href="https://www.aluracursos.com/">
                <img src="/imagenes/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/imagenes/twitter.png" alt="Twitter"/>
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/imagenes/instagram.png" alt="Instagram"/>
            </a>
        </div>
        <img src="/imagenes/logo.png" alt="org"/>
        <strong>Desarrollado por JDesigns</strong>
    </footer>
}

export default Footer;