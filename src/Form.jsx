import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "./useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();
   
    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    const myFunction = async () => {
        // run asynchronous tasks here
    


    useEffect(() => {
        
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])
    

    useEffect(() => {
        tg.MainButton.setParams({
          text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])
};
    const onChangeCountry = (e) => {
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
            <input className={'input'} type="text" placeholder={'Страна/Регион'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type="text" placeholder={'Улица/Населенный пункт'} value={street} onChange={onChangeStreet}/>
            <input className={'input'} type="text" placeholder={'Адрес'}/>
            <input className={'input'} type="text" placeholder={'Почтовый индекс, *На указанный E-mail придет трек-код после отправки'}/>
            <input className={'input'} type="text" placeholder={'Имя'}/>
            <input className={'input'} type="text" placeholder={'Фамилия'}/>
            <input className={'input'} type="text" placeholder={'Номер телефона'}/>
            <input className={'input'} type="text" placeholder={'Email-адрес'}/>
            <select value={subject} onChange={onChangeSubject} className={'select'}>
            <option value={''}>Варианты доставки</option>
                <option value={'0'}>Белпочта (~2-4 дня, цена: 5 BYN)</option>
                <option value={'1'}>Европочта (~2-4 дня, цена: 5 BYN)</option>
            </select>
            
            <select value={subject} onChange={onChangeSubject} className={'select'}>
            <option value={''}>Способ оплаты</option>
                <option value={'2'}>Оплата картой</option>
                <option value={'3'}>Наличными при получении</option>
            </select>
      
        </div>
    )
    }


export default Form;
