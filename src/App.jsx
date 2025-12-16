'use client';

import { useForm } from "react-hook-form";
import { useState } from "react";
import DataTable from "./components/DataTable";
import FormUser from "./components/FormUser";

export default function App() {
  const {register, handleSubmit, formState: { errors }, reset} = useForm();

  const products = [{ id: 1, product: 'Laptop', cost: 1200, category: 'Electronics', stock: 30, img: 'https://imagedelivery.net/0tt38OLkrSmHRt7hdItWEA/01302e5d-62ae-4c2f-d0ea-af773b1f1d00/public' },
{ id: 2, product: 'Smartphone', cost: 800, category: 'Electronics', stock: 50, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6W_TzlkEIXjLJSkFw8J1KPzQMWWqGCqWB1A&s' },
{ id: 3, product: 'Headphones', cost: 150, category: 'Accessories', stock: 100, img: 'https://cdn.mos.cms.futurecdn.net/HMCWShKerkfeNQmYYhE3p7.jpg' },
{ id: 4, product: 'Coffee Maker', cost: 100, category: 'Home Appliances', stock: 20, img: 'https://m.media-amazon.com/images/I/91sX3OKNUVL._AC_SL1500_.jpg' },
]
  const [list, setList] = useState(products);
  const [select,setSelect] = useState([]);
  const [open, setOpen] = useState(false);


  const onSubmit = (data) => {
    const exists = list.find(item => item.id === parseInt(data.id));
    if (exists) {
      setList(prev => prev.map(item => item.id === parseInt(data.id) ? {...data, id: parseInt(data.id), cost: parseFloat(data.cost), stock: parseInt(data.stock)} : item));
    } else {
      setList(prev => [...prev, {...data, id: parseInt(data.id), cost: parseFloat(data.cost), stock: parseInt(data.stock)}]);
    }
    reset();
    setOpen(false);
    setSelect([]);
  };

  return (
    <>
      <DataTable rows={list} setSelect={setSelect} setOpen={setOpen}/>
      {open && <FormUser
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        row={select.length === 1 ? list.find(item => item.id === select[0]) : null}
      />}
    </>
  );
}
