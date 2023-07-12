import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AsyncfetchData } from './store';
import './style.css';

export default function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(AsyncfetchData());
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{JSON.stringify(users)}</p>
    </div>
  );
}
