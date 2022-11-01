import { useEffect } from 'react';
import './App.scss';
import Layout from './components/Layout/Layout';
import {useDispatch} from 'react-redux'
import {fetchHomeData} from './features/Home'
import {fetchAllData} from './features/All'


import {useState} from 'react';



function App() {
  localStorage.setItem('accessToken', false);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchHomeData());
    dispatch(fetchAllData());
  }, [])
  return (
    <div className="App">

        <Layout/>
    </div>
  );
}

export default App;
