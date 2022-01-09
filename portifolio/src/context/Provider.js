// import React, { useState } from 'react';
import React from 'react';
import context from './MyContext';

export default function Provider({ children }) {
  const state = {

  }
  return (
    <context.Provider value={ state }>
      {children}
    </context.Provider>
  );
}