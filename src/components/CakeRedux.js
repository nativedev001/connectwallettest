import React from 'react'
import { buyCake } from '../redux/cake/cakeAction';
import { connect, useSelector } from 'react-redux';
import { UseSelector, useDispatch } from 'react-redux';

const CakeRedux = () => {

    const totalCake = useSelector(state => state.cake.numOfcakes)
    const disptach = useDispatch();

    return (
        <div className='flex justify-center flex-col items-center '>
            <h2 className='text-red-600 font-mono text-2xl mb-4'>Number of cakes {totalCake}</h2>
            <button onClick={() => disptach(buyCake())} className='py-2 px-4 bg-red-600 text-white font-bold'>Buy Cake</button>
        </div>
    )
}

// const mapStateValue = state => {
//     return {
//         numOfcakes: state.numOfcakes
//     }
// }

// const mapdispatch = dispatch => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }

export default CakeRedux;