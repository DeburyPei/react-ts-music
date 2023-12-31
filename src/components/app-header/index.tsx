import React, {memo} from "react";
import type {FC,ReactNode} from "react";

import {HeaderWrapper,HeaderLeft,HeaderRight} from "@/components/app-header/style";
import headerTitles from '@/assets/data/header_titles.json'
import {NavLink} from "react-router-dom";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
interface IProps {
    children?:ReactNode,
}
const AppHeader:FC<IProps> = () =>{
    function showItemOrLink(item:any){
        if(item.type ==='path'){
            return <NavLink to={item.link}
                            className={({isActive})=>{return isActive ? 'active':undefined}
            }>
                {item.title}
                <i className="icon sprite_01"></i>
            </NavLink>
        }else if(item.type === 'link') {
            return <a href={item.link} rel="noreferrer" target="_blank">
                {item.title}
            </a>
        }
    }
    return (
        <HeaderWrapper>
            <div className="content wrap-v1" >
                <HeaderLeft>
                    <a href="" className="logo sprite_01">网易云音乐</a>
                    <div className="title-list">
                        { headerTitles.map(item=>{
                            return <div className="item" key={item.title}>
                                {showItemOrLink(item)}
                            </div>
                        })}
                    </div>
                </HeaderLeft>

                <HeaderRight>

                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <span className="center">创作者中心</span>
                    <span className="login">登录</span>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
}
// <Link to="/discover">发现音乐</Link>
// <Link to="/mine">我的音乐</Link>
// <Link to="/focus">关注</Link>
// <Link to="/download">下载客户端</Link>
export default memo(AppHeader)


