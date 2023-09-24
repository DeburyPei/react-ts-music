
import React, {memo} from "react";
import type {ReactNode} from "react";

interface IProps {
    children?:ReactNode,
    name:string,
    age:number,
    height?:number

}

const Download:React.FC<IProps> = (props) =>{
    return (
        <div>
            <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>height:{props.height}</div>
            <div>{props.children}</div>
        </div>
    )
}

export default memo(Download)