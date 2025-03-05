import { useEffect, useState } from "react";
import { fetchUser } from "../services/UserServices";
import ReactPaginate from "react-paginate";

export default function TableUser() {
  const [listUser, setListUser] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [totalPage, settotalPage] = useState(0);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async (page) => {
    let res = await fetchUser(page);
    if (res && res.data) {
      setListUser(res.data);
      setTotalUser(res.total);
      settotalPage(res.total_pages);
    }
  };

  const handlePageClick = (event) => {
    getUsers(event.selected + 1);
  };
  return (
    <div className="container">
      <table className="table table-striped table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
          </tr>
        </thead>
        <tbody className="table table-group-divider">
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
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPage}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        disabledClassName="disabled"
      />
    </div>
  );
}
