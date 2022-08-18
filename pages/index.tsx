import InsertComment from "../components/insertComment/insertComment"
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../theme/theme";
import { useState } from "react";
import Comments from "../components/comments/Comments";
import { Comment } from "../interfaces/interfaces";


const Home: () => JSX.Element = () => {
  const [commentData, setCommentData] = useState<Array<Comment>>([])

  const sendCommentDataHandler = (data:Comment) => {
    const tempCommentData: Array<Comment> = [...commentData, data]
    setCommentData(tempCommentData)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container fixed sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
          p: 5,
        }}>
          <InsertComment sendCommentDataHandler={sendCommentDataHandler} />
          <Comments commentData={commentData} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Home
