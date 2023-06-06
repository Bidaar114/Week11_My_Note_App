import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
 

const AddNote = ({createNote}) => {




  const initialValues ={
    title: "",
    content: ""
  }
 const handlesubmit = (values)=> {
  createNote(values)

 }
  // add form logic here

  return (
    <div className='flex bg-white rounded-xl p-5 w-[500px] h-[230px]'>

      <Formik
       onSubmit={handlesubmit}
      initialValues={initialValues}
      
      > 

        <Form className='flex flex-col p-2 space-y-3 w-full my-3
        '>
          <Field
          name="title"
          type= "text"
          placeholder="Title"  
          className='border-2 px-2 py-1.5 rounded shadow '     
          />
           
          <Field
          name="content"
          type= "text"
          placeholder="Body"  
          className='border-2 px-2 py-3 rounded shadow'     
          />
          <button type='submit' className=' rounded-md bg-yellow-400 py-2 mt-6'>Add Note</button>
        </Form>

      </Formik>
      
    </div>
  );
};

export default AddNote;
