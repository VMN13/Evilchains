import React from 'react';
import './Form.css';

const Form = () => {
    const [country, setCountry] = useState()
    return (
       
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input 
            className={'input'}
             type="text"
              placeholder={'Страна'}
              />

            <input
             className={'input'}
             type="text"
              placeholder={'Улица'}
              />
              <select className={'select'}>
                <option value={'oplata'}>Оплата картой</option>
                <option value={'oplata'}>Наличными при получении</option>
              </select>
        </div>
       
    )
};

export default Form;
