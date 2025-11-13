import React from 'react'

const Box = ({text}) => {
  return (
    <div 
    style={{margin:'1rem 0',padding: '0.5rem 0.8rem', border:'solid 1.5px black', background:'none', borderRadius:'2rem', width:'max-content', cursor:'pointer'}}>
        {text}</div>
  )
}

export default Box