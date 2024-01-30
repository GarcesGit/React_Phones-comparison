import React from 'react';
import cl from './DropDown.module.css';
import image_arrows from '../../images/arrows.png';

function DropDown({ visible, setVisible, phone }) {
  const rootClasses = [cl.myDropDown]
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myDropDownContent} onClick={(event) => event.stopPropagation()}>
          <input placeholder='Поиск' />
          <div className={cl.myDropDownItems}>
          <img src={image_arrows} alt="" className="image_arrows"></img>
          <img src={require(`../../images/${phone.imageName}.png`)} alt={phone.imageName} className="phone_img_small"></img>
          <div>{phone.name}</div>
          </div>
      </div>
    </div>
  )
}

export default DropDown;
