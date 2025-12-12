'use client';

import About from "./components/FormUser";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DataTable from "./components/DataTable";
import { Button } from "@mui/material";
import FormUser from "./components/FormUser";

export default function App() {
  const {register, handleSubmit, formState: { errors }, reset} = useForm();

  const [list, setList] = useState([]);
  const [select,setSelect] = useState([]);
  const [open, setOpen] = useState(false);


  const onSubmit = (data) => {
    setList((prev) => [
      ...prev,
      { id: (list.length+1), ...data } 
    ]);
    reset();
    setOpen(false);
  };

  const handleDelete = () => {
      setList(prev => prev.filter(item => !select.includes(item.id)));
      setSelect([]);
  }

  return (
    <>
      <DataTable rows={list} setSelect={setSelect}/>
      {open && <FormUser
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />}
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Add New
      </Button>
      <Button variant="outlined" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
}
