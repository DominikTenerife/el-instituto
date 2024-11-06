"use client"
import { Provider } from 'react-redux';
import store from './redux/store';

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <h1>This is El Instituto Home Page</h1>
      </div>
    </Provider>
  );
}
