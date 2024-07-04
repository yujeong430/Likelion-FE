import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 10px 0px;
`;
const ItemImg = styled.div`
    background-color: blue;
    width: 200px;
    height: 200px;
    border: black;
`;

const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

function NewsItem({article}){
    const { title, description, url, urlToImg } = article;

    return (
        <ItemContainer>
            <ItemImg/>
            <NewsContainer>
                <h1> {title} </h1>
                <div>{description}</div>
            </NewsContainer>
        </ItemContainer>
    );
}

export default NewsItem;