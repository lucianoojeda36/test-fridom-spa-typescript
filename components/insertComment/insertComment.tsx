import { useState } from "react";
import { TextField, Box, Button, Typography } from '@mui/material';
import { Comment } from "../../interfaces/interfaces";


const InsertComment: ({ sendCommentDataHandler }: {
  sendCommentDataHandler: (data: Comment) => void
}) => JSX.Element = ({ sendCommentDataHandler }) => {

  const actualDateHandler: () => string = () => {
    const date = new Date()
    const Y = date.getFullYear()
    const M = date.getMonth() + 1
    const D = date.getDate()
    const Hs = date.getHours()
    const Ms = date.getMinutes()
    const Ms10 = `0${Ms}`

    const actualTimeStamp = `${D}-${M}-${Y} - ${Hs}:${Ms < 10 ? Ms10 : Ms}`

    return actualTimeStamp

  }

  const [commentValues, setCommentValues] = useState<Comment>({
    name: '',
    comment: '',
    date: actualDateHandler(),
  })


  const setCommentValuesHandler = ({ target: { value } }: { target: { value: string } }, name: string) => {
    const tempCommentValues = { ...commentValues };
    tempCommentValues[name as keyof Comment] = value;
    setCommentValues(tempCommentValues)
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%'
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: 2,
            p: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{
            mb: 2,
            borderBottom: 1
          }}>
            <Typography variant="h6" component="h2"
              sx={{
                pb: 1,
                fontFamily: 'DynaPuff'
              }}
            >
              Ingresa tu comentario
            </Typography>
          </Box>
          <Box sx={{
            mb: 2
          }}>
            <TextField id="outlined-basic" size="small" label="Autor name" value={commentValues.name} placeholder="Autor name" name='name' variant="outlined" onChange={(e) => setCommentValuesHandler(e, 'name')} />
          </Box>
          <Box sx={{
            mb: 2
          }}>
            <TextField sx={{
              width: '100%',

            }} id="outlined-basic" size="small" label="Comment" value={commentValues.comment} style={{ fontFamily: 'sans-serif' }} placeholder="Comment" variant="outlined" name='comment' multiline onChange={(e) => setCommentValuesHandler(e, 'comment')} />
          </Box>
          <Box sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <Button variant="contained"
              color="primary"
              sx={{
                fontFamily: 'DynaPuff'
              }}
              onClick={() => {
                sendCommentDataHandler(commentValues)
                setCommentValues({
                  name: '',
                  comment: '',
                  date: actualDateHandler(),
                })
              }}>Enviar</Button>

          </Box>
        </Box>
        <Box sx={{
          pb: 2,
          pt: 2,
          pl: 2,
        }}>
          <Typography variant='h6' sx={{ fontFamily: 'DynaPuff' }}>
            Comentarios anteriores
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default InsertComment