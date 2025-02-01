import { ZoomTool } from '@cornerstonejs/tools';

/**
 * ZoomTool tool manipulates the camera zoom applied to a viewport. It
 * provides a way to set the zoom of a viewport by dragging mouse over the image.
 *
 */
class ZoomTouchTool extends ZoomTool {
  constructor(
    toolProps = {},
    defaultToolProps = {
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: {
        // whether zoom to the center of the image OR zoom to the mouse position
        zoomToCenter: false,
        minZoomScale: 0.1,
        maxZoomScale: 30,
        pinchToZoom: false,
        pan: true,
        invert: true,
      },
    }
  ) {
    super(toolProps, defaultToolProps);
    // other code in here
  }
}

ZoomTouchTool.toolName = 'Zoom';
export default ZoomTouchTool;
