/**
 * Created by ASTAKHOV A.A. on 12.01.2023
 */

import {Button, Col, Row} from 'antd';
import {memo, useState} from 'react';

import Users from './Users';

const Page = memo((): JSX.Element | null => {
    const [visible, setVisible] = useState(false);

    return (
        <Row gutter={24} align="middle">
            <Col flex="auto">{!visible ? <Button onClick={() => setVisible(true)}>Load Users</Button> : <Users />}</Col>
        </Row>
    );
});

export default Page;
