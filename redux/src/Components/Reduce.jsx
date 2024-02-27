function Reduce(num=0,act){
    if(act.type==="INC"){
       return num+1
    }else if(act.type==="DEC"){
       if(num>0){
       return num-1;}
    else{
       return 0;
    }
   }else{
       return num;
   }
   }
   export default Reduce