import * as go from 'gojs';

import { createDiagramCircleNodeTemplate, createDiagramRoundedRectangleNodeTemplate } from './templates';

const $ = go.GraphObject.make;


export const createDiagram = (diagramDiv: HTMLDivElement) => {
    const diagram = $(go.Diagram, diagramDiv);

    diagram.nodeTemplateMap = new go.Map([
        { key: 'circle', value: createDiagramCircleNodeTemplate() },
        { key: 'roundedRectangle', value: createDiagramRoundedRectangleNodeTemplate() }
    ]);

    diagram.model.nodeDataArray = [
        { category: 'circle' },
        { category: 'roundedRectangle' }
    ];

    diagram.layout = new go.Layout();
    
    (window as any).goJsDiagram = diagram;
    
    return diagram;
}