import React, {memo} from "react";
import type {FC,ReactNode} from "react";
interface IProps {
    children?:ReactNode,
}
const AppFooter:FC<IProps> = () =>{
    return (
        <div>
          <h1>这是Footer</h1>
        </div>
    )
}
export default memo(AppFooter)


