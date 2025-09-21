import { useRouter } from 'next/router'
import React from 'react'


const Slug = () => {
    const Router = useRouter();
    const {slug} = Router.query;
  return (
    
    <div>{slug}</div>
  )
}

export default Slug