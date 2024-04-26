// src/App.js
import { h } from 'preact';

const App = () => {
  return (
<>
<Head/>
</>
  );
};



function Head() {
  return (
    <head>
      <title>Preact on the edge</title>
      <meta charset="utf-8" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/app.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="HTML, dynamically rendered in a city near you"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@vercel" />
      <meta name="twitter:title" content="Preact on the edge" />
      <meta
        name="twitter:description"
        content="HTML, dynamically rendered in a city near you"
      />
      <meta name="twitter:image" content="/static/og/card.png" />
      <meta name="twitter:image:alt" content="The Vercel and Preact logos" />
    </head>
  )
}
export default App;