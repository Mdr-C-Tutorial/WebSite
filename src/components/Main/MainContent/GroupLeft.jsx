import './GroupLeft.css'
import { VscChromeClose, VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { TbMessageCirclePlus } from 'react-icons/tb';
import { BsEmojiSmile } from 'react-icons/bs';
import { GoFileSymlinkFile } from 'react-icons/go';
import { SlPicture } from 'react-icons/sl';
import { LuClock3 } from 'react-icons/lu';
import { RxAvatar } from 'react-icons/rx';

function GroupLeft() {
    return (
        <div className="GroupLeft">
            <div className="GroupLeftTop">
                <VscChromeMinimize />
                <VscChromeMaximize />
                <VscChromeClose />
            </div>
            <div className="GroupLeftNav">
                <div className="GroupLeftNavLeft">
                    <p>mdr 的 Coding 小窝 (100)</p>
                </div>
                <div className="GroupLeftNavRight">
                    <MdOutlineLocalPhone />
                    <TbMessageCirclePlus />
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
            <div className="GroupLeftContent">
                <div className="GroupLeftContentLeft">
                    <div className="GroupLeftContentLeftTop">
                        <div className="MessageItem">
                            <div className="MessageItemLeft">
                                <RxAvatar />
                            </div>
                            <div className="MessageItemRight">
                                <div className="Nickname">mdr</div>
                                <div className="MessageContent">{`int main(int argc, char* argv[]) { }`}</div>
                            </div>
                        </div>
                    </div>
                    <div className="GroupLeftContentLeftBottom">
                        <div className="GroupLeftContentLeftBottomFunctions">
                            <div className="GroupLeftContentLeftBottomFunctionsLeft">
                                <BsEmojiSmile />
                                <GoFileSymlinkFile />
                                <SlPicture />
                            </div>
                            <div className="GroupLeftContentLeftBottomFunctionsRight">
                                <LuClock3 />
                            </div>
                        </div>
                        <div className="GroupLeftContentLeftBottomButtons">
                            <div className="Button1">关闭</div>
                            <div className="Button2">发送</div>
                        </div>
                    </div>
                </div>
                <div className="GroupLeftContentRight">
                    <div className="GroupLeftContentRightTop">
                        <h6>C23 更新</h6>
                        <p>&lt;stdbit.h&gt;, attributes, ...</p>
                    </div>
                    <div className="GroupLeftContentRightBottom">
                        <h6>编译器消息</h6>
                        <p>Clang v20.0 Released</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupLeft;