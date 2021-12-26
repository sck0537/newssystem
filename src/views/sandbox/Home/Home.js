import React from 'react'
import { Button } from 'antd'
// import axios from 'axios'
import 'antd/dist/antd.css';

export default function Home() {
    const ajax = () => {
        // axios.get('http://localhost:3000/posts').then(res=>{
        //     console.log(res.data)
        // })
        // axios.post('http://localhost:3000/posts',{
        //     title:'hello',
        // axios.put("",).then(res => {
        //     console.log(res)
        // })
        // axios.delete("").then(res => {
        //     console.log(res)
        // })
        // axios.patch("").then(res => {
        //     console.log(res)
        // })

    }
    return (
        <div>
            <Button onClick={ajax}>butt</Button>
        </div>
    )
}
