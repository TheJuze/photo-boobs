import React from "react";
import cx from "classnames";
import { UserInfo } from "types";
import User from "./components/User";

type Props = {
    friends: UserInfo[]
    onSelect: (value: boolean, id?: string) => void
    selectedUsers: string[]
    isAllSelected: boolean
    className?: string
}
// TODO: refactor me
const Users: React.FC<Props> = ({
  className, friends, onSelect, selectedUsers, isAllSelected,
}) => (
  <ul className={cx(className, "flex")}>
    <li>
      <User name="All" isChecked={isAllSelected} onCheck={onSelect} />
    </li>
    {friends.map((user) => {
      const isSelected = Boolean(selectedUsers.find((selectedUser) => selectedUser === user.id));

      return (
        <li key={user.id} className="ml-24">
          <User {...user} isChecked={!isAllSelected && isSelected} onCheck={onSelect} />
        </li>
      );
    })}
  </ul>
);

export default Users;
