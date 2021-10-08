import { render } from 'react-dom';
import Refractor from 'react-refractor';
import tsx from 'refractor/lang/tsx';
import bash from 'refractor/lang/bash';
import { app } from './App';
import 'prism-themes/themes/prism-vsc-dark-plus.css';
import 'antd/dist/antd.css';
import './index.css';

Refractor.registerLanguage(tsx);
Refractor.registerLanguage(bash);

render(app, document.getElementById('root'));
