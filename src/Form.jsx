import React from 'react';
import './Form.css';
import { useTelegram } from './App';
const onSendData = useCallback(() => {

}, [])
const Form = () => { 
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const[subject, setSubject] = useState('physical');
    const {tg} = useTelegram();
   

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [])

    
  useEffect(() => {
   tg.onEvent('mainButtonClicked', onSendData)
   return () => {
    tg.offEvent('mainButtonClicked', onSendData)
   }
  }, [])


   useEffect(() => {
   tg.MainButton.setParams({
    text: 'Отправить данные'
   })
   }, [])

   useEffect(() => {
   if (!street || !country) {
    tg.MainButton.hide();
   } else {
    tg.MainButton.show();
   }
   }, [country, street])

   const onChangeCountry = (e) => {
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
