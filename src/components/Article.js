import React from "react";

function Article({ title, id, minutes, preview, date = "January 1, 1970" }) {
  return (
    <>
      <article>
        <h3 key={id}>{title}</h3>
        <small key={id}>
          {" "}
          {date} ☕️ {minToRead(minutes)}
        </small>
        <p key={id}>{preview}</p>
        <br />
      </article>
    </>
  );
}


function minToRead(minutes) {
    let numberOfEmojis = 0
    if (minutes < 30) {
      numberOfEmojis = Math.round(minutes/5)
      return (("☕️".repeat(numberOfEmojis)) + ` ${minutes} min read`)
    } else {
      numberOfEmojis = Math.round(minutes/5)
      return(("🍱".repeat(numberOfEmojis)) + ` ${minutes} min read`)
    }
  }



export default Article;
