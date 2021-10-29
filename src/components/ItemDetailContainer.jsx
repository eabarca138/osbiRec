import { useState, useEffect } from 'react'

import ItemDetail from './ItemDetail'
import {itemData} from '../service/itemData'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

useEffect(() => {
    const getItem = new Promise((res, rej) => {
        setTimeout(() => {
            res(itemData)
        }, 2000);
    });

    getItem.then((result) => {
        setItem(result)
    }).catch(e => console.log(e))
    .finally(() => setLoading(true))

}, [])

    return ( 
        <ItemDetail item={item} loading={loading}/>
     );
}
 
export default ItemDetailContainer;