import React from 'react';
import Modal from 'react-modal';

function StrategiesModal({isOpen, closeModal, insights }) {

    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.5)",
        },
    };


    return (
        <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='modal-content'>
                    <div className='close-modal' onClick={closeModal}>
                        CLOSE
                    </div>
                    <h3>Recommendation Insight</h3>
                    <p className='modal-intro'>
                    </p>

                    <ul>

                        {
                            Object.values(insights).map((insight, index) => {
                                return (
                                    <li>
                                        <div>
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div>
                                            <span>{insight[0]}</span>
                                            <p>
                                                {insight[1]}                               
                                            </p>                                
                                        </div>
                                    </li>
                                    
                                )
                            })
                        }


                    </ul>

                    
                </div>
                
            </Modal>
    );
}

export default StrategiesModal;