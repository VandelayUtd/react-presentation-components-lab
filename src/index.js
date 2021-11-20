import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const clicked = "i've been clicked"

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={()=> alert("clicked")} />
  </div>,
  document.getElementById('root')
);