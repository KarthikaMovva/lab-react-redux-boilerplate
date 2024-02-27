import {useDispatch,useSelector} from "react-redux";
import Actions from "./Actions";

function State(){
    const number=useSelector((num)=>num)
    const unpack=useDispatch()
    return(
        <>
        <h2>{number}</h2>
        <button onClick={()=>{unpack(Actions.Increment())}} >Like</button>
        <button onClick={()=>{unpack(Actions.Decrement())}} >Unlike</button>
        </>
    )
}
export default State;