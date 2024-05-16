import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "./useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const [adres, setAdres] = useState('');
    const [index, setIndex] = useState('');
    const [name, setName] = useState('');
    const [familia, setFamilia] = useState('');
    const [num, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [oplata, setOplata] = useState('');
    const {tg} = useTelegram();
    
    const X = () => useEffect(() => {
    tg.NainButton.setParams({
       text: 'Отправить данные'
    })
},
[])

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const onChangeAdres = (e) => {
        setAdres(e.target.value)
    }

    const onChangeIndex = (e) => {
        setIndex(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeFamilia = (e) => {
        setFamilia(e.target.value)
    }


    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }


    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeOplata = (e) => {
        setOplata(e.target.value)
    }

    

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type="text" placeholder={'Страна/Регион'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type="text" placeholder={'Улица/Населенный пункт'} value={street} onChange={onChangeStreet}/>
            <input className={'input'} type="text" placeholder={'Адрес'} value={adres} onChange={onChangeAdres}/>
            <input className={'input'} type="text" placeholder={'Почтовый индекс, *На указанный E-mail придет трек-код после отправки'} value={index} onChange={onChangeIndex}/>
            <input className={'input'} type="text" placeholder={'Имя'} value={name} onChange={onChangeName}/>
            <input className={'input'} type="text" placeholder={'Фамилия'} value={familia} onChange={onChangeFamilia}/>
            <input className={'input'} type="text" placeholder={'Номер телефона'} value={num} onChange={onChangeNum}/>
            <input className={'input'} type="text" placeholder={'Email-адрес'} value={email} onChange={onChangeEmail}/>
            <select value={subject} onChange={onChangeSubject} className={'select'}>
            <option value={'physical'}>Варианты доставки</option>
                <option value={'1'}>Белпочта (~2-4 дня, цена: 5 BYN)</option>
                <option value={'2'}>Европочта (~2-4 дня, цена: 5 BYN)</option>
            </select>
            
            <select value={oplata} onChange={onChangeOplata} className={'select'}>
            <option value={'3'}>Способ оплаты</option>
                <option value={'4'}>Оплата картой</option>
                <option value={'5'}>Наличными при получении</option>
            </select>
      
        </div>
    );
    };


export default Form;
