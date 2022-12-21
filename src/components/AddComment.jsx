import { useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/auth.context";
import { useParams } from 'react-router-dom';

const AddComment = (props) => {


  // const { postId } = useParams();

  const {user} = useContext(AuthContext)

    const navigate = useNavigate();

    const [state, setState] = useState({
        text: ''
      });

      const updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
      });

      const submitFormHandler = e => {
        e.preventDefault()
        console.log('FORM SUBMIT WORKED');
        axios.post(`http://localhost:3001/comments/add/diy`,{
          profilePic: user.profilePic,
          text: state.text,
          author: user._id,
          reference: props.postId
        } ,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        } )
          .then(axiosResponse => {
            console.log(axiosResponse.data);
            navigate(`/diy/${props.postId}`)
          })
          .catch(err => console.log(err))
      }

    return(
        <>
    <div>
    <h1></h1>
     <form onSubmit={submitFormHandler} >

         <label>Add comment: </label>
         <input name="text"  value={state.text} onChange={updateState}/>

         <button>Post</button>
     
     </form>
  </div>
    </>
    )
}

export default AddComment;