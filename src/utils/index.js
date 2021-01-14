export const isTruthy=(value)=>value===0? true:!!value;

export const cleanObject=(obj)=>{
  const result={...obj};
  Object.keys(result).forEach(key=>{
    if(!isTruthy(result[key])){
      delete  result[key]
    }
  })

  return result;
}

