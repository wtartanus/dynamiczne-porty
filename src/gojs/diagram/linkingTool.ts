import * as go from 'gojs';

const $ = go.GraphObject.make;

export class CustomLinkingTool extends go.LinkingTool {
    findLinkablePort(): go.GraphObject {
        return $(
            go.Panel, "Auto",
            $(
                go.Shape, 
                "Rectangle", 
                { 
                    fill: "black", 
                    strokeWidth: 1,
                    width: 10,
                    height: 10,
                    portId: 'uuu1',
                    fromLinkable: true,
                    toLinkable: true,
                }
            ),
      );
    }
};
