import { createContext, useContext, useState } from 'react';
import propsData from '../data/props.json';

const PropsContext = createContext();

export function usePropsContext() {
  return useContext(PropsContext);
}

export function PropsProvider({ children }) {
  const [props, setProps] = useState(propsData);
  return (
    <PropsContext.Provider value={{ props, setProps }}>
      {children}
    </PropsContext.Provider>
  );
}
