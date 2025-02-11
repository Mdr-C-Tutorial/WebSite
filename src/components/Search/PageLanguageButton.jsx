import './PageLanguageButton.css';

function PageLanguageButton({ hook }) {
    function switchLanguage() {
        if (document.getElementById("LanguageContainer").style.flexDirection !== "row-reverse") {
            // 改成英文
            document.getElementById("LanguageChinese").style.color = "#555";
            document.getElementById("LanguageEnglish").style.color = "rebeccapurple";
            document.getElementById("LanguageContainer").style.flexDirection = "row-reverse";
            hook(1);
        } else {
            // 改成中文
            document.getElementById("LanguageChinese").style.color = "rebeccapurple";
            document.getElementById("LanguageEnglish").style.color = "#555";
            document.getElementById("LanguageContainer").style.flexDirection = "row";
            hook(0);
        }
    }
    return (
        <span className="PageLanguageButton">
            <p id="LanguageText">跳转链接：</p>
            <p id="LanguageChinese">中文</p>
            <div className="LanguageContainer"
                id="LanguageContainer"
                onClick={switchLanguage}>
                <div className="LanguageBall" id="LanguageBall"></div>
            </div>
            <p id="LanguageEnglish">English</p>
        </span>
    )
}
export default PageLanguageButton;