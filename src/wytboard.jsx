
import './wytboard.css';
import Attach from './attachment.png';
import PDDDF from './media/img/pdf.png';
import { useState } from 'react';
import { IoMdDownload } from "react-icons/io";
import { Modal } from './modal';
import Barr from './media/img/progressbar.gif';
import { IoCloudDownloadSharp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { BiShieldQuarter } from "react-icons/bi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { GiKeyLock } from "react-icons/gi";


export const WytBoard = ()=>{

    const [mood, setMood] = useState(false);
    const showModal = ()=> {
        setShowImg(true);
        setFecthDok(true);
        setTimeout(() => {
            setShowImg(true);
            setFecthDok(false);
            setPrepare(true);
            setScan(false);
            setFinal(false);
            setAutt(false);

            setTimeout(() => {
                setShowImg(true);
                setFecthDok(false);
                setPrepare(false);
                setScan(true);
                setFinal(false);
                setAutt(false);

                setTimeout(() => {
                    setShowImg(true);
                    setFecthDok(false);
                    setPrepare(false);
                    setScan(false);
                    setFinal(true);
                    setAutt(false);

                    setTimeout(() => {
                        setShowImg(false);
                        setFecthDok(false);
                        setPrepare(false);
                        setScan(false);
                        setFinal(false);
                        setAutt(true);

                        setTimeout(() => {
                            setMood(true);
                        }, 500);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
        // setMood(true);
    };

    const [showImg, setShowImg] = useState(false);
    const [fetchDok, setFecthDok] = useState(false);
    const [prepare, setPrepare] = useState(false);
    const [scan, setScan] = useState(false);
    const [final, setFinal] = useState(false);
    const [autt, setAutt] = useState(false);
    

    const [view, setView] = useState(false);
    const [view1, setView1] = useState(false);
    const [view2, setView2] = useState(false);
    let viewSet = ()=>{
        setView(true);
    };

    const HideSet = ()=>{
        setView(false);
    };

    let viewSet1 = ()=>{
        setView1(true);
    };

    const HideSet1 = ()=>{
        setView1(false);
    };

    let viewSet2 = ()=>{
        setView2(true);
    };

    const HideSet2 = ()=>{
        setView2(false);
    };
    
    

    return<>

        { mood ? <Modal /> : null }

        
        <div className='wytboard'>
            <div className='menu'>
                <div className='f_item'> Edit </div>
                <div className='f_item'> Sign </div>
                <div className='f_item' id='f_itemselected'> View </div>
            </div>

            <div className='img_cont'>
                <img 
                    className='img_item'
                    alt='secured remote attachment'
                    src={Attach}
                    // style={{}}
                />
            </div>


            <div className='majorr'>
                <article className='pdfboxcon___t' onMouseOver={viewSet} onMouseLeave={HideSet}>
                    <img 
                        alt='pdf'
                        className='pppdddff'
                        src={PDDDF}
                    />
                    { view ? <p className='viieeew' onClick={showModal}>View</p> : null }
                    <p className='txt'>Company Profile</p>
                </article>



                <article className='pdfboxcon___t' onMouseOver={viewSet1} onMouseLeave={HideSet1}>
                    <img 
                        alt='pdf'
                        className='pppdddff'
                        src={PDDDF}
                    />
                    { view1 ? <p className='viieeew' onClick={showModal}>View</p> : null }
                    <p className='txt'>Product Desctiption</p>
                </article>  




                <article className='pdfboxcon___t' onMouseOver={viewSet2} onMouseLeave={HideSet2}>
                    <img 
                        alt='pdf'
                        className='pppdddff'
                        src={PDDDF}
                    />
                    { view2 ? <p className='viieeew' onClick={showModal}>View</p> : null }
                    <p className='txt'>RFQ</p>
                </article> 
            </div>

            <div className='dnld'>
                <button onClick={showModal}> <IoMdDownload style={{
                    fontSize:'18px'
                }} /> &#160; Download All</button>
            </div>


            <div className='progres__s_bar_wrappe____r_lbghjkllkjhg'>

                { showImg ? <img alt='loading' src={Barr} style={{width:'100%', height:'70px'}} /> : null }
                
                {fetchDok ? <p className='txt_loading'> <IoCloudDownloadSharp style={{color:'#e32524', fontSize:'17px'}}/> &#160; {`Fetching Documents`}</p> : null }

                { prepare ? <p className='txt_loading'> <BsStars style={{color:'#e32524', fontSize:'17px'}}/> &#160; {`Preparing Documents`}</p> : null }

                { scan ? <p className='txt_loading'> <BiShieldQuarter style={{color:'#e32524', fontSize:'17px'}}/> &#160; {`Scanning Documents for Viruses`}</p> : null }

                { final ? <p className='txt_loading'> <HiOutlineArrowPathRoundedSquare style={{color:'#e32524', fontSize:'17px'}}/> &#160; {`Finalising Documents`}</p> : null }

                { autt ? <p className='txt_loading'> <GiKeyLock style={{color:'#e32524', fontSize:'17px'}}/> &#160; {`Authentication Required`}</p> : null }
            </div>
        </div>
    </>
};