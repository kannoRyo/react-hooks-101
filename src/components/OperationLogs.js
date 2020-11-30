import React, {useContext} from 'react'
import AppContext from '../context/AppContext'

const OperationLogs = () =>{
    const {state} = useContext(AppContext)
    return(
        <>
        <h4>Log List</h4>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Content</th>
                    <th>TIME</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.operationLogs.map((log, index) => {
                        return(
                            <tr>
                                <td>{log.description}</td>
                                <td>{log.operatedAt}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default OperationLogs