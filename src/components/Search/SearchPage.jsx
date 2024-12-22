import { useParams } from 'react-router-dom';
import ReturnMainPage from '../mess/ReturnMainPage';
import Search from '../Nav/Search';
import PageLanguageButton from './PageLanguageButton';
import ResultBlock from './ResultBlock';
import './SearchPage.css';
function SearchPage() {
    const params = useParams()
    let name = params.name
    return (
        <div className="SearchPage">
            <ReturnMainPage />
            <div className="SearchTop">
                <h1>搜索结果：<span>{name}</span></h1>
                <div className="SearchComment">
                    <p>搜索结果分三列显示：</p>
                    <p>第一列是 MCT 中的搜索结果（MCT 中每篇文章都有对应的关键词权重）；</p>
                    <p>第二列是 C++ Reference 中的搜索结果；<PageLanguageButton /></p>
                    <p>第三列是 Google 中的搜索结果。</p>
                </div>
                <Search />
            </div>
            <div className="SearchResult">
                <div className="ResultMCT">
                    <ResultBlock title={"Title 01"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil` esse quo inventore corporis eos quibusdam autem 33 aperiam facilis?"} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 02"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 03"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 04"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 05"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                </div>
                <div className="ResultCppRef">
                    <ResultBlock title={"Title 02"} description={"In **velit** enim et *libero* dolorum id `voluptatem` esse qui **consequatur officia** At dignissimos voluptas. Ea velit quas et odit eius sed officiis similique ut iure accusamus aut officia accusantium sed magni placeat?"} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 02"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 03"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 04"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 05"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                </div>
                <div className="ResultGoogle">
                    <ResultBlock title={"Title 03"} description={"Lorem **ipsum** *dolo* sit amet. In `neque` illo ut rerum dolorem quo dolorum voluptas At culpa explicabo est totam dolorem aut expedita magnam. Aut numquam aperiam ad magnam aspernatur est neque dolorum est aliquam animi et facere ullam ut magnam repudiandae. Eos reprehenderit nesciunt qui quia laborum hic molestiae vero id sunt necessitatibus."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 02"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 03"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 04"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                    <ResultBlock title={"Title 05"} description={"Aut **vero** quam *et* fugiat possimus. Ut `nigil`."} link={"https://baimingxuan.github.io/react-router6-doc/components/link"} />
                </div>
            </div>
        </div>
    )
}
export default SearchPage;