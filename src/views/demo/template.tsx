import React, {memo} from "react";
import type {FC,ReactNode} from "react";
interface IProps {
    children?:ReactNode,
}
const demo:FC<IProps> = () =>{
    return (
        <div>
          demo
        </div>
    )
}
export default memo(demo)


