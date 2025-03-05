import { useEffect, useState } from "react";
import { fetchUser } from "../services/UserServices";

export default function TableUser() {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let res = await fetchUser();
    if (res && res.data && res.data.data) {
      setListUser(res.data.data);
    }
  };
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`id${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
