import Modal from "react-modal";
import { useState } from "react"

import useValidateModalStore from "../../stores/useValidateModalStore";
// import { MovieImage, Content, } from "./style";


const ModalContainer = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "200px",
      height: "100px",
      padding: "15px",
      backgroundColor: "#fff"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 1)"
    }
  };
  
const ValidateModal = () => {
    const isOpen = useValidateModalStore((state) => state.isOpen)
    const closeModal = useValidateModalStore((state) => state.closeModal)
    const setPass = useValidateModalStore((state) => state.setPass)
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === process.env.PASSWORD) {
        closeModal();
        setPass();
      } else {
        setMessage({ text: '密碼錯誤，請再試一次。', color: 'red' });
      }
    };


    return (
        <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        style={ModalContainer}
        contentLabel="ValidateModal"
      >
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              請輸入密碼：
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setMessage(null);
                }}
                required
              />
            </label>
            <button type="submit">提交</button>
          </form>
          {message && (
            <p style={{ color: message.color }}>{message.text}</p>
          )}
        </div>
      </Modal>
    )

};

export default ValidateModal;