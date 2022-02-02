import { Form, Input, Button, Row, Col, DatePicker, Select } from 'antd'
import { connect, useDispatch } from 'react-redux'
import { useState } from 'react';
import { todoActions } from '../todo/actions';
import { v4 as uuid } from 'uuid';
// import * from './reducer'
const TodoForm = () => {
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const [users, setUsers] = useState([
        {id:1, name:"user 1"},
        {id:2, name:"user 2"},
        {id:3, name:"user 3"},
        {id:4, name:"user 4"},
        {id:5, name:"user 5"},
        {id:6, name:"user 6"},
        {id:7, name:"user 7"},
        {id:8, name:"user 8"},
    ])

    const [priorities, setPriorities] = useState([
        {id:1, priority:"High"},
        {id:2, priority:"Medium"},
        {id:3, priority:"Low"},

    ])
    const [status, setStatus] = useState([
        {id:1, status:"To Do"},
        {id:2, status:"In Progress"},
        {id:3, status:"Done"},
    ])
    const [submitLoading, setSubmitLoading] = useState(false)

    const openClosePopup = () => {
        dispatch(todoActions.openCloseTodoPupup())
    }
   
    const addTodo = (values) =>{
        dispatch(todoActions.addTodo(values))
    } 
    // const 
    const handelSubmit = () => {
        setSubmitLoading(true)
        form.validateFields().then((values) =>{
            values.id = uuid();

            const statusFiltered = status.filter(itemFitletred => itemFitletred.id === values.status)

            const priorityFiltered = priorities.filter(itemFitletred => itemFitletred.id === values.priority)

            const userFiltered = users.filter(itemFitletred => itemFitletred.id === values.assign)

            values.priority = priorityFiltered[0]
            values.status = statusFiltered[0]
            values.assign = userFiltered[0]
            addTodo(values);
            setSubmitLoading(false)
            openClosePopup()
        })
    }
    const { TextArea } = Input;
    const { Option } = Select;

    return (
        <>
        <div className='item__btn--forms'>
        <Form form={form} onFinish={(values) => handelSubmit(values)}>
            <Row gutter={8}>
                    <Col span={24}  className="full-width">
                        <Form.Item label="Title"
                            required
                            hasFeedback={true}
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: <span style={{ margin: '0px 5px' }}>title is rquired</span>
                                }
                            ]}>
                            <Input 
                                onKeyPress={(e) => {
                                    if (e.which === 13) {
                                        return false
                                    }
                                }}
                                maxLength={20}
                                placeholder={"Title"}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={8}>
                    <Col span={24}  className="full-width">
                        <Form.Item label="deadline"
                            hasFeedback={true}
                            name="deadline"
                            >
                            <DatePicker showTime />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={8}>
                    <Col span={24}  className="full-width">
                        <Form.Item label="priority"
                            hasFeedback={true}
                            name="priority"
                            >
                        <Select
                            placeholder={"priority"}
                            style={{ width: '100%' }} >
                            {priorities.map((op, index) => (
                                <Option key={index} value={op.id}>{op.priority}</Option>
                            ))}
                        </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={24}  className="full-width">
                        <Form.Item label="status"
                            hasFeedback={true}
                            name="status"
                            >
                        <Select
                            placeholder={"status"}
                            style={{ width: '100%' }} >
                            {status.map((op, index) => (
                                <Option key={index} value={op.id}>{op.status}</Option>
                            ))}
                        </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={8}>
                    <Col span={24}  className="full-width">
                        <Form.Item label="startDate"
                            hasFeedback={true}
                            name="startDate"
                            >
                            <DatePicker showTime />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={8}>
                    <Col span={24}  className="full-width">
                        <Form.Item label="assign"
                            hasFeedback={true}
                            name="assign"
                            >
                        <Select
                            placeholder={"assign"}
                            style={{ width: '100%' }} >
                            {users.map((op, index) => (
                                <Option key={index} value={op.id}>{op.name}</Option>
                            ))}
                        </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={24} className="full-width">
                        <Form.Item label={"description"}
                            hasFeedback={true}
                            name="description"
                        >
                            <TextArea rows={3} />
                        </Form.Item>
                    </Col>
                </Row>
                <div className='f-r'>
                    <Button className="primary__btn" disabled={submitLoading} loading={submitLoading} onClick={() => { handelSubmit() }}>
                    Add
                    </Button>
                </div>
            </Form>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("xas")
    console.log(state)
    return {
        todos: state.todoReducer.todos
    }
}

export default connect(mapStateToProps)(TodoForm)
