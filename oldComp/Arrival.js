import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import Center from './Center';
import Link from 'next/link'
import Button from './Button'
import axios from 'axios';

const StyleDiv = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr ;
gap:20px;
padding-top:20px;
@media (max-width: 768px) {
  grid-template-columns:1fr 1fr;
}
`;
const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;
const Box = styled.div`
background-color: #fff;
// padding: 20px;
// height: 120px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
img{
  max-width: 140px;
  max-height: 140px;
}
@media (max-width: 768px) {
  max-width: 180px;
  max-height: 180px;
}
`;

const TitleTWO = styled.div`
  font-weight: bold;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
  // font:bold;
`;
const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;
const DIVONE=styled.div`
`
const DIVTWO=styled.div`
`

const NewProducts = () => {
  const [feature,setfeature]=useState()
  useEffect(()=>{
     axios.get('/api/feature').then(res=>{
      setfeature(res.data.product)
      console.log(res.data.product)
     })
  },[])
  return (
    <Center>
        <Title>New Arrivals</Title>
    <StyleDiv className='font-bold'>
        {feature && feature.map(products=>(
            // <ProductBox {...products} />
            <Link key={products.id} href={`/product/${products.slug}`}>
 <DIVONE>
    <Box>
        <DIVTWO>
        <img src={products.image} alt="" />
        </DIVTWO>
    </Box>
    <ProductInfoBox>
      <TitleTWO  className='font-bold'
       passHref={true} 
       href={`/product/${products.slug}`}
       >{products.title.slice(0,18)}</TitleTWO>
      <PriceRow>
        <Price>Rs{products.price}</Price>
        <Button  block primary outline >Buy</Button>
        </PriceRow>    
    </ProductInfoBox>
    </DIVONE>
    </Link>
        ))}
    </StyleDiv>
    </Center>
  )
}

export default NewProducts



