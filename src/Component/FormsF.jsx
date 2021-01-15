import { Input } from 'antd';
import React from 'react';
import { Button } from 'antd';
import { Form } from 'antd';
import { Alert } from 'antd';
import Posts from './Posts';

export default class FormsF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadings: [],
      posts:[],
        jobTitle: '',
        description: '',
        validErr: false,
        
    };

    this.handleChangeJobTitle = this.handleChangeJobTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeJobTitle(event) {
    this.setState({jobTitle: event.target.value});
  }
  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }
  handleSubmit(index) {
    let obj ={
      jobTitle: this.state.jobTitle,
      description: this.state.description
    }
    if(obj.jobTitle !== '' && obj.description !== ''){
      
      this.state.posts.unshift(obj);

      this.setState({description:''})
      this.setState({jobTitle:''})

      this.setState({validErr:false});
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = true;
        return {
          loadings: newLoadings,
        };
      });
      setTimeout(() => {
        this.setState(({ loadings }) => {
          const newLoadings = [...loadings];
          newLoadings[index] = false;
  
          return {
            loadings: newLoadings,
          };
        });
      }, 0);
      
    }else{
      this.setState({validErr:true});
    }
    
  };

  

  render(){
    const { TextArea } = Input;
    const { loadings } = this.state;

      return (
       <>
          <h1>Posts Jobs</h1>
          
          <Form>
          <Input value={this.state.jobTitle} onChange={this.handleChangeJobTitle} style={{marginBottom:'10px'}} placeholder="Job Title" />
          <TextArea value={this.state.description} onChange={this.handleChangeDescription} style={{marginBottom:'10px'}} placeholder="description"/>
          <Button type="primary" loading={loadings[0]} onClick={() => this.handleSubmit(0)}>
              Post Job!
          </Button>
            </Form>
          {this.state.validErr ? <Alert style={{marginTop:'10px'}} message="All fields are required!" type="error" /> : <></>}
          {this.state.posts.map((post, index)=>{   
        return (
          <div key={index}>
            <Posts post = {post} />
          </div>
        );   
    })}
    
       </>
      );
    }
  
  }