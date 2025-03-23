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
        let animationId;
        let fillProgress = 0;

        canvas.width = 140;
        canvas.height = 140;

        const drawLightning = (progress = 0) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 绘制阴影
            if (progress > 0) {
                ctx.shadowColor = '#331747' + Math.floor((128 * progress + 128)).toString(16);
                ctx.shadowBlur = 50 * progress;  // 增加模糊范围
                ctx.shadowOffsetX = 8 * progress;  // 增加水平偏移
                ctx.shadowOffsetY = 8 * progress;  // 增加垂直偏移
            } else {
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
            }

            // 绘制轮廓
            ctx.beginPath();
            ctx.moveTo(70, 30);
            ctx.lineTo(50, 70);
            ctx.lineTo(70, 70);
            ctx.lineTo(70, 100);
            ctx.lineTo(90, 60);
            ctx.lineTo(70, 60);
            ctx.closePath();
            ctx.strokeStyle = 'rebeccapurple';
            ctx.lineWidth = 2;
            ctx.stroke();

            // 绘制填充
            if (progress > 0) {
                ctx.shadowColor = 'transparent'; // 填充不需要阴影
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(70, 30);
                ctx.lineTo(50, 70);
                ctx.lineTo(70, 70);
                ctx.lineTo(70, 100);
                ctx.lineTo(90, 60);
                ctx.lineTo(70, 60);
                ctx.closePath();
                ctx.clip();

                const gradient = ctx.createLinearGradient(0, 100, 0, 30);
                gradient.addColorStop(0, 'rebeccapurple');
                gradient.addColorStop(progress, 'rebeccapurple');
                gradient.addColorStop(progress, 'transparent');
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
            }
        };

        const animate = () => {
            fillProgress += 0.015; // 调整为1.5秒
            if (fillProgress <= 1) {
                drawLightning(fillProgress);
                animationId = requestAnimationFrame(animate);
            }
        };

        // 初始绘制
        drawLightning();

        // hover事件处理
        canvas.addEventListener('mouseenter', () => {
            fillProgress = 0;
            animate();
        });

        canvas.addEventListener('mouseleave', () => {
            cancelAnimationFrame(animationId);
            fillProgress = 0;
            drawLightning();
        });

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="NewContainer">
            <div className="Login">
                <Link>Log in</Link>
            </div>
            <div className="Card">
                <div className="CardLeft">
                    <div className="CardLeftTop">
                        <h1><span>M</span><span>d</span>r</h1>
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
                        <p>
                            <span>T</span>
                            <span>u</span>toriaL</p>
                        <div>
                            <FaArrowRight />
                        </div>
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