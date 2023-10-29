import * as go from 'gojs';
import { uniqueId } from 'lodash';

export class CustomLinkingTool extends go.LinkingTool {
    canStart(): boolean {
        return this.diagram.lastInput.control;
    }

    findLinkablePort(): go.GraphObject {
        return this.addPort();
    }

    private addPort() {
        this.diagram.startTransaction('addPort');
        const placeholderPort = super.findLinkablePort();
        const node = this.diagram.findNodeForKey(placeholderPort.part.key);
        const documentPoint = this.diagram.lastInput.documentPoint;
        this.diagram.model.addArrayItem(node.data.ports, {
            portId: uniqueId(),
            position: {
                x: documentPoint.x,
                y: documentPoint.y
            }
        });

        this.diagram.commitTransaction('addPort');

        return node.findPort(node.data.ports.at(-1).portId);
    }
};
