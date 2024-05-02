import React from 'react';
import './Form.css';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const[subject, setSubject] = useState('physical');
    const onChangeCountry = (e) => {
        const onChangeCountry = (e.target.value)
    }
    

    const onChangeStreet= (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
       
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input 
            className={'input'}
             type="text"
              placeholder={'Страна'}
              value={country}
              onChange={onChangeCountry}
              />

            <input
             className={'input'}
             type="text"
              placeholder={street}
              onChange={onChangeStreet}
              />
              <select value={subject}
              onChange={onChangeSubject}
              className={'select'}>
                <option value={'oplata'}>Оплата картой</option>
                <option value={'oplata'}>Наличными при получении</option>
              </select>
        </div>
       
    )
};

export default Form;
