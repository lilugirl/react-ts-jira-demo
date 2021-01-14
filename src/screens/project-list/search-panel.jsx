import React from 'react';

export const SearchPanel=({users,param,setParam})=>{

 
  
  return <form action="">
    <input type="text" value={param.name} onChange={evt=>setParam({...param,name:evt.target.value})} />

    <select value={param.personId} onChange={evt=>setParam({...param,personId:evt.target.value})}>
      <option value={''}>所有人</option>
      {users.map((user,i)=>{
        return <option key={i} value={user.id}>{user.name}</option>
      })}
    </select>
  </form>
}