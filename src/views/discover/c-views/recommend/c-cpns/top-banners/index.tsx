import React, {memo} from "react";
import type {FC,ReactNode} from "react";
import {BannerWrapper} from "@/views/discover/c-views/recommend/c-cpns/top-banners/index";
interface IProps {
    children?:ReactNode,
}
const TopBanner:FC<IProps> = () =>{

    return (
        <BannerWrapper>
          TopBanner
        </BannerWrapper>
    )
}
export default memo(TopBanner)


