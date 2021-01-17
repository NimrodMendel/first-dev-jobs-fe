import { Input } from 'antd';
import React, { useState } from 'react';
import { Button } from 'antd';
import { Form } from 'antd';
import { Alert, Breadcrumb } from 'antd';
import Posts from './Posts';

export default function Feed(){

  const [posts, setPosts] = useState([]);
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validErr, setValidErr] = useState('');
  
  function handleChangeJobTitle(event) {
    setJobTitle(event.target.value);
  }
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }
  function handleSubmit() {
    let obj ={
      jobTitle: jobTitle,
      description: description
    }
    if(obj.jobTitle !== '' && obj.description !== ''){
      
      let temp = posts;
      temp.unshift(obj);
      setPosts(temp)
      
      setDescription('');
      setJobTitle('');

      setValidErr(false);
      
    }else{
      setValidErr(true);
    }
    
  };
    const { TextArea } = Input;

      return (
       <>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>home</Breadcrumb.Item>
              <Breadcrumb.Item>feed</Breadcrumb.Item>
            </Breadcrumb>
          <h1>Posts Jobs</h1>
          
          <Form>
          <Input value={jobTitle} onChange={handleChangeJobTitle} style={{marginBottom:'10px'}} placeholder="Job Title" />
          <TextArea value={description} onChange={handleChangeDescription} style={{marginBottom:'10px'}} placeholder="description"/>
          <Button type="primary" onClick={() => handleSubmit(0)}>
              Post Job!
          </Button>
            </Form>
          {validErr ? <Alert style={{marginTop:'10px'}} message="All fields are required!" type="error" /> : <></>}
          {posts.map((post, index)=>{   
        return (
          <div key={index}>
            <Posts post = {post} />
          </div>
        );   
    })}
    
       </>
      );
    
  
  }