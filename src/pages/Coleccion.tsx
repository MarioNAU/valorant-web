import MenuBar from "../componentes/MenuBar";
import "../styles/coleccion.css";

function Coleccion() {
    return (
        <div className="play-main">
            <MenuBar/>
            <div className="contenedor-coleccion">
                <div className="guns">
                    <div className="handguns">
                        <h3 className="guntitle">ARMAS DE MANO</h3>
                            <div className="gun">
                                <img className="buddy"/>
                                <img className="gunimage"/>
                            </div>
                            <div className="gun"></div>
                            <div className="gun"></div>
                            <div className="gun"></div>
                            <div className="gun"></div>
                    </div>
                    <div className="shotandguns">
                    <h3 className="guntitle">SUBAMETRALLADORAS</h3>
                        <div className="gun"></div>
                        <div className="gun"></div>
                    <h3 className="guntitle">ESCOPETAS</h3>
                        <div className="gun"></div>
                        <div className="gun"></div>
                    </div>
                    <div className="rifleandmelee">
                    <h3 className="guntitle">RIFLES</h3>
                        <div className="gun"></div>
                        <div className="gun"></div>
                        <div className="gun"></div>
                        <div className="gun"></div>
                    <h3 className="guntitle">MELEE</h3>
                        <div className="gun"></div>
                    </div>
                    <div className="sniperGuns">
                    <h3 className="guntitle">RIFLES DE FRANCOTIRADOR</h3>
                        <div className="gun"></div>
                        <div className="gun"></div>
                        <div className="gun"></div>
                    <h3 className="guntitle">AMETRALLADORAS</h3>
                        <div className="gun"></div>
                        <div className="gun"></div>
                    </div>
                </div>
                <div className="presentacion"></div>
            </div>
        </div>
    )
}


export default Coleccion;