import React, { Component } from 'react'
import './home.less'
import Header from '@/components/header/header'
import { imgUrl } from '@/envconfig/env'
import api from '@/utils/api'
import { resPost } from '@/utils/http'
import 'element-theme-default'

class Home extends Component {
    state = {
        bannerList: []
    };
    async GetBanner() {
        const res = await resPost(api.GetBanner)
        this.setState({
            bannerList: res.Data
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
    // 相当于mounted
    componentDidMount() {
    }
    render() {
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
                    <h1 className="ram"></h1>
                </div>
                <div className="ground">
                    <div className="mound">
                        <div className="mound_text">冰消叶散</div>
                        <div className="mound_spade"></div>
                    </div>
                </div>
                <div className="fot">
                    <span className="cr"></span>
                    <a className="links" href="https://beian.miit.gov.cn/" target="_blank"></a>
                </div>
            </div>
        )
    }
}

export default Home