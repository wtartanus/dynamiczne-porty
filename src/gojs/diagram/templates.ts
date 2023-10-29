import * as go from 'gojs';

const $ = go.GraphObject.make;

export const createDiagramRoundedRectangleNodeTemplate = () => $(
    go.Node,
    {
        resizable: true,
        resizeObjectName: "RoundedRectangle",
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
                portId: '1',
                fromLinkable: true,
                toLinkable: true,
            },
        ),
        new go.Binding('itemArray', 'ports'),
        {
            itemTemplate: portTemplate()
        }
    )
);

export const createDiagramCircleNodeTemplate = () => $(
    go.Node,
    {
        resizable: true,
        resizeObjectName: "Circle",
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
                name: 'Circle',
                portId: '2',
                fromLinkable: true,
            },
        ),
        new go.Binding('itemArray', 'ports'),
        {
            itemTemplate: portTemplate()
        }
    )
);

const portTemplate = () => $(
    go.Panel, 
    go.Panel.Auto,
    {
        portId: '',
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
    },
    new go.Binding('portId', 'portId'),
    $(go.Shape, 'Rectangle', {
        fill: "black", 
        strokeWidth: 1,
        width: 10,
        height: 10,
    },
    new go.Binding('position', 'position', ({x, y}) => new go.Point(x, y)),
    )
);
