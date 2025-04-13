import React, { Fragment, useState } from "react";
import useFetch from "../hooks/useApi";

function Users() {
  const { users, loading, error } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    const firstName = user.name?.firstname || "";
    const lastName = user.name?.lastname || "";
    return (
      firstName.toLowerCase().includes(term) ||
      lastName.toLowerCase().includes(term) ||
      `${firstName} ${lastName}`.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center bg-[#171c48] text-[#24feee]">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[100vh] flex justify-center items-center bg-[#171c48] text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <Fragment>
      <div className="h-[100vh] p-2 bg-[#171c48]">
        <div className="flex justify-center items-center p-3 gap-3">
          <input
            className="w-[500px] p-1 border rounded text-[#24feee] bg-[#171c48] placeholder:text-[#24feee]"
            type="text"
            placeholder="Search by firstname or lastname"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="border p-1 rounded text-[#171c48] bg-[#24feee]">
            Search
          </button>
        </div>

        <div className="m-2 flex flex-col justify-center items-center text-amber-50">
          <h2 className="text-2xl text-[#24feee] font-bold">Users</h2>
          <table className="w-[600px] mt-2 border p-2">
            <thead>
              <tr className="text-center">
                <th className="w-[20px] border p-2">N-</th>
                <th className="w-[100px] border p-2">Firstname</th>
                <th className="w-[80px] border p-2">Lastname</th>
                <th className="w-[80px] border p-2">Username</th>
                <th className="w-[80px] border p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr className="border text-center" key={user.id || index}>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{user.name?.firstname}</td>
                    <td className="border p-2">{user.name?.lastname}</td>
                    <td className="border p-2">{user.username}</td>
                    <td className="border p-2">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border p-2 text-center" colSpan="5">
                    Not found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export default Users;
