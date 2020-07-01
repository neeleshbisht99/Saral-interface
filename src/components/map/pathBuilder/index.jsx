import React, { PureComponent } from 'react';
import { CanvasOverlay } from 'react-map-gl';
import { connect } from 'react-redux';
import {} from '../../../store/actions/pathCoordinates';
import { getDirections } from '../../../services/api';

class PolylineOverlay extends PureComponent {
  async caalling(pathCoordinates, profile) {
    try {
      const response = await getDirections('get', pathCoordinates, profile);
      // console.log(response);
      return response.data;
    } catch (err) {
      console.log('inside error');
      console.log(err);
    }
  }

  async _redraw({ width, height, ctx, isDragging, project, unproject }) {
    console.log('okk', ctx);
    try {
      const {
        pathCoordinates,
        color = 'red',
        lineWidth = 2,
        renderWhileDragging = true,
      } = this.props;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      const profile = 'walking';
      // let points = [];
      if (
        pathCoordinates.initialPoint.length == 2 &&
        pathCoordinates.finalPoint.length == 2
      ) {
        const pathData = await this.caalling(pathCoordinates, profile);
        let points = pathData.routes[0].geometry.coordinates;
        if ((renderWhileDragging || !isDragging) && points.length >= 2) {
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = color;
          ctx.beginPath();
          points.forEach(point => {
            const pixel = project([point[0], point[1]]);
            ctx.lineTo(pixel[0], pixel[1]);
          });
          ctx.stroke();
        }
      }
    } catch (err) {
      console.log('inside error');
      console.log(err);
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.pathCoordinates.initialPoint !==
  //       this.props.pathCoordinates.initialPoint ||
  //     prevProps.pathCoordinates.finalPoint !==
  //       this.props.pathCoordinates.finalPoint
  //   ) {
  //     this._redraw();
  //   }
  // }

  render() {
    return <CanvasOverlay redraw={this._redraw.bind(this)} />;
  }
}

export default connect(
  store => ({ pathCoordinates: store.pathCoordinates }),
  {},
)(PolylineOverlay);
