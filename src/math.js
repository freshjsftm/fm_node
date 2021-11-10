const cache = new Map();

export const pow=(base, exp)=>{
  const key = `${base}_${exp}`;
  if(!cache.has(key)){ //если нету в мапе
    cache.set(key, base**exp);//добавляем в мапу
  }
  return cache.get(key);//отдаем из мапы
}

export const mult=(a, b)=> a*b;

export const sum = (...args)=>args.reduce((res,arg)=>res+arg, 0);


