import { Typography } from '@mui/material'
import React from 'react'
import CustomAccrodion from '../../CustomAccordion/CustomAccordion'

const FAQ = ({data}) => {
    console.log(data);
  return (
    <div>
        <Typography textAlign="center" variant='h2' fontWeight="600">FAQs</Typography>
        {
            data.map((item) => <CustomAccrodion title={item.question} message={item.answer}/>)
        }
        {/* <CustomAccrodion title="what is your full name?" message="my name is shubham thorat studying in b.e sppu"/> */}
    </div>
  )
}

export default FAQ