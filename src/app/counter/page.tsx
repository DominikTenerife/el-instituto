"use client";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { increment, decrement } from '../../redux/slices/counterSlice';
import { Button } from 'antd';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter Page to Test Redux - temporary</h1>
      
      <div className="flex items-center space-x-4 mt-4">
        <Button 
          onClick={() => dispatch(decrement())} 
          type="primary" 
          danger
        >
          -
        </Button>
        <span className="text-2xl">{count}</span>
        <Button 
          onClick={() => dispatch(increment())} 
          type="primary"
        >
          +
        </Button>
      </div>
    </div>
  );
}