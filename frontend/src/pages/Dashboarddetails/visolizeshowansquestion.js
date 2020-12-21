import React from 'react';
import { Box, Divider, List, ListItem, ListItemText, Paper } from '@material-ui/core'

const QuestionAnsCard = ({ question, answer, index }) => {


    return (
        <Box borderRadius={20} >

            <Paper style={{
            }} elevation={5}>

                <List>

                    <ListItem style={{
                        fontSize: '1.5rem'
                    }}>
                        <ListItemText primary={<strong
                            style={{
                                fontSize: 'bold'
                            }}
                        >Question:</strong>} />
                    </ListItem>

                    <ListItem >

                        <ListItemText primary={question} />
                    </ListItem>


                    <Divider />


                    <ListItem >
                        <ListItemText primary={<strong
                            style={{
                                fontSize: 'bold'
                            }}
                        >Answer:</strong>} />
                    </ListItem>

                    <ListItem >

                        <ListItemText primary={!!answer ? answer : 'Not provided yet'} />
                    </ListItem>

                    <Divider />








                </List>

            </Paper>
        </Box>
    )
}




export default QuestionAnsCard
