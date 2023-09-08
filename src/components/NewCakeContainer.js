import React, { useState } from 'react'
import { buyCake } from '../redux/cake/cakeAction';
import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const NewCakeContainer = (props) => {

    const totalCake = useSelector(state => state.cake.numOfcakes)
    // const disptach = useDispatch();
    const [number, setNumber] = useState(1);

    return (
        <div className='flex justify-center flex-col items-center '>
            <h2 className='text-red-600 font-mono text-2xl mb-4'>Number of cakes {totalCake}</h2>
            <input type='text' onChange={(e) => setNumber(e.target.value)} value={number} className='outline-double my-2' />
            <button onClick={() => props.buyCake(number)} className='py-2 px-4 bg-red-600 text-white font-bold'>Buy {number} Cakes</button>
        </div>
    )
}

// const mapStateValue = state => {
//     return {
//         numOfcakes: state.numOfcakes
//     }
// }

const mapdispatch = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(null, mapdispatch)(NewCakeContainer);