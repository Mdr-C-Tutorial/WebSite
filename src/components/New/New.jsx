import React, { useEffect, useRef } from 'react';
import './New.css';
import Search from '../Nav/Search';
import { FaArrowRight, FaAward } from 'react-icons/fa6';
import { FaGithub, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DiVisualstudio } from 'react-icons/di';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { LuTextCursor } from 'react-icons/lu';
import { MdSurfing } from 'react-icons/md';
import { SiCompilerexplorer } from 'react-icons/si';
import { VscReferences } from 'react-icons/vsc';

const New = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // 设置canvas尺寸
        canvas.width = 140;
        canvas.height = 140;

        // 绘制闪电函数
        const drawLightning = (fill = false) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(70, 30);  // 顶点
            ctx.lineTo(50, 70);  // 左上
            ctx.lineTo(70, 70);  // 左中
            ctx.lineTo(70, 100);  // 中点
            ctx.lineTo(90, 60);  // 右下
            ctx.lineTo(70, 60);  // 右中
            ctx.closePath();

            if (fill) {
                ctx.fillStyle = 'rebeccapurple';
                ctx.fill();
                ctx.strokeStyle = 'rebeccapurple';
                ctx.lineWidth = 2;
                ctx.stroke();
            } else {
                ctx.strokeStyle = 'rebeccapurple';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        };

        // 初始绘制
        drawLightning();

        // 添加hover事件
        canvas.addEventListener('mouseenter', () => drawLightning(true));
        canvas.addEventListener('mouseleave', () => drawLightning(false));
    }, []);

    return (
        <div className="NewContainer">
            <div className="Login">
                <Link>Log in</Link>
            </div>
            <div className="Card">
                <div className="CardLeft">
                    <div className="CardLeftTop">
                        <h1><span>M</span>dr</h1>
                    </div>
                    <div className="CardLeftMiddle">
                        <div className="CLogo">
                            <div className="Hider"></div>
                            <div className="Lightning">
                                <canvas ref={canvasRef} className="LightningCanvas"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="CardLeftBottom">
                        <p>Tutorial</p>
                        <FaArrowRight />
                    </div>
                </div>
                <div className="CardRight">
                    <Search />
                    <div className="CardRightParas">
                        <p><Link>Open-source</Link>&nbsp;&nbsp;and&nbsp;&nbsp;<span>Free</span>.</p>
                        <p><Link>Online Judge</Link>&nbsp;&nbsp;and&nbsp;&nbsp;<Link>Forum</Link>.</p>
                        <p><Link>QQ Group</Link>&nbsp;&nbsp;and&nbsp;&nbsp;<Link>Discord Channel</Link>.</p>
                    </div>
                    <div className="CardRightLogos">
                        <Link><FaGithub /></Link>
                        <div className="CardRightToolBar">

                            <FaTools className="CardRightToolBarMain" />
                            <div className="CardRightToolBarHidden">
                                <Link><DiVisualstudio /></Link>
                                <Link><BiLogoVisualStudio /></Link>
                                <Link><LuTextCursor /></Link>
                                <Link><MdSurfing /></Link>
                                <Link><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M27.4343 0H0.565657C0.253253 0 0 0.253253 0 0.565657V27.4343C0 27.7467 0.253253 28 0.565657 28H27.4343C27.7467 28 28 27.7467 28 27.4343V0.565657C28 0.253253 27.7467 0 27.4343 0Z" fill="#FF4A36"></path><path d="M22.9121 19.8093H13.8616V22.9091H22.9121V19.8093Z" fill="white"></path></svg></Link>
                            </div>
                        </div>
                        <Link><FaAward /></Link>
                        <Link><SiCompilerexplorer /></Link>
                        <Link><VscReferences /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;