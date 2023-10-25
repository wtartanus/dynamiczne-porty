import * as go from 'gojs';

import { createDiagram } from './gojs/diagram/diagram';

import './styles.css';

window.addEventListener('load', () => {
    const diagramDiv = document.getElementById('diagram') as HTMLDivElement;
    const diagram = createDiagram(diagramDiv);
});
