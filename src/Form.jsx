import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "./useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [sebject, setSubject] = useState('physical');
    const {tg} = useTelegram();
   
  

    
    
     

    const onChangeCounty = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }



    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type="text" placeholder={'Страна/Регион'}/>
            <input className={'input'} type="text" placeholder={'Улица/Населенный пункт'}/>
            <input className={'input'} type="text" placeholder={'Адрес'}/>
            <input className={'input'} type="text" placeholder={'Почтовый индекс'}/>
            <input className={'input'} type="text" placeholder={'Имя'}/>
            <input className={'input'} type="text" placeholder={'Фамилия'}/>
            <input className={'input'} type="text" placeholder={'Номер телефона'}/>
            <input className={'input'} type="text" placeholder={'Email-адрес'}/>
        </div>
    )
    }


export default Form;
