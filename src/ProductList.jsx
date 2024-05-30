import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from "./ProductItem";
import {useTelegram} from "./useTelegram";
import {useCallback, useEffect} from "react";


const products = [
   
    {id: '1', title: 'ЦЕПЬ', price: 45, description: 'BROKEN HEART'},
    {id: '2', title: 'ЦЕПЬ', price: 45, description: 'CUBAN'},
    {id: '3', title: 'ЦЕПЬ', price: 45, description: 'BIG CROSS'},
    {id: '4', title: 'БРАСЛЕТ', price: 25, description: 'BLINK'},
    {id: '5', title: 'БРАСЛЕТ', price: 25, description: 'CUBAN'},
    {id: '6', title: 'БРАСЛЕТ', price: 30, description: 'SLIM'},
    {id: '7', title: 'Браслет', price: 15, description: 'CLASSIC'},
    {id: '8', title: 'ОЧКИ', price: 35, description: 'RAZOR'},
   
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://194.99.22.84:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect = (() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;