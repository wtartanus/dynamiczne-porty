import * as go from 'gojs';

import { createDiagramCircleNodeTemplate, createDiagramRoundedRectangleNodeTemplate } from './templates';
import { CustomLinkingTool } from './linkingTool';

const $ = go.GraphObject.make;


export const createDiagram = (diagramDiv: HTMLDivElement) => {
    const diagram = $(go.Diagram, diagramDiv);

    diagram.nodeTemplateMap = new go.Map([
        { key: 'circle', value: createDiagramCircleNodeTemplate() },
        { key: 'roundedRectangle', value: createDiagramRoundedRectangleNodeTemplate() }
    ]);

    diagram.model.nodeDataArray = [
        { category: 'circle', ports: [] },
        { category: 'roundedRectangle', ports: [] }
    ];

    diagram.layout = new go.Layout();
    diagram.toolManager.linkingTool = new CustomLinkingTool();

    (window as any).goJsDiagram = diagram;
    
    return diagram;
}