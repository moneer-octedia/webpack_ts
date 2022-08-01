function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'hello webpack and ts'
  
    return element;
  }
  
  document.body.appendChild(component());