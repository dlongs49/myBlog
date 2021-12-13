import React, { Component } from 'react'
import './home.less'
import { imgUrl,baseUrl } from '@/envconfig/env'
import {getVerse} from '@/utils/api'
import { resGet } from '@/utils/http'
import jsonp from 'jsonp'
class Home extends Component { 
    state = {
        item: {}
    };
    getVerse() {
        jsonp(baseUrl+getVerse,{},(err,res)=>{
            this.setState({
                item: res.data
            }) 
        })
       
    }
    qqClick(){
        let appid = '101936013'
        let recturl = encodeURIComponent('http://expro.dillonl.com/api/v2/qqlogin')
        let scope = '0'
        let display = null; // 默认pc 'mobile' 移动端
        window.location.href =
            `https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=${appid}&redirect_uri=${recturl}&scope=${scope}&display=${display}`
    
    }
    wbClick(){
        let appid = '1883180365'
        let recturl = encodeURIComponent('http://expro.dillonl.com/api/v2/wblogin')
        window.location.href =
            `https://api.weibo.com/oauth2/authorize?client_id=${appid}&response_type=code&redirect_uri=${recturl}`
    
    }
    // 切换
    handleVerce(){
        this.getVerse()
    }
    // 相当于mounted
    componentDidMount() {
        this.getVerse()
    }
    render() {
        const item = this.state.item
        return (
            <div className="content">
                <div className="third">
                    <a onClick={ this.qqClick } className="alog qqlogin">
                        <i className="icon i_qq"></i>
                        <span className="spn">QQ</span>
                    </a>
                    <a onClick={ this.wbClick } className="alog wblogin">
                        <i className="icon i_wb"></i>
                        <span className="spn">微博</span>
                    </a>
                </div>
                <canvas className="snow" id="snow" width="1349" height="400"></canvas>
                <div className="main-text">
                    <h1 onClick={this.handleVerce.bind(this)} className="ram">{item.verse_title}</h1>
                </div>
                <div className="ground">
                    <div className="mound">
                        <div className="mound_text">冰消叶散</div>
                        <div className="mound_spade"></div>
                    </div>
                </div>
                <div className="fot">
                    <span className="cr">Copyright 2019 - {new Date().getFullYear()} dillonl. All Rights Reserved</span>
                    <a rel="noopener noreferrer" className="links" href="https://beian.miit.gov.cn/" target="_blank">陇ICP备2021000332号-1</a>
                </div>
            </div> 
        )
    }
}

export default Home
