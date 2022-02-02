import React from 'react';
import { Modal } from 'antd';
import TodoForm from './TodoForm';
import { useSelector, useDispatch} from 'react-redux';
import { todoActions } from '../todo/actions';
 
export default function TodoPupup() {
    const modelVisable = useSelector((state) => state.todoReducer.modelVisable)
    const dispatch = useDispatch()

    const openClosePopup = () => {
        dispatch(todoActions.openCloseTodoPupup())
    }

  return (<div>
      <Modal
            visible={modelVisable}
          onCancel={() => openClosePopup()}
          centered={true}
          footer={null}
          destroyOnClose={true}
          
      >
         <div className='modal_header'>
                <h1 className='modal_title'>Add Task</h1>
          </div>
          <div className='modal_content'>
              <div className='children_wrapper'>
                  <div className='children_component'>
                      <TodoForm />
                  </div>
              </div>
          </div>
      </Modal>
  </div>);
}
