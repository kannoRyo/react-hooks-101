import React from 'react'

const App = () => {
  return (
    <>
    <div className="container-fluid">
      <h4>Form for Creating Event</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input type="text" class="form-control" id="formEventTitle"/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <input type="text" class="form-control"　id="formEventBody"/>
        </div>
      </form>

      <button className="btn btn-primary">Create Event</button>
      <button className="btn btn-danger">Delete Event</button>

      <h4>Events List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>1</td>
              <td>タイトル</td>
              <td>ボディ</td>
              <td></td>
            </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
