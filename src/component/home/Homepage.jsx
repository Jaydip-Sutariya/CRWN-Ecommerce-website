import React from 'react'
import BoxItem from './BoxItem';
import { useSelector } from "react-redux";


export default function Homepage() {
    const data = useSelector((state)=>{
        return state.datas
      })
  return (
    <div className="ImgBox">
    {Object.keys(data).map((key) => {
        console.log(data);
      return (
        <BoxItem
          Imgurl={data[key].url}
          title={data[key].title}
          key={data[key].id}
          
        />
      );
    })}
  </div>
  )
}
