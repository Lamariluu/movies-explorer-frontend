import React from 'react';
import './Notice.css';

function Notice({ onClose, isSuccess, isUpdated }) {
  return (
    <div className={`popup ${!isSuccess ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{`${isUpdated ? 'Данные изменены' : 'Произошла ошибка'}`}</h2>
        <button type="button" className="popup__close-button buttonBlue" onClick={onClose}>
          ОК
        </button>
      </div>
    </div>
  );
}

export default Notice;