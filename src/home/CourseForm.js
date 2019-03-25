import React, { useState } from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@material-ui/core'



const HomeDialogField = ({id, label, type, value, onChange, autoFocus, rows, multiline}) => <TextField className='home-dialog-form-field' {...{id, label, type, onChange, value, autoFocus, rows, multiline}}  />
const NameField = ({value, onChange}) => <HomeDialogField id='purchase-name' label='Name' type='text' {...{onChange, value}} autoFocus />
const EmailField = ({value, onChange}) => <HomeDialogField id='purchase-email' label='Email' type='email' {...{onChange, value}} />
const PhoneField = ({value, onChange}) => <HomeDialogField id='purchase-phone' label='Phone Number' type='number' {...{onChange, value}} />
const CommentField = ({value, onChange}) => <HomeDialogField id='purchase-comments' label='Comments' {...{onChange, value}} multiline rows={5} />



export const CourseForm = ({description,dialogOpen,setDialog}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    return (
        <Dialog
        open={dialogOpen}
        onClose={()=> setDialog(false)}
    >
        <DialogTitle>Course Inquiry</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please fill in your information below and we will get back to you as soon as we can.
            </DialogContentText>
            <NameField onChange={e => setName(e.target.value)} value={name} />
            <br/>
            <EmailField onChange={e => setEmail(e.target.value)} value={email}/>
            <br/>
            <PhoneField onChange={e => setPhone(e.target.value)} value={phone} />
            <br/>
            <CommentField onChange={e => setComment(e.target.value)} value={comment}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setDialog(false)} color='secondary'> Cancel </Button>
            <Button onClick={() => {
              handleOk(name, email, phone, comment, description)
              setDialog(false)
              }} color='primary'> Submit </Button>
        </DialogActions>
    </Dialog>
    )
}

const handleOk = async function (name, email, phone, comment, description) {
    console.log(name,email,phone,comment,description)
    comment = `${comment}
    DESCRIPTION: ${description} ` // will add support  for explicit part number field next
    const fieldValues = {
      name, email, phone, comment
    }
    if(!email && !phone) {
      alert('email or phone is required')
    }
    const response = await fetch('https://yegwheel2019as.azurewebsites.net/api/inquiry',{
      method:'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(fieldValues)
    })
    const json = await response.json()
    const {id} = json
    if(id) alert(`thank you for your request, the id of the request is ${id}; we will be in touch.`)
    else alert(`Our apologinies, we couldn't process your request, please try again later.`)
  }
  

export default CourseForm;