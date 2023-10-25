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
            },
        ),
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
                name: 'Circle'
            },
        )
    )
);
