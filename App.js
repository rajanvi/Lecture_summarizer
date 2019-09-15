import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
//import { RevAiApiClient } from 'revai-node-sdk';
//import * as fs from 'react-native-fs';
//import { findRepos } from 'jest-changed-files';
const accessToken = "02zDKF1el9KGmDdpN-OJmVam9QeDvIgxSHCrDFh-4ooW-IefQP7a1wgrOrDNqo01kPstdxzxP3XlWgP6XckhJxVIVzUi0";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
    this.state = {
      transcribe: false,
      transcription: "Nothing to transcribe"
    };
  }
  handlePress() {
    //Alert.alert("clicked");
    this.setState({
      transcribe:true,
      transcription: "test",
    });
  /*  (async () => { 
      var client = new RevAiApiClient(accessToken);
      var job = await client.submitJobLocalFile("C:/Users/rajan/OneDrive/Desktop/HackMIT project/New Recording.m4a");
      //var jobDetails = await client.getJobDetails(job.id);
      while((jobStatus = (await client.getJobDetails(job.id)).status) == "in_progress")
      {  
          console.log(`Job ${job.id} is ${jobStatus}`);
          Alert.alert('transcribing');
          await new Promise( resolve => setTimeout(resolve, 2000)); //this promise will resolve after 1000ms, therefore it delays 1s
      }
      var transcriptText = await client.getTranscriptText(job.id);
      console.log(transcriptText)

      this.setState({
        transcribe:true,
        transcription: transcriptText
         })
  })();*/

  }
  render() {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Button
          title="Press to transcribe"
          onPress={this.handlePress}
        />
        <Text>{this.state.transcription}</Text>
      </View>
    );
  }
}