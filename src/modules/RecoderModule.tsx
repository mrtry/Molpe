import * as React from 'react';
import { AppRegistry, PermissionsAndroid } from 'react-native';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

export interface State {
  currentTime: Number,
  recording: Boolean,
  stoppedRecording: Boolean,
  finished: Boolean,
  audioPath: String,
  hasPermission: Boolean,
}

export interface Props {
}

export default class RecorderModule extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      currentTime: 0.0,
      recording: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: false,
    }
  }

  async requestMicrophonePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Microphone Permission',
          'message': 'Molpe needs access to your microphone so you can record audio.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.setState({hasPermission: true})
      } else {
        this.setState({hasPermission: false})
      }
    } catch (err) {
      this.setState({hasPermission: false})
    }
  }
  
  async startRecord() {
    if (this.state.recording) {
      console.warn('Already recording!')
      return
    }

    if (!this.state.hasPermission) {
      console.warn('Can\'t record, no permission granted!')
      return
    }

    if(this.state.stoppedRecording){
      this.prepareRecordingPath(this.state.audioPath);
    }

    this.setState({recording: true})

    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  }

  async stopRecord() {
    if (!this.state.recording) {
        console.warn('Can\'t stop, not recording!');
        return;
      }

      this.setState({stoppedRecording: true, recording: false});

      try {
        const filePath = await AudioRecorder.stopRecording();

        if (Platform.OS === 'android') {
          this._finishRecording(true, filePath);
        }
        return filePath;
      } catch (error) {
        console.error(error);
      }
  }

  prepareRecordingPath(audioPath: String) {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000
    });
  }
}