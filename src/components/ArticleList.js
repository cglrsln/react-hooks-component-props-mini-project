import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articleHeadings = posts.map((article) => {
    return (
      <>
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          minutes={article.minutes}
          preview={article.preview}
        />
      </>
    );
  });

  return <main>{articleHeadings}</main>;
}

export default ArticleList;

// function ArticleList() {
//     console.log(blogData.posts)
//     const postArr = blogData.posts;
//     console.log(postArr[0])

//     const articleHeadings = postArr.map((article) => {
//         return (
//         <>
//             <h3 key={article.id}>{article.title}</h3>
//             <small key={article.id}> {article.date} ☕️ {article.minutes} min read</small>
//             <p key={article.id}>{article.preview}</p>
//             <br/>
//         </>
//         )
//       });

//     return (
//         <main>
//             {articleHeadings}
//         </main>
//     )

// }

// export default ArticleList;
