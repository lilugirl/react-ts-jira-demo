import React,{useState,useEffect} from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import qs from 'qs';
import {cleanObject} from 'utils'

const apiUrl=process.env.REACT_APP_API_URL;
console.log('apiurl',apiUrl);

export const ProjectListScreen=()=>{

  const [users,setUsers]=useState([]);

  const [param,setParam]=useState({
    name:'',
    personId:''
  })


  const [list,setList]=useState([]);
  useEffect(()=>{
    fetch(`${apiUrl}/users`).then(async res=>{
      if(res.ok){
        setUsers(await res.json())
      }
    })
  },[])

  useEffect(() => {
    console.log('param改变了',param);
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res=>{
      if(res.ok){
        setList(await res.json())
      }
    })
  }, [param])

 return <div>
   <SearchPanel param={param} setParam={setParam} users={users} />
   <List list={list} users={users} />
 </div>
}