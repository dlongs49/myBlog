import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.less'
import { imgUrl } from '@/envconfig/env'
import api from '@/utils/api'
import { resPost } from '@/utils/http'
import $ from 'jquery'
export class Header extends Component {
    state = {
        infoList: {},
        menuList: []
    }
    async GetCompany() {
        const res = await resPost(api.GetCompany)
        if (res.Success) {
            this.setState({
                infoList: res.Data
            })
        }
    }
    async GetRol() {
        const res = await resPost(api.GetRol)
        if (res.Success) {
            this.setState({
                menuList: res.Data
            })
        }
    }
    NodeHover() {
        $(function () {
            $(document).on(
                "mouseenter mouseleave",
                ".top_nav_center_tab>a",
                function (event) {
                    if (event.type == "mouseenter") {
                        $(this).find(".line").stop().animate({ top: "40px", opacity: 1 });
                        $(this).find(".out_posi").stop().slideDown("show");
                    } else if (event.type == "mouseleave") {
                        $(this).find(".line").stop().animate({ top: "55px", opacity: 0 });
                        $(this).find(".out_posi").stop().slideUp("show");
                    }
                }
            );
        });
    }
    topage() {
        this.props.history.push('/contact')
    }
    componentDidMount() {
        this.GetCompany()
        this.GetRol()
        this.NodeHover()
    };
    render() {
        return (
            <div className="top">
                <div className="top_banner">
                    <div className="banner_center">
                        <div className="banner_icon">
                            <i className="icon i_collect" title="按Ctrl+D收藏此网站"></i>
                        </div>
                        <div className="banner_contact">
                            <div className="banner_phone">
                                <i className="icon i_telephone"></i>
                                <span>{this.state.infoList.TelPhone}</span>
                            </div>
                            <div className="banner_mail">
                                <i className="icon i_letter"></i>
                                <span>{this.state.infoList.Email}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top_nav">
                    <div className="top_nav_center">
                        <Link to="/contact"
                            className="top_nav_center_logo"
                        >
                            <img src={imgUrl + this.state.infoList.Logo} alt="暂无" />
                        </Link>
                        <div className="top_nav_center_tab">
                            {
                                this.state.menuList.map((item, index) => {
                                    return (
                                        <a href="#"
                                            className="item"
                                            key={index}
                                            onClick={this.topage.bind(this)}
                                        >
                                            <div>
                                                <div className="a" href="#">{item.MenuName}</div>
                                                <span className="line"></span>
                                                <div className="out_posi">
                                                    <ul className="level_nav">
                                                        {
                                                            item.children.map((ject, idx) => {
                                                                return (
                                                                    <li key={idx}>
                                                                        {ject.MenuName}
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Header
