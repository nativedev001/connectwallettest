import React from 'react'
import { buyIce } from '../redux/icecream/action'
import { useSelector, useDispatch } from 'react-redux'

const IceRedux = () => {

    const totalCake = useSelector(state => state.IceCream.numOfIceCups)
    const dispatch = useDispatch()

    return (
        <div className='flex justify-center items-center flex-col'>
            <h3 className='text-2xl text-blue-500'>No of Ice Creams {totalCake} </h3>
            <button className='py-2 px-4 bg-violet-700 mt-4 text-white' onClick={() => dispatch(buyIce())}>Buy IceCream</button>
        </div>
    )
}




export default IceRedux