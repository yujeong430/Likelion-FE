import NewsItem from "./NewsItem";

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
};

function NewsList() {
    return(
        <>
        <NewsItem article = {sampleArticle}/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        </>
    )
}

export default NewsList;