import React from 'react'

export default function Ssfetch() {
  async function fetchss() {
    let a = await fetch("https://musicapi.x007.workers.dev/search?q=Pathaan&searchEngine=gaama");
    let res = await a.json();
    console.log(res);
  }
  fetchss();
  return (
    <div>
      Lorem
    </div>
  )
}
