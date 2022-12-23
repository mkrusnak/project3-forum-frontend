import { useState, useContext} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/auth.context";
import { useParams } from 'react-router-dom';
import { Divider, Input } from 'antd';

const AddCommentForum = (props) => {


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
        // e.preventDefault()
        console.log('FORM SUBMIT WORKED');
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/comments/add/forum`,{
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
          })
          .catch(err => console.log(err))
      }

    return(
        <>
    <div>
    <h1></h1>
     <form onSubmit={submitFormHandler} >

         <label>Add comment: </label>
         <Input className='searchInput' name="text"  value={state.text} onChange={updateState}/>

         <button className="customBttn" role="button">Post</button>
     
     </form>
  </div>
    </>
    )
}

export default AddCommentForum;