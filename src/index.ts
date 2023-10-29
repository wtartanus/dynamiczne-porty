import * as go from 'gojs';

import { createDiagram } from './gojs/diagram/diagram';

import './styles.css';

window.addEventListener('load', () => {
    const diagramDiv = document.getElementById('diagram') as HTMLDivElement;
    const diagram = createDiagram(diagramDiv);

    diagram.addDiagramListener('SelectionDeleted', function(e) {
        if (e.subject.count === 1 && e.subject.first() instanceof go.Link) {
            const link = e.subject.first() as go.Link;

            diagram.startTransaction('removePorts');
            const fromPortIndex = link.fromNode.data.ports
                .findIndex((port: { portId: string }) => port.portId === link.fromPortId);
            diagram.model.removeArrayItem(link.fromNode.data.ports, fromPortIndex);
            
            const toPortIndex = link.toNode.data.ports
                .findIndex((port: { portId: string }) => port.portId === link.toPortId);
            diagram.model.removeArrayItem(link.toNode.data.ports, toPortIndex);
            
            diagram.commitTransaction('removePorts');
        }
      });
});
