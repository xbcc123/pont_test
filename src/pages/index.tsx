import React,  { useState }  from 'react';
import styles from './index.less';
import { Button, Tooltip, Card } from 'antd';
import '../services';
import { useParams } from 'umi';
import api from 'mock/api';

// defs 包含所有公共类型
// const pet = new defs.User();
// API.get.sayHello.request({ name: 1})

// API 包含所有接口
// console.log(API.post.testCreateUser)
// API.pet.addPet.request({}, pet);

// 老写法 请求
// let params = {
//  'concat': '',
//  'genedr': '',
//  'platformList': [],
//  'username': '',  
// }

// 新写法 请求
let paramsNew :API.post.testCreateUser.Params = {
    "concat": "",
    "gender":"",
    "platformList":[],
    "username":"",
}

API.post.testCreateUser.request(paramsNew).then(res => {
    console.log()
})

let name :defs.Box = {
    "a": 1
}


// 最佳实践 响应
// let res :API.post.testCreateUser.Response = {

// }


export default () => {
  const [result, setCount] = useState('');

   // GET请求
  function get() {
      let params = {
        name: "1",
      }

      API.get.sayHello.request(params)
        .then(res => {
          console.log(res);
          setCount(JSON.stringify(res.data))
        });
    }

  // POST请求
  function post() {
    let params = {
      username: "4",
      concat: "1",
      password: "3",
      gender: "2"
    }

    API.post.testCreateUser.request(params)
      .then(res => {
        console.log(res);
        setCount(JSON.stringify(res.data))
      });
  }

  // POST JSON请求
  function postJson() {
    let params = {
      username: "4",
      concat: "1",
      password: "3",
      gender: "2"
    }

    API.post.testCreateUser.request(params)
      .then(res => {
        console.log(res);
        setCount(JSON.stringify(res.data))
      });
  }

    // 上传文件
    function uploadFn(e) {
      let files = event.target.files
      let params = new FormData()
      params.set('file', files[0])
      API.post.testUploadFile.request(params)
        .then(res => {
          console.log(res);
          setCount(JSON.stringify(res.data))
        });
    }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
        <Card title="请求" style={{ width: 300 }}>
          <Button onClick={get}>GET请求</Button>
          <div style={{ height: 10 }}></div>
          <Button onClick={post}>POST请求</Button>
          <div style={{ height: 10 }}></div>
          <Button onClick={postJson}>POST JSON请求</Button>
          <div style={{ height: 10 }}></div>
          <label htmlFor="male"><Button>POST 上传文件(multipart/form-data) </Button></label>
          <input id="male" type="file" name="file" onChange={uploadFn} />
        </Card>
        {/* <Card title="结果" style={{ marginLeft: 50 }}>
          {result}
        </Card> */}
      </div>
    </>
  );
}
