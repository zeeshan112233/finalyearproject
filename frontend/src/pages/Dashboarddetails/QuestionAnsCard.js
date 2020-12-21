import React from 'react';
import { Box, Divider, List, ListItem, ListItemText, TextField } from '@material-ui/core'
import { Button } from '@material-ui/core';


const QuestionAnsCard = ({ question, answer, textfiledchange, getquestionvalue }) => {
  const [questionmessage, setQuestion] = React.useState();

  console.log('textfiledchange ', textfiledchange);


  const sufkds = () => {
    getquestionvalue(questionmessage)


  }

  const handequestion = (event) => {



    setQuestion(event.target.value)



  }


  const NOquestionSelcted = () => {
    return (
      <Box style={{

        width: '100%',
        border: 'solid 1px green',
        padding: '3rem',
        paddingTop: '.5rem',
        paddingLeft: '.5rem'


      }}>
        <p
          style={{
            textAlign: 'start'
          }}
        >


          {textfiledchange == true ? <List>

            <TextField
              variant='outlined'
              label='Enter question'
              color='primary'
              fullWidth
              onChange={handequestion}

              value={questionmessage}
            />

            <ListItemText primary="Answer:" style={{ marginTop: '1rem' }} />


            <ListItemText primary={!!answer ? answer : 'Not provides yet'} />


            <Button
              variant="contained"
              color="default"
              style={{
                marginTop: '1rem'
              }}
              onClick={sufkds}
            >
              Generate it
      </Button>



          </List>


            : 'No Question Selected'}</p>



      </Box>
    );
  }

  return (
    <div>
      <Divider />


      {!!question === true ? <List component="nav" display="flex" justifycontent="center" border={1} >


        <ListItem >
          <ListItemText primary="Question:" />
        </ListItem>

        <ListItem >
          <ListItemText primary={question} />

        </ListItem>


        <Divider />


        <ListItem >
          <ListItemText primary="Answer:" />
        </ListItem>

        <ListItem >

          <ListItemText primary={!!answer ? answer : 'Not provides yet'} />
        </ListItem>

        <Divider />








      </List>

        :

        NOquestionSelcted()
      }
    </div>
  )
}


// QuestionAnsCard.defaultProps = {
//     question: null,
//     ans:null

//   }

export default QuestionAnsCard
