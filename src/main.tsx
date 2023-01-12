import {ConfigProvider} from 'antd';
import ruRU from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import {QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

import App from './App';

import './index.css';

import 'dayjs/locale/ru';
import queryClient from './libs/queryClient';
import validateMessages from './libs/validateMessages';

dayjs.locale('ru');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={ruRU} form={{ validateMessages }}>
        <App />
      </ConfigProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
