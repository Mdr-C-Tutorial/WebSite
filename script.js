'use strict';

const UINT64_MAX = (2n ** 64n) - 1n;
let n = 1n;

const nValueDisplay = document.getElementById('n-value');
const contentArea = document.getElementById('content-area');

const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnMultiply2 = document.getElementById('btn-multiply-2');
const btnModulo3 = document.getElementById('btn-modulo-3');
const btnDivide2 = document.getElementById('btn-divide-2');
const btnAdd5 = document.getElementById('btn-add-5');
const btnSquare = document.getElementById('btn-square');
const btnSquareRoot = document.getElementById('btn-square-root');
const btnBack = document.getElementById('btn-back');

const pageContent = {
    '0': `
        <h2>制作团队</h2>
        <p>如果没有 Ta 们的助力，此教程不会有完整的内容和灵魂。</p>
        <div style="margin-top: 3rem;">
            <p>Mdr-C-Tutorial &copy; 2023-2025. All rights reserved.</p>
        </div>
    `,
    '1': `
        <div style="text-align: center;">
            <h1 id="huge-title" style="font-size: 6em;">Mdr-C-Tutorial</h1>
            <p style="font-size: 1.3em; font-weight: 400; color: #444;">Click <code onClick="performOperation('++')">++<kbd>ArrowUp</kbd></code> or <code onClick="performOperation('--')">--<kbd>ArrowDown</kbd></code> to start or <a href="https://mdr.aymao.com/C/">查看文档<kbd>Enter</kbd></a></p>
        </div>
    `,
    '2': `
        <h2>教程内容</h2>
        <section><h3>语法和标准库</h3>
        <section><h3>算法和数据结构</h3>
        <section><h3>项目开发</h3>
        <section><h3>嵌入式开发</h3>
        <section><h3>习题</h3>
        <section><h3>标准文档翻译</h3>
        <section><h3>折枝杂谈</h3>
    `,
    '3': `
        <h2>配套设施</h2>
        <section><h3>B 站视频</h3>
        <section><h3>MdrForum</h3>
        <section><h3>MdrOJ</h3>
        <section><h3>在线 UDE</h3>
        <section><h3>QQ 群</h3>
        <section><h3>GitHub 组织</h3>
        `,
    '4': `
        <h2>n 是 <code>uint64_t</code> 类型。</h2>
        `,
    '5': `
        <p style="max-width: 80vw;"> 37 42 127 255 314 404 433 1024 1972 1978 32767 65535 299792458 885719573 2147483647 4294967295 9223372036854775807 18446744073709551615</p>
    `,
    '37': `<h3 style:"font-weight: 400;">记得多喝热水！</h3>`,
    '42': `
        <h1 style="font-size: 7em;">42</h1>
    `,
    '127': `<h3 style:"font-weight: 400;">这是 8 位有符号整数的最大值。</h3>`,
    '255': `<h3 style:"font-weight: 400;">这是 8 位无符号整数的最大值。</h3>`,
    '314': `
        <h2><code>#define PI 3.141592653589793</code></h2>
        <p style="max-width: 80vw; max-height:50vh; overflow:scroll; overflow-wrap: break-word;"><strong>3.</strong>14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680661300192787661119590921642019893809525720106548586327886593615338182796</p>
    `,
    '404': `
        <h3>404 Not Found</h3>
    `,
    '433': `
    `,
    '1024': `
        <div class="easter-egg">
            <h2>n = 1024，致敬每一位程序员！</h2>
            <p>1024 是 2 的 10 次方，是计算机世界中最基本的数据之一（例如，1KB = 1024 Bytes）。</p>
            <p>这个数字代表了我们工作的基石，也象征着程序员改变世界的强大力量。</p>
            <p>每年的 <strong>10 月 24 日</strong>，是属于我们的程序员节。向所有用代码构建未来的创造者们致敬！</p>
            <pre>
  /\\_/\\
 ( o.o )
  > ^ <
            </pre>
        </div>
    `,
    '1972': `
        <h2>C 语言诞生之年</h2>
        <p>在贝尔实验室，一个名叫丹尼斯·里奇 (Dennis Ritchie) 的人刚刚创造了 C 语言。</p>
        <p>一个传奇就此开始。</p>
    `,
    '1978': `
        <h2>《C 程序设计语言》</h2>
        <p>这是第一部介绍 C 语言编程方法的书籍。它因作者名字的缩写被简称为 <strong>K&R</strong>；或是因封面颜色，被称为白皮书。</p>
        <p>它定义了 C 语言的第一个事实标准。</p>
    `,
    '32767': `<h3 style:"font-weight: 400;">这是 16 位有符号整数的最大值。</h3>`,
    '65535': `<h3 style:"font-weight: 400;">这是 16 位无符号整数的最大值。</h3>`,
    '114514': `<img src="img/114514.jpg"/>`,
    '299792458': `
        <h3 style:"font-weight: 400;">我曾遇到一束光</h3>
        <h3 style:"font-weight: 400;">在前方</h3>
    `,
    '885719573': `<h3 style:"font-weight: 400;">这是我们的 QQ 群群号！欢迎加入！</h3>`,
    '2147483647': `<h3 style:"font-weight: 400;">这是 32 位有符号整数的最大值。</h3>`,
    '4294967295': `<h3 style:"font-weight: 400;">这是 32 位无符号整数的最大值。</h3>`,
    '9223372036854775807': `<h3 style:"font-weight: 400;">这是 64 位有符号整数的最大值。</h3>`,
    '18446744073709551615': `
        <h2>欢迎来到 <code>uint64_t</code> 的终点！</h2>
        <p>当前 n 的值是: <strong>${UINT64_MAX.toLocaleString('en-US')}</strong></p>
        <p>你来到了 <strong>64</strong> 位无符号整数的最大值。这个数字大到超乎想象！（还记得国际象棋的故事吗，它是棋盘上的米粒总数）</p>
        <p>在 C 语言中，如果你对存有这个值的对象执行 <code>++</code> 操作，它就会因为溢出而“回绕”到 <strong>0</strong>。</p>
        <p>同样地，对 <strong>0</strong> 执行 <code>--</code> 操作，它就会回绕到 <strong>18,446,744,073,709,551,615</strong>。</p>
    `
};

function updateNav() {
    if (nValueDisplay) {
        nValueDisplay.textContent = n.toString();
    }
    const url = new URL(window.location);
    url.searchParams.set('n', n.toString());
    window.history.pushState({}, '', url);
}

function updatePageContent() {
    if (contentArea) {
        const key = n.toString();
        if (pageContent.hasOwnProperty(key)) {
            contentArea.innerHTML = pageContent[key];
        } else {
            contentArea.innerHTML = `
                <h1>n = ${n.toLocaleString('en-US')}</h1>
                <h2 style="color: var(--text-color);">这是个普通的页面……</h2>
            `;
        }
    }
}

function updateButtonVisibility() {
    btnModulo3.classList.toggle('hidden', n < 6n);
    btnDivide2.classList.toggle('hidden', n < 4n);
    btnAdd5.classList.toggle('hidden', n < 5n)
    btnMultiply2.classList.toggle('hidden', n < 3n)
    btnSquare.classList.toggle('hidden', n < 10n)
    btnSquareRoot.classList.toggle('hidden', n < 16n)
    btnBack.classList.toggle('hidden', n < 19n);
}

function bigIntSqrt(n) {
    if (n < 2n) {
        return n;
    }

    let low = 0n;
    let high = n;
    let result = 0n;

    while (low <= high) {
        let mid = (low + high) / 2n;
        let midSquared = mid * mid;

        if (midSquared === n) {
            return mid;
        } else if (midSquared < n) {
            result = mid;
            low = mid + 1n;
        } else {
            high = mid - 1n;
        }
    }
    return result;
}

function performOperation(expression) {
    const originalN = n;

    switch (expression) {
        case '++': n = (n === UINT64_MAX) ? 0n : n + 1n; break;
        case '--': n = (n === 0n) ? UINT64_MAX : n - 1n; break;
        case '*=2': n = (n * 2n) & UINT64_MAX; break;
        case '/=2': n = n / 2n; break;
        case '+=5': n = (n + 5n) & UINT64_MAX; break;
        case '%=3': n = n % 3n; break;
        case '*=n': n = (originalN * originalN) & UINT64_MAX; break;
        case '**=0.5': n = bigIntSqrt(originalN); break;
        case '=1': n = 1n; break;
        default:
            console.error("未知的表达式: ", expression);
            return;
    }

    updateNav();
    updatePageContent();
    updateButtonVisibility();
}

document.addEventListener('DOMContentLoaded', () => {
    btnIncrement.addEventListener('click', () => performOperation('++'));
    btnDecrement.addEventListener('click', () => performOperation('--'));
    btnMultiply2.addEventListener('click', () => performOperation('*=2'));
    btnDivide2.addEventListener('click', () => performOperation('/=2'));
    btnAdd5.addEventListener('click', () => performOperation('+=5'));
    btnModulo3.addEventListener('click', () => performOperation('%=3'));
    btnSquare.addEventListener('click', () => performOperation('*=n'));
    btnSquareRoot.addEventListener('click', () => performOperation('**=0.5'));
    btnBack.addEventListener('click', () => performOperation('=1'));

    const nParam = new URLSearchParams(window.location.search).get('n')
    n = nParam ? BigInt(parseInt(nParam)) : 1n
    updateNav();
    updatePageContent();
    updateButtonVisibility();
});

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') { performOperation('++') }
    if (event.key == 'ArrowDown') { performOperation('--') }
    if (event.key == '*') { performOperation('*=2') }
    if (event.key == '/') { performOperation('/=2') }
    if (event.key == '+') { performOperation('+=5') }
    if (event.key == '%') { performOperation('%=3') }
    if (event.key == 'n') { performOperation('*=n') }
    if (event.key == 'f') { performOperation('**=0.5') }
    if (event.key == '1') { performOperation('=1') }
    if (event.key == 'Enter' && n === 1n) { window.location.href = "https://mdr.aymao.com/C" }
})