import React from 'react'
import Tabledata from './Tabledata';
import './tableitem.css'
let question=[{
    "id": 1,
    "Title": "Array",
    "Type": "Easy",
    "Url":"https://leetcode.com/problems/two-sum/",
    "Editorial": " https://www.youtube.com/watch?v=o2WOhGSfx_8"
  },
  {
    "id": 2,
    "Title": "Array",
    "Type": "Easy",
    "Url":"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "Editorial": "https://www.youtube.com/watch?v=o2WOhGSfx_8"
  },
  {
    "id": 3,
    "Title": "Array",
    "Type": "Easy",
    "Url":"https://leetcode.com/problems/merge-sorted-array/",
    "Editorial": "https://www.youtube.com/watch?v=XIWykOHE1SE"
  },
  {
    "id": 4,
    "Title": "Array",
    "Type": "Easy",
    "Url":"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "Editorial": "https://www.youtube.com/watch?v=mgzcjQ1x9Mw"
  },
  {
    "id": 5,
    "Title": "Array",
    "Type": "Easy",
    "Url":"https://leetcode.com/problems/find-pivot-index/",
    "Editorial": "https://leetcode.com/problems/find-pivot-index/discuss/411318/Java%3A-beats100-1ms-easy-understanding-solution"
  },
  {
    "id": 6,
    "Title": "Array",
    "Type": "Easy",
    "Url":"https://leetcode.com/problems/majority-element/",
    "Editorial": "https://www.youtube.com/watch?v=MyFe2W2nIEE&list=PLKZaSt2df1gxtem7J8QqY8m2bHliz8mPt"
  },
  {
    "id": 7,
    "Title": "Array",
    "Type": "medium",
    "Url":"https://leetcode.com/problems/merge-intervals/",
    "Editorial": " "
  },
  {
    "id": 8,
    "Title": "Array",
    "Type": "Easy",
    "Url":"https://leetcode.com/problems/3sum/",
    "Editorial": ""
  },
  {
    "id": 9,
    "Title": "Array",
    "Type": "medium",
    "Url":"https://leetcode.com/problems/subarray-sum-equals-k/",
    "Editorial": " "
  },
  {
    "id": 10,
    "Title": "Array",
    "Type": "Medium",
    "Url":"https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/",
    "Editorial": "https://www.youtube.com/watch?v=UG1C-otvF2U"
  },
  {
    "id": 11,
    "Title": "Array",
    "Type": "Hard",
    "Url":"https://leetcode.com/problems/first-missing-positive/",
    "Editorial": " "
  },
  {
    "id": 12,
    "Title": "Array",
    "Type": "hard",
    "Url":"https://leetcode.com/problems/divisor-game//",
    "Editorial": " "
  },
  {
    "id": 13,
    "Title": "Array",
    "Type": "hard",
    "Url":"https://leetcode.com/problems/climbing-stairs",
    "Editorial": " "
  },
  {
    "id": 13,
    "Title": "Array",
    "Type": "hard",
    "Url":"https://leetcode.com/problems/climbing-stairs",
    "Editorial": " "
  },
  {
    "id": 13,
    "Title": "Arry",
    "Type": "hard",
    "Url":"https://leetcode.com/problems/climbing-stairs",
    "Editorial": " "
  }
  ]
  
  
  export default function Table(props) {
      document.body.style=props.mode==="light"?"background:white":"background:#0E1C25";
      let que=question.filter((auto)=>auto.Title.includes("Array") && auto.Type.includes(props.type) );
      return (
    <>
    <div className={`table-${props.mode} `}>
   
        <h1 className={`difficulty-${props.mode} `}>. {props.type}</h1>
        <div className={`questionlinks-${props.mode}`}>
        <table className="table ">
  <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Q-ID</th>
      <th scope="col">Questions</th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody>
     { que.map((element)=>{
          return <Tabledata  QID={element.id} question={element.Url} />
      })
      
    }
  </tbody>
</table>
        </div>
    </div>   
    </>
  )
}