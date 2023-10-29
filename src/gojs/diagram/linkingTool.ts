import * as go from 'gojs';
import { uniqueId } from 'lodash';

export class CustomLinkingTool extends go.LinkingTool {
    canStart(): boolean {
        return this.diagram.lastInput.control;
    }

    findLinkablePort(): go.GraphObject {
        const node = this.getNodeAtDocumentPoint();

        if (node) {
            return this.addPort(node);
        }

        return super.findLinkablePort();
    }

    doMouseUp(): void {
        const node = this.getNodeAtDocumentPoint();
        
        if (node) {
            this.originalToPort = this.addPort(node);
        } else {
            this.removeLatestFromPort();
        }
        
        super.doMouseUp();
    }

    private addPort(node: go.Node) {
        this.diagram.startTransaction('addPort');
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

    private removeLatestFromPort() {
        if (this.originalFromNode) {
            this.diagram.startTransaction('removePort');
            const ports = this.originalFromNode.data.ports as any[];
            this.diagram.model.removeArrayItem(ports, ports.length - 1);
            this.diagram.commitTransaction('removePort');
        }
    }

    private getNodeAtDocumentPoint() {
        const documentPoint = this.diagram.lastInput.documentPoint;
        const graphObjects = this.diagram.findObjectsNear(documentPoint, 0);

        const objectsWithKey = graphObjects.filter((obj) => Boolean(obj.part.key));
        
        if (objectsWithKey.count) {
            const obj = objectsWithKey.first();
            const node = this.diagram.findNodeForKey(obj.part.key);

            return node;
        }
    
        return undefined;
    }
};
