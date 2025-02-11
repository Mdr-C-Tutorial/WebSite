import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReturnMainPage from '../mess/ReturnMainPage';
import Search from '../Nav/Search';
import PageLanguageButton from './PageLanguageButton';
import ResultBlock from './ResultBlock';
import { host } from '../../mdr.config';
import './SearchPage.css';

// test
const _data = {
    mct: [
        {
            title: "Title 01",
            description: "Aut **vero** quam *et* fugiat possimus. Ut `nigil` esse quo inventore corporis eos quibusdam autem 33 aperiam facilis?",
            link: "https://zh.cppreference.com/w/c/language"
        },
        {
            title: "Title 02",
            description: "In **velit** enim et *libero* dolorum id `voluptatem` esse qui **consequatur officia** At dignissimos voluptas. Ea velit quas et odit eius sed officiis similique ut iure accusamus aut officia accusantium sed magni placeat?",
            link: "https://zh.cppreference.com/w/c/language"
        },
        {
            title: "title 03",
            description: "Lorem **ipsum** *dolo* sit amet. In `neque` illo ut rerum dolorem quo dolorum voluptas At culpa explicabo est totam dolorem aut expedita magnam. Aut numquam aperiam ad magnam aspernatur est neque dolorum est aliquam animi et facere ullam ut magnam repudiandae. Eos reprehenderit nesciunt qui quia laborum hic molestiae vero id sunt necessitatibus.",
            link: "https://zh.cppreference.com/w/c/language",
        }
    ],
    cppref: [
        {
            title: "Title 01",
            description: "Aut **vero** quam *et* fugiat possimus. Ut `nigil` esse quo inventore corporis eos quibusdam autem 33 aperiam facilis?",
            link: "https://zh.cppreference.com/w/c/language"
        },
        {
            title: "Title 02",
            description: "In **velit** enim et *libero* dolorum id `voluptatem` esse qui **consequatur officia** At dignissimos voluptas. Ea velit quas et odit eius sed officiis similique ut iure accusamus aut officia accusantium sed magni placeat?",
            link: "https://zh.cppreference.com/w/c/language"
        },
        {
            title: "title 03",
            description: "Lorem **ipsum** *dolo* sit amet. In `neque` illo ut rerum dolorem quo dolorum voluptas At culpa explicabo est totam dolorem aut expedita magnam. Aut numquam aperiam ad magnam aspernatur est neque dolorum est aliquam animi et facere ullam ut magnam repudiandae. Eos reprehenderit nesciunt qui quia laborum hic molestiae vero id sunt necessitatibus.",
            link: "https://zh.cppreference.com/w/c/language",
        }
    ],
    google: [
        {
            title: "Title 01",
            description: "Aut **vero** quam *et* fugiat possimus. Ut `nigil` esse quo inventore corporis eos quibusdam autem 33 aperiam facilis?",
            link: "https://zh.cppreference.com/w/c/language"
        },
        {
            title: "Title 02",
            description: "In **velit** enim et *libero* dolorum id `voluptatem` esse qui **consequatur officia** At dignissimos voluptas. Ea velit quas et odit eius sed officiis similique ut iure accusamus aut officia accusantium sed magni placeat?",
            link: "https://zh.cppreference.com/w/c/language"
        },
        {
            title: "title 03",
            description: "Lorem **ipsum** *dolo* sit amet. In `neque` illo ut rerum dolorem quo dolorum voluptas At culpa explicabo est totam dolorem aut expedita magnam. Aut numquam aperiam ad magnam aspernatur est neque dolorum est aliquam animi et facere ullam ut magnam repudiandae. Eos reprehenderit nesciunt qui quia laborum hic molestiae vero id sunt necessitatibus.",
            link: "https://zh.cppreference.com/w/c/language",
        }
    ]
}

function SearchPage() {
    const params = useParams()
    const [data, setData] = useState(_data)
    console.log("Initial data:", data);
    let name = params.name

    useEffect(() => {
        document.title = "Search - " + name + " | Mdr-C-Tutorial"
    }, [name]);

    fetch(host + '/search/' + name).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            console.log("error")
        }
    }).then(_data => {
        let __data = {}
        __data.mct = _data.mct
        __data.cppref = _data.cppref
        __data.google = _data.google
        setData(__data)
    })

    function switchLanguage(language) {
        setData(data => {
            let _data = JSON.parse(JSON.stringify(data))
            if (language === 0) {
                _data.cppref = _data.cppref.map(item => {
                    return {
                        ...item,
                        link: item.link.replace("en", "zh")
                    }
                })
            } else if (language === 1) {
                _data.cppref = _data.cppref.map(item => {
                    return {
                        ...item,
                        link: item.link.replace("zh", "en")
                    }
                })
            }
            return _data;
        })
    }


    return (
        <div className="SearchPage">
            <ReturnMainPage />
            <div className="SearchTop">
                <h1>搜索结果：<span>{name}</span></h1>
                <div className="SearchComment">
                    <p>搜索结果分三列显示：</p>
                    <p>第一列是 MCT 中的搜索结果（MCT 中每篇文章都有对应的关键词权重）；</p>
                    <p>第二列是 C++ Reference 中的搜索结果；<PageLanguageButton hook={switchLanguage} /></p>
                    <p>第三列是 Google 中的搜索结果。</p>
                </div>
                <Search />
            </div>
            <div className="SearchResult">
                <div className="ResultMCT">
                    {data.mct.map((item, index) => {
                        return <ResultBlock key={index} title={item.title} description={item.description} link={item.link} />
                    })}
                </div>
                <div className="ResultCppRef">
                    {data.cppref.map((item, index) => {
                        return <ResultBlock key={index} title={item.title} description={item.description} link={item.link} />
                    })}
                </div>
                <div className="ResultGoogle">
                    {data.google.map((item, index) => {
                        return <ResultBlock key={index} title={item.title} description={item.description} link={item.link} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default SearchPage;