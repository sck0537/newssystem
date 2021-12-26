import React, { useState ,useEffect} from 'react'
import {Button, Table, Tag} from 'antd'
import axios from "axios";

import {EditOutlined,DeleteOutlined} from "@ant-design/icons";
export default function RightList() {
    const [dataSource,setdataSource]=useState([])

    
      useEffect(() => {
          axios.get("http://localhost:3500/rights?_embed=children").then(res=>{
              setdataSource(res.data)
          })

      }, [])
      
      const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
            render:(id)=>{
              return <b>{id}</b>
            }
        },
        {
          title: '权限名称',
          dataIndex: 'title',
        },
        {
          title: '权限路径',
          dataIndex: 'key',
            render:(key)=>{
              return <Tag color={"red"}>{key}</Tag>
            }
        },
          {
              title: "操作",
              render:()=>{

                  return <div>

                  <Button  type="primary" shape="circle" icon={<EditOutlined />} />
                  <Button danger type="primary" shape="circle" icon={<DeleteOutlined />} />
                    </div>
              }
          }
      ];
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} pagination={false} />

        </div>
    )
}
