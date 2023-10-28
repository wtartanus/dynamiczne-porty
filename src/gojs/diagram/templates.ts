import * as go from 'gojs';

const $ = go.GraphObject.make;

const click = (e: go.InputEvent, node: go.GraphObject) => {
    if (e.diagram.lastInput.left && e.diagram.lastInput.control && node instanceof go.Node) {
        e.diagram.startTransaction("addPort");
        const portX = e.documentPoint.x - node.location.x;
        const portY = e.documentPoint.y - node.location.y;

        const port = e.diagram.toolManager.linkingTool.findLinkablePort();
        port.position = new go.Point(portX, portY);
        node.add(port)
        e.diagram.commitTransaction("addPort");
    }
};

export const createDiagramRoundedRectangleNodeTemplate = () => $(
    go.Node,
    {
        resizable: true,
        resizeObjectName: "RoundedRectangle",
        click
    },
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.Shape,
            'RoundedRectangle',
            {
                fill: '#117a2d',
                desiredSize: new go.Size(250, 250),
                name: 'RoundedRectangle',
            },
        ),
    )
);

export const createDiagramCircleNodeTemplate = () => $(
    go.Node,
    {
        resizable: true,
        resizeObjectName: "Circle",
        click,
    },
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.Shape,
            'Circle',
            {
                fill: '#11447a',
                desiredSize: new go.Size(250, 250),
                name: 'Circle'
            },
        ),
    )
);
