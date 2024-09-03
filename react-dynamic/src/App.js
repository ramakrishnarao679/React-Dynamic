import React, {useState} from 'react';
function App (){
  const [inputs, setInputs] =useState({});

  const getData = (data)=>{
    let {name, value} = data.target;
    let input = {[name]:value};
    setInputs({...inputs, ...input})
  }
  console.log(inputs)
  return(
    <div>
      <input placeholder='Enter Name' name='name' type='text' onChange={getData} />
      <input placeholder='Enter age' name='age' type='number' onChange={getData} />
      <input placeholder='YOE' name='YOE' type='number' onChange={getData} />
    </div>
  )
}
export default App;