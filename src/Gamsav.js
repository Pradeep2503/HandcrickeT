import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const Gamsav = () => {

    var location=useLocation();
    var tosswplayer=location.state.tosswplayer;
    var tosswchoos=location.state.tosswchoos;
    var tosslplayer=location.state.tosslplayer;

    var navigate=useNavigate();

    const [Sr,setSr]=useState([]);
    var [batscor,setBatscor]=useState(0);
    var [bowlscr,setBowlscor]=useState(0);
    var [wrscr,setWrscr]=useState(0);
    var [wrid,setWrid]=useState("");
    var [hbat,setHbat]=useState("");
    var [hbowl,setHbowl]=useState("");

    useEffect(()=>{
      document.getElementById("tossw").innerHTML=tosswplayer;
      document.getElementById("tossres").innerHTML=tosswchoos;
      document.getElementById("player1").value=tosswplayer;
      document.getElementById("player2").value=tosslplayer;
      document.getElementById("vs").value="VS";
      if(tosswchoos=="bat")
        {
            document.getElementById("bat").innerHTML=tosswplayer;
            document.getElementById("bowl").innerHTML=tosslplayer;
            document.getElementById("batsplayer").innerHTML=tosswplayer;
            document.getElementById("bowlplayer").innerHTML=tosslplayer;
            document.getElementById("batplas").innerHTML=tosslplayer;
            document.getElementById("bowlplas").innerHTML=tosswplayer;
        }
      else if(tosswchoos=="bowl")
        {
          document.getElementById("bowl").innerHTML=tosswplayer;
          document.getElementById("bat").innerHTML=tosslplayer;
          document.getElementById("batsplayer").innerHTML=tosslplayer;
          document.getElementById("bowlplayer").innerHTML=tosswplayer;
          document.getElementById("batplas").innerHTML=tosswplayer;
          document.getElementById("bowlplas").innerHTML=tosslplayer;
        }
    }
    ,[])

    useEffect(()=>{
      document.getElementById("rusc").innerHTML=batscor;
      document.getElementById("tgchs").innerHTML=bowlscr;
      document.getElementById("a1").innerHTML=Sr.length>0 && Sr.length-1>=0 ?Sr[Sr.length-1].sa:"-"
      document.getElementById("a2").innerHTML=Sr.length>0 && Sr.length-2>=0 ?Sr[Sr.length-2].sa:"-"
      document.getElementById("a3").innerHTML=Sr.length>0 && Sr.length-3>=0 ?Sr[Sr.length-3].sa:"-"
      document.getElementById("a4").innerHTML=Sr.length>0 && Sr.length-4>=0 ?Sr[Sr.length-4].sa:"-"
      document.getElementById("a5").innerHTML=Sr.length>0 && Sr.length-5>=0 ?Sr[Sr.length-5].sa:"-"
      document.getElementById("a6").innerHTML=Sr.length>0 && Sr.length-6>=0 ?Sr[Sr.length-6].sa:"-"

      document.getElementById("s1").innerHTML=Sr.length>0 && Sr.length-1>=0 ?Sr[Sr.length-1].as:"-"
      document.getElementById("s2").innerHTML=Sr.length>0 && Sr.length-2>=0 ?Sr[Sr.length-2].as:"-"
      document.getElementById("s3").innerHTML=Sr.length>0 && Sr.length-3>=0 ?Sr[Sr.length-3].as:"-"
      document.getElementById("s4").innerHTML=Sr.length>0 && Sr.length-4>=0 ?Sr[Sr.length-4].as:"-"
      document.getElementById("s5").innerHTML=Sr.length>0 && Sr.length-5>=0 ?Sr[Sr.length-5].as:"-"
      document.getElementById("s6").innerHTML=Sr.length>0 && Sr.length-6>=0 ?Sr[Sr.length-6].sa:"-"

    },[Sr,batscor,bowlscr])

   

    function chvis()
    {
        document.getElementById("bato").style.display="none";
        document.getElementById("inputo").style.visibility="visible";
        document.getElementById("inputt").style.visibility="visible";
        document.getElementById("inputo").focus();
        var sit;
        sit=setInterval(()=>{
          if(document.getElementById("inputo").value!="" && document.getElementById("inputt").value!="")
            {
            var i1=Number(document.getElementById("inputo").value);
            var i2=Number(document.getElementById("inputt").value);
            if(i1<1 || i1>9)
              {
                  window.alert(`${tosswplayer} input is ${i1} - INVALID INPUT`)
                  document.getElementById("inputo").value="";
                  document.getElementById("inputt").value="";
                  document.getElementById("inputo").focus();
              }



              else if(i2<1 || i2>9)
              {
                  window.alert(`${tosslplayer} input is ${i2} - INVALID INPUT`)
                  document.getElementById("inputo").value="";
                  document.getElementById("inputt").value="";
                  document.getElementById("inputo").focus();
              }



              else if((i1>=1 && i1<=9) && (i2>=1 && i2<=9))
              {
   
                  if(i1!=i2)
                  {
                      batscor=batscor+i1;
                      setBatscor(batscor);
                      document.getElementById("inputo").value="";
                      document.getElementById("inputt").value="";
                      console.log(batscor);
                      var obj={sa:i1,as:i2}
                      Sr.push(obj);
                      setSr(Sr);
                      console.log(Sr);
                  }



                  else
                  {
                    setSr([]);
                    clearInterval(sit);
                    document.getElementById("inputo").value="";
                    document.getElementById("inputt").value=""; 
                    document.getElementById("inputo").blur();
                    document.getElementById("runscor").innerHTML=batscor;
                    document.getElementById("cards").style.visibility="visible";
                    document.getElementById("target").style.visibility="visible";
                    document.getElementById("batsec").style.display="";
                    document.getElementById("inputo").style.visibility="hidden";
                    document.getElementById("inputt").style.visibility="hidden"; 
                    var tmp=document.getElementById("bat").innerHTML;
                    document.getElementById("bat").innerHTML=document.getElementById("bowl").innerHTML
                    document.getElementById("bowl").innerHTML=tmp; 
                    console.log(batscor);
                  }
              }
            }
        },1000)
    

    }


    function chtg()
    {
      document.getElementById("batsec").style.display="none";
      document.getElementById("inputo").style.visibility="visible";
      document.getElementById("inputt").style.visibility="visible";
      document.getElementById("inputo").focus();
      var sit;
      sit=setInterval(()=>{
        if(document.getElementById("inputo").value!="" && document.getElementById("inputt").value!="")
          {
          var i1=Number(document.getElementById("inputo").value);
          var i2=Number(document.getElementById("inputt").value);
          if(i1<1 || i1>9)
            {
                window.alert(`${tosslplayer} input is ${i1} - INVALID INPUT`)
                document.getElementById("inputo").value="";
                document.getElementById("inputt").value="";
                document.getElementById("inputo").focus();
            }
            else if(i2<1 || i2>9)
            {
                window.alert(`${tosswplayer} input is ${i2} - INVALID INPUT`)
                document.getElementById("inputo").value="";
                document.getElementById("inputt").value="";
                document.getElementById("inputo").focus();
            }
            else if((i1>=1 && i1<=9) && (i2>=1 && i2<=9))
            {
                
                if(i1!=i2 && bowlscr<=batscor)
                {
                    bowlscr=bowlscr+i1;
                    setBowlscor(bowlscr);
                    var obj={sa:i1,as:i2}
                    Sr.push(obj);
                    setSr(Sr);
                    document.getElementById("inputo").value="";
                    document.getElementById("inputt").value="";
                    console.log(bowlscr);
                    if(bowlscr>batscor)
                      {
                        setSr([])
                        clearInterval(sit);
                        document.getElementById("inputo").value="";
                        document.getElementById("inputt").value=""; 
                        document.getElementById("inputo").blur();
                        document.getElementById("bowlruscor").innerHTML=bowlscr;
                        document.getElementById("cardsts").style.visibility="visible";
                        document.getElementById("mt").style.visibility="visible";
                        document.getElementById("svbt").style.visibility="visible";
                        setWrscr(bowlscr);
                        setWrid(document.getElementById("bat").innerHTML);
                      }
                }
                else
                {
                  setSr([])
                  clearInterval(sit);
                  document.getElementById("inputo").value="";
                  document.getElementById("inputt").value=""; 
                  document.getElementById("inputo").blur();
                  document.getElementById("bowlruscor").innerHTML=bowlscr;
                  document.getElementById("cardsts").style.visibility="visible";
                  document.getElementById("mt").style.visibility="visible";
                  document.getElementById("svbt").style.visibility="visible";
                  setWrscr(batscor);
                  setWrid(document.getElementById("bowl").innerHTML);
                }
            }
          }
      },1000)
    }

    function sv(winners,runs)
    {
      axios.post("https://ht-app-bk-s.onrender.com", { winners,runs })
      .then((result) => console.log(result))
      .catch((result) => console.log(result));

      navigate("/");

    }
    
    /* s */

  return (
    <div className='flex flex-row'>
      <div className='bg-gradient-to-l from-gray-800 to-black basis-4/5 h-dvh '>
      <p className='h-auto text-2xl text-white italic '>
           <span> LETS START THIS GAME -     </span>  <span id="tossw" className='uppercase underline'></span> 
           <span className='pl-2'>WON THE TOSS & DECIDED TO </span> <span id="tossres" className='pl-2 uppercase underline '></span>
      </p>
      <div className='pt-5 pb-5 '>
        <input id="player1" type="text" class="pl-8 uppercase italic text-sky-800"/> <span className='pl-10' /> 
        <input id="vs" size="1" className='text-center'/> <span className='pl-10'/>
        <input id="player2" type="text" class="pl-8 uppercase italic text-sky-800"/>
      </div>




      <div className='flex flex-row h-5/6 '>
        <div className='basis-1/2 pt-5 border border-sky-100'>
          <div className='bg-sky-100 text-black'>
            <span id="bat" type="text" class="pl-7 uppercase italic  text-xl" > </span> 
            <span className='text-xl '> - BATSMAN </span>
          </div>
            <br/>
            <br/>
            <div style={{height:"20%"}}>
            <button id="bato" onClick={chvis} class=" w-1/6 justify-center rounded-md  bg-sky-100 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out ">
            START</button>
            <button  id="batsec" onClick={chtg}  style={{display:"none"}} class=" w-1/6 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out ">
            START 
            </button>
            <input id="inputo" type="password" style={{visibility:"hidden"}} onChange={()=>document.getElementById("inputt").focus()} size="2" class=" uppercase italic text-sky-800 text-center"/> 
            </div>
            <div className='pt-8 pb-2 text-sky-100 '>
              RUNS SCORED - LAST 6 BALLS
            </div>
            <div className=' grid grid-cols-6 gap-6 justify-center mr-2 ml-8 '> 
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="a1"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="a2"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="a3"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="a4"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="a5"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="a6"></div>
             
            </div>





        </div>
        <div className='basis-1/2 pt-5 border border-sky-100'>
          <div className='bg-sky-100 text-black'>
            <span id="bowl" type="text" class="pl-7 uppercase italic  text-xl "> </span> 
            <span className=' text-xl '> - BOWLER </span> 
          </div> 
            <br/>
            <br/>
            <div style={{height:"20%"}}>
            <button style={{display:"none"}} class="w-1/4 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out ">
            START 
            </button>
            <button style={{display:"none"}} class="w-1/4 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out ">
            START 
            </button>
            <input id="inputt" type="password" style={{visibility:"hidden"}} onChange={()=>document.getElementById("inputo").focus()} size="2" class=" uppercase italic text-sky-800 text-center"/> 
            </div>
            <div className='pt-8 pb-2 text-sky-100 '>
              USED NUMBERS BY BOWLER - LAST 6 BALLS
            </div>
            <div className=' grid grid-cols-6 gap-6 h-auto mr-2 ml-8 '>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="s1"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="s2"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="s3"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="s4"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="s5"></div>
            <div class="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono"
             style={{height:"35px", width:"35px"}} id="s6"></div>     


            </div>


        </div>
      </div>

      </div>




      <div className='basis-1/5 h-dvh '>
          <div className='text-sky-950 underline italic text-xl'>
              SCORECARD
          </div>

          <div className='pt-4 underline italic text-xl'>
            PHASE - 1
          </div>

          <div className='pt-6 text-center'>
              <table className='border border-collapse border-sky-950' style={{width:"100%"}}>
                <tr>
                  <td className=' border border-sky-950'>BATSMAN</td> <td id="batsplayer" className=' border border-sky-950 uppercase '></td>
                </tr>
                <tr>
                  <td className=' border border-sky-950'>BOWLER</td>  <td id="bowlplayer" className=' border border-sky-950 uppercase  '></td>
                </tr>
                <tr>
                  <td className=' border border-sky-950'>SCORE</td>  <td id="rusc" className=' border border-sky-950 uppercase bg-sky-100'></td>
                </tr>
              </table>
          </div>

          <div  className='border border-collapse border-sky-950 text-xl m-7 bg-sky-100 ' id="cards" style={{visibility:"hidden"}}>
                BATSMAN GONE - RUN SCORED <span id="runscor"> </span>
          </div>

          <div id="target" style={{visibility:"hidden"}}  className='border border-collapse border-sky-950 text-xl m-7 bg-sky-100' >
            <span> TARGET - </span> <span>{batscor+1}</span> 
          </div>

          <div className='pt-4 underline italic text-xl'>
            PHASE - 2
          </div>

          <div className='pt-6 text-center'>
              <table className='border border-collapse border-sky-950' style={{width:"100%"}}>
                <tr>
                  <td className=' border border-sky-950'>BATSMAN</td> <td id="batplas" className=' border border-sky-950 uppercase '></td>
                </tr>
                <tr>
                  <td className=' border border-sky-950'>BOWLER</td>  <td id="bowlplas" className=' border border-sky-950 uppercase  '></td>
                </tr>
                <tr>
                  <td className=' border border-sky-950'>SCORE</td>  <td id="tgchs" className=' border border-sky-950 uppercase bg-sky-100'></td>
                </tr>
              </table>
          </div>

          <div  className='border border-collapse border-sky-950 text-xl m-7 bg-sky-100 ' id="cardsts" style={{visibility:"hidden"}}>
                BATSMAN GONE - RUN SCORED <span id="bowlruscor"> </span>
          </div>

          <div id="mt"  className='border border-collapse border-sky-950 text-xl m-7 bg-sky-100 ' style={{visibility:"hidden"}}>
               <span>MATCH WINNER - </span>  <span className='uppercase'>{wrid}</span> <span>  RUN SCORED - </span>  <span>{wrscr}</span>
          </div>

          <div id="svbt" className='mb-8 bg-sky-100' style={{visibility:"hidden"}}>
          <button onClick={()=>{sv(wrid,wrscr)}} class="  w-6/6 justify-center rounded-md  bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out ">
            SAVE</button>
          </div>



      </div>
    </div>




  )
}



export default Gamsav









