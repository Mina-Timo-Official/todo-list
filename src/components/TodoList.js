import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { render } from '@testing-library/react';
export default function TodoList() {

    const getFullDate = (TodoDate) => {
        let date = moment(new Date(TodoDate))
        return  date.format("DD/MM/YYYY H:m:s a")
    };

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
        },
        {
          title: 'Priority',
          dataIndex: 'priority',
          key: 'id',
          sorter: {
            compare: (a, b) => a.priority.id - b.priority.id,
            multiple: 1,
          },
        //   render: item => item.priority,
          render(item, rec) {
            return {
                props:{
                    style:{
                        background: item.id === 1 ? "#e12d2d" 
                            : item.id === 2 ? '#878778' : ''
                    }
                },
                children: item.priority
            }
          },
          defaultSortOrder: 'ascend',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'id',
          sorter: {
            compare: (a, b) => a.status.id - b.status.id,
            multiple: 2,
          },
        //   render: item => item.status,
          render(item, rec){
            return {
                props:{
                    style:{
                        background: item.id === 1 ? '' 
                            : item.id === 2 ? '#bbbb27' : '#27bb4e'
                    }
                },
                children: item.status
            }
          },
          defaultSortOrder: 'ascend',
        },
        {
          title: 'Deadline',
          dataIndex: 'deadline',
          key: 'id',
          sorter: {
            compare: (a, b) =>
                new Date(moment(a.deadline, "MMMM Do YYYY, h:mm:ss a").format("LLL")) -
                new Date(moment(b.deadline, "MMMM Do YYYY, h:mm:ss a").format("LLL")),
            multiple: 3,
          },
          render: ((date) => getFullDate(date)),
          defaultSortOrder: 'ascend',
        },
        {
          title: 'Start Date',
          key: 'id',
          dataIndex: 'startDate',
          render: ((date) => getFullDate(date)),
        },
        {
          title: 'Assign',
          key: 'id',
          dataIndex: 'assign',
          render: item => item.name,
        },
        {
          title: 'Description',
          key: 'id',
          dataIndex: 'description',
        },
    ];

    const todosList = useSelector((state) => state.todoReducer.todos)
    return (<div className='todoContainer'>
      <Table
        columns={columns}
        dataSource={todosList}
      ></Table>  
    </div>);
}
