import {IconHome, IconAgents, IconBattleP, Iconbackpack, IconMedal, IconStore} from '../assets/index';
import Tooltip from '../componentes/Tooltips';
import '../index.css'

function MenuBar() {
  return (
    <div className="bar-nav">
      <Tooltip texto="HOME">
          <a className='item-nav' href="/"><img src={IconHome} className="icons" /></a>
      </Tooltip>
      <Tooltip texto="BATTLEPASS">    
          <a className='item-nav' href="#"><img src={IconBattleP} className="icons"/></a>
      </Tooltip>
      <Tooltip texto="AGENTS">  
          <a className='item-nav' href="/Agents"><img src={IconAgents} className="icons"/></a>
      </Tooltip>
          <a className='item-nav'><div className='big-red'>Jugar</div></a>
      <Tooltip texto="CAREER">  
          <a className='item-nav'><img src={IconMedal} className="icons"/></a>
      </Tooltip>
      <Tooltip texto="COLLECTION">  
          <a className='item-nav'><img src={Iconbackpack} className="icons"/></a>
      </Tooltip>
      <Tooltip texto="STORE">  
          <a className='item-nav'><img src={IconStore} className="icons"/></a>
      </Tooltip>
    </div>
  );
}

export default MenuBar;