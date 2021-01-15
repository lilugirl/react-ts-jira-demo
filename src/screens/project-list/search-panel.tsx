import React from "react";
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  token: string;
  organization: string;
}
interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => setParam({ ...param, name: evt.target.value })}
      />

      <select
        value={param.personId}
        onChange={(evt) => setParam({ ...param, personId: evt.target.value })}
      >
        <option value={""}>所有人</option>
        {users.map((user, i) => {
          return (
            <option key={i} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
    </form>
  );
};
