"use client";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { increment, decrement } from '../redux/slices/counterSlice';

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Counter Page</h1>
            <div className="flex items-center space-x-4">
                <button 
                    onClick={() => dispatch(decrement())} 
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    -
                </button>
                <span className="text-2xl">{count}</span>
                <button 
                    onClick={() => dispatch(increment())} 
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    +
                </button>
            </div>
        </div>
    );
}