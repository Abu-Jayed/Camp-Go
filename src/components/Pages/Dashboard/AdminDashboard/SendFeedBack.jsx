import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SendFeedBack = () => {
    const {id} = useParams()
    const [axiosSecure] = useAxiosSecure()
    const handleSendFeedback = (event) =>{
        event.preventDefault()
        const feedback = event.target.feedback.value;
        console.log(feedback);   
        axiosSecure.patch(`/classes/feedback/${id}`,{
            feedback: feedback
        })
    }
    console.log('feedback', id);
        
    return (
        <div>
            <form onSubmit={handleSendFeedback}>
            <textarea name="feedback" className="w-full max-w-5xl textarea-lg textarea textarea-success" placeholder="Bio"></textarea>
            <input type="submit" value="Send FeedBack" className="cursor-pointer" />
            </form>
        </div>
    );
};

export default SendFeedBack;