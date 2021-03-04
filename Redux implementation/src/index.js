import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { decrement, increment, async_inc, change_theme } from './redux/actions';
import { rootReducer } from './redux/rootReducer';
import { INIT_APP } from './redux/types';
import './styles.css'

const counter = document.getElementById('counter');

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

addBtn.addEventListener(
  'click',
  () => store.dispatch(increment())
)

subBtn.addEventListener(
  'click',
  () => store.dispatch(decrement())
)

asyncBtn.addEventListener(
  'click',
  () => store.dispatch(async_inc())
)

themeBtn.addEventListener(
  'click',
  () => store.dispatch(change_theme())
)

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter.value;
  document.body.className = state.theme.value;
});

store.dispatch({ type: INIT_APP });

