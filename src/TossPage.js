import React from 'react'
import { useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TossPage = () => {
  var location=useLocation();
  var hs=location.state.hs;
  var winarrays=location.state.winarrays;
  var player1_id=location.state.player1_name;
  var player2_id=location.state.player2_name;

  var tosswplayer, tosslplayer;


  var ct=0;
  const highscorelist=hs.map((hslist)=>{
    ct++;
    if(ct<=10)
    {
    return(
      <tr>
        <td className='border border-sky-800'>{ct}</td>
      <td className='border border-sky-800'>{hslist.winners}</td>
      <td className='border border-sky-800'>{hslist.runs}</td>
      </tr>
    )
    }
  })

  var wct=0;
  const highwinslist=winarrays.map((wlist)=>{
    wct++;
    if(wct<=10)
    {
    return(
      <tr>
        <td className='border border-sky-800'>{wct}</td>
      <td className='border border-sky-800'>{wlist[0]}</td>
      <td className='border border-sky-800'>{wlist[1]}</td>
      </tr>
    )
    }
  })

    useEffect(()=>{document.getElementById("player1").value=player1_id;
    document.getElementById("vs").value="VS"
    document.getElementById("player2").value=player2_id;
    document.getElementById("player1_show").innerHTML=player1_id;
    document.getElementById("chooseplayer1").innerHTML=player1_id;
    document.getElementById("getplayer1").innerHTML=player1_id;
    document.getElementById("getplayer2").innerHTML=player2_id},[])


    function slt(clk)
    {
      let st;
      document.getElementById("tossres").value=clk; 
      document.getElementById("showcontent").style.visibility="visible";
      document.getElementById("tossinput1").focus();
      st=setInterval(()=>{
          if(document.getElementById("tossinput1").value!="" && document.getElementById("tossinput2").value!="")
          {
          var i1=Number(document.getElementById("tossinput1").value);
          var i2=Number(document.getElementById("tossinput2").value);
          if(i1<1 || i1>9)
          {
              window.alert(`${player1_id} input is ${i1} - INVALID INPUT`)
              document.getElementById("tossinput1").value="";
              document.getElementById("tossinput2").value="";
          }
          else if(i2<1 || i2>9)
          {
              window.alert(`${player2_id} input is ${i2} - INVALID INPUT`)
              document.getElementById("tossinput1").value="";
              document.getElementById("tossinput2").value="";
          }
          else if((i1>=1 && i1<=9) && (i2>=1 && i2<=9))
          {
              document.getElementById("tossinput1").blur();
              var res=i1+i2;
              if((res%2==0 && clk=="even") || (res%2!=0 && clk=="odd"))
              {
                  document.getElementById("tossw").innerHTML=" "+player1_id+" ";
                  tosswplayer=player1_id;
                  tosslplayer=player2_id;
              }
              else
              {
                  document.getElementById("tossw").innerHTML=" "+player2_id+" ";
                  tosswplayer=player2_id;
                  tosslplayer=player1_id;
              }
              clearInterval(st);
          }
        }
      },1000)  
    }

    const navigate=useNavigate();
    function gotogamsav(choos)
    {
      navigate("/GAMSAV",{state:{tosswplayer:tosswplayer, tosswchoos:choos, tosslplayer:tosslplayer}})
    }

  return (
    <div>

    <div className='flex flex-row h-lvh'>
      <div className=' basis-2/3 bg-gradient-to-l from-gray-800 to-black'>
      <header className='h-10 text-2xl p-2 font-serif underline text-white italic'>
             ITS TIME TO CHOOSE - EVEN OR ODD
      </header>
      <div className='pt-10'>
        <input id="player1" type="text" class="pl-8 uppercase italic text-sky-800"/> <span className='pl-10' /> 
        <input id="vs" size="1" className='text-center'/> <span className='pl-10'/>
        <input id="player2" type="text" class="pl-8 uppercase italic text-sky-800"/>
      </div>
      <br/>
      <div className='pt-5'>
        <span className='italic text-white text-xl '> LETS BEGIN THIS MATCH - PLAYER1 </span> 
        <span id="player1_show" className='text-white text-xl pl-2 uppercase italic underline decoration-solid'></span> <span className='text-white pl-2 italic text-xl uppercase'> will choose even or odd </span>
      </div>
      <br/>

      <div className='text-center'>
      <button onClick={()=>{slt("even")}} class="w-1/4 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
        EVEN
      </button>

      <span className='pl-10'></span>

      <button onClick={()=>{slt("odd")}} class="w-1/4 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
        ODD
      </button>
      <br/>
      <br/>

      <span className='text-white italic text-xl pt-10'>PLAYER1 </span><span id="chooseplayer1" className='text-white italic text-xl uppercase underline decoration-solid'></span>
      <span className='text-white italic pl-2 text-xl'>CHOOSEN </span> <input text="text" size="4" id="tossres" className="uppercase italic pl-2 text-sky-800" />
      </div>

      <br/>

      <div className='text-white' id="showcontent" style={{visibility:"hidden"}}>
        <p className='text-sm'>Important: Inputs will be collected and checked at every 2-second intervals.
           If the inputs meet all the conditions, the process will proceed; otherwise, you will need to provide your inputs again, and the process will repeat.
           The input wants to be a number and it must lies between 1 and 9.
        </p>
        <br/>
        <span id="getplayer1" className='uppercase italic text-xl'></span> <span className='uppercase italic text-xl pr-2'> - ENTER A NUMBER</span> 
        <input id="tossinput1" type="password" onChange={()=>document.getElementById("tossinput2").focus()} size="2" class=" uppercase italic text-sky-800 text-center"/>
        <br/>
        <br/>
        <span id="getplayer2" className='uppercase italic text-xl'></span> <span className='uppercase italic text-xl pr-2'> - ENTER A NUMBER</span> 
        <input id="tossinput2" type="password" onChange={()=>document.getElementById("tossinput1").focus()} size="2" class=" uppercase italic text-sky-800 text-center"/>
        <br/>
        <br/>
        <span id="tossw" className='text-xl uppercase italic bg-white text-black'></span> 
        <span className='italic text-xl bg-white text-black'> WON THE TOSS - SELECT BAT OR BOWL </span> 
        <br/>
        <br/>
        <br/>
        <div className='text-center'>
        <button onClick={()=>gotogamsav("bat")} class="w-1/4 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
        BAT 
        </button>

        <span className='pl-10'></span>

        <button onClick={()=>gotogamsav("bowl")} class="w-1/4 justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
        BOWL
        </button>
        </div>


      </div>

      </div>


      <div className='grid grid-rows-2 basis-1/3'>
          <div className=''>
            <div className=' text-white bg-sky-950'>
            HIGHEST RUN SCORERS - TOP 10
            </div>
            Only winners will be shown in the leaderboard
            <div style={{overflow:"scroll", height:"90%"}} className='pt-5'>
            <table className='border-collapse uppercase border border-sky-500' style={{"width":"100%"}}>
            {highscorelist}
            </table>
            </div>
          </div>


          <div className=''>
            <div className=' text-white bg-sky-950'>
              HIGHEST WINS BY A INDIVIDUAL- TOP 10
            </div>
            <div style={{overflow:"scroll", height:"90%"}} className='pt-5'>
            <table className='border-collapse uppercase border border-sky-500' style={{"width":"100%"}}>
            {highwinslist}
            </table>
            </div>
          
            
          </div>
      </div>

    </div>

    </div>
  )
}

export default TossPage
