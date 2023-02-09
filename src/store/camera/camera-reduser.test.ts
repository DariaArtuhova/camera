import {CamerasType} from "../../types/camera-type";
import {makeCamera, makeCameras} from "../../mocks";
import {cameraReducer, InitialState} from "./camera-reduser";
import {fetchCamerasAction, fetchCurrentCameraAction, fetchSimilarCameras} from "../../services/api-actions";

describe('Reducer: cameraReducer', ()=> {
  let state: InitialState;
  const cameras: CamerasType = makeCameras();
  const currentCamera = makeCamera();
  const currentSimilarCameras = makeCameras();

  beforeEach(() => {
    state = {
      cameras: [],
      currentCamera: null,
      promo: null,
      error: null,
      similar: []
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(cameraReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should update state by load cameras', () => {
    state = {...state, cameras: cameras};
    expect(cameraReducer(state, {type: fetchCamerasAction.fulfilled.type, payload: cameras}))
      .toEqual({...state});
  });

  it('should set error flag if server is unavailable', () => {
    state = {...state};
    expect(cameraReducer(state, {type: fetchCamerasAction.rejected.type, payload: cameras}))
      .toEqual({...state});
  });

  it('should set current camera by load camera', () => {
    state = {...state, cameras: cameras, currentCamera: currentCamera};
    expect(cameraReducer(state, {type: fetchCurrentCameraAction.fulfilled.type, payload: currentCamera}))
      .toEqual({...state});
  });

  it('should set near cameras by load cameras', () => {
    state = {...state, cameras: cameras, currentCamera: currentCamera, similar: currentSimilarCameras};
    expect(cameraReducer(state, {type: fetchSimilarCameras.fulfilled.type, payload: currentSimilarCameras}))
      .toEqual({...state});
  });
})
