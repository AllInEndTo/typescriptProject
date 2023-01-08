import React, {FC, PropsWithChildren} from 'react';
import {IUser} from "../types/types";

interface UserItemProps extends PropsWithChildren {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid orange'}}>
            {user.id}. {user.name} живёт в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;