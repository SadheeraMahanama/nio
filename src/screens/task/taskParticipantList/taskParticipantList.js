import React, { Component} from 'react';
import { View, ScrollView } from 'react-native';
import CustomHeader from '../../../components/Header/Header';
import ListHeader from './listHeader';
import { Container, Header, Content, Button, Text } from 'native-base';


class TaskParticipantList extends Component{
    render(){
        return(
            <ScrollView>
                <CustomHeader 
                    title=""
                    alignItems = 'center' 
                /> 
                <ListHeader />
                <Text>Participant List</Text>
                <Button full danger>
            <Text>Danger</Text>
          </Button>

            </ScrollView>
        )
    }
}

export default TaskParticipantList;