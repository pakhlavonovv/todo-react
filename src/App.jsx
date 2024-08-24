import { useState } from 'react';
import { nanoid } from 'nanoid';
import GlobalModal from './components/modal';

const App = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = { ...form, id: nanoid() };
    let new_data = [...data, { ...payload }];
    setData([...new_data]);
    toggleModal();
  };

  const deleteData = (id) => {
    let new_data = data.filter((item) => item.id !== id);
    setData([...new_data]);
  };

  return (
    <>
      <div className='todo'>
        <div className="container">
          <form className='form d-flex flex-column gap-2' onSubmit={handleSubmit}>
            <h1><b>Add Task</b></h1>
            <input
              type="text"
              placeholder='Username'
              name="username"
              value={form.username || ''}
              onChange={handleChange}
              className='form-control'
            />
            <input
              type="text"
              placeholder='Full name'
              name="fullname"
              value={form.fullname || ''}
              onChange={handleChange}
              className='form-control'
            />
             <input
              type="number"
              placeholder='Phone number'
              name="phone"
              value={form.phone || ''}
              onChange={handleChange}
              className='form-control'
            />
            <input
              type="password"
              placeholder='Password'
              name="password"
              value={form.password || ''}
              onChange={handleChange}
              className='form-control'
            />
            <button className='btn btn-success rounded-sm' type='submit'>Create</button>
          </form>

          <GlobalModal isOpen={modalOpen} toggle={toggleModal} form={form} />

          <table className='table mt-4 table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Phone number</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.fullname}</td>
                    <td>{item.phone}</td>
                    <td>{item.password}</td>
                    <td>
                      <button className='btn btn-danger' onClick={() => deleteData(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
