import React,{useState} from 'react';
const App =()=>{
  const [objData, setObjData] = useState({});

  const getData = (name, value)=>{
    let data = {[name]:value};
    setObjData({...objData,  ...data})
  };

  const submit = (event)=>{
    event.preventDefault();
    console.log(objData)
  }
  return (
    <form onSubmit={submit}>
    <div>
      <input 
      placeholder='Enter Name' 
      name='name' type='text' 
      onChange={(event)=>getData(event.target.value, event.target.name)} 
      />
      <input 
      placeholder='Enter Age'
      name='name'
      type='number'
      onChange={(event)=>getData(event.target.value, event.target.name)}
      />
      <input
      placeholder='subject'
      name='subject'
      type='text'
      onChange={(event)=>getData(event.target.value, event.target.name)}
      />
      <input 
      placeholder='Date'
      name='date'
      type='date'
      onChange={(event)=>getData(event.target.value, event.target.name)}
      />
      <button type='submit'>Submit</button>
      <button type='reset'>Reset</button>
    </div>
    </form>
  )
}
export default App;