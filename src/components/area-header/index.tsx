import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import {HeaderV1Wrapper} from "@/components/area-header/style";
interface IProps {
    children?:ReactNode,
    title?:string,
    keywords?:string[],
    moreText?:string,
    moreLink?:string
}
const AreaHeaderV1:FC<IProps> = (props) =>{
    const {
        title = '默认标题',
        keywords = [],
        moreText = '更多',
        moreLink = '/'
    } = props
    return (
        <HeaderV1Wrapper className="sprite_02">
          <div className="left">
              <h3 className="title">{title}</h3>
              <div className="keywords">
                  {keywords.map((item)=>{
                      return (
                          <div className="item" key={item}>
                              <span className="text">{item}</span>
                              <span className="divider">|</span>
                          </div>
                      )
                  })}
              </div>
          </div>
            <div className="right">
                <a href={moreLink} className="more">{moreText}</a>
                <i className="sprite_02 icon"></i>
            </div>
        </HeaderV1Wrapper>
    )
}
export default memo(AreaHeaderV1)


