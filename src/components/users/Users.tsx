/**
 * Created by ASTAKHOV A.A. on 16.01.2023
 */

import {Skeleton} from 'antd';
import {CSSProperties, memo} from 'react';

import {useQuery} from 'react-query';

import {UserDTO} from './types';

const todoStyle: CSSProperties = {
    margin: '16px auto',
};

const Users = memo((): JSX.Element | null => {
    const {data: users} = useQuery<Array<UserDTO>>('https://jsonplaceholder.typicode.com/users');

    if (!users?.length) return null;

    return (
        <div>
            {users.map(({id, name, address: {geo, ...address}}) => (
                <div key={id} style={todoStyle}>
                    <div>
                        <strong>{name}</strong>
                    </div>
                    <div>
                        Address:&nbsp;
                        {Object.values(address).join(', ')}
                    </div>
                </div>
            ))}
        </div>
    );
});

export default Users;
