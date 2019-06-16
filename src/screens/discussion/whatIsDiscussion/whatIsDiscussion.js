
import React, {Component} from 'react';
import {Text,Platform, StyleSheet,View,Image,ScrollView,TextInput,KeyboardAvoidingView,TouchableOpacity,TouchableHighlight,AsyncStorage,} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import CustomHeader from '../../../components/Header/Header';
import DiscussedCard from './discussedCard';

class WhatIsDiscussion extends Component{
    constructor(){
        super();
        } 
    
      render() {
        return ( 
        <ScrollView>
            <CustomHeader 
                    title=""
                    alignItems = 'center' 
            />

             <View>
                {/* <SearchBar /> */}
                <Header style={{ backgroundColor: '#6D0F49' }}
                    androidStatusBarColor={'#6D0F49'}>
                <Left>
                    <Button transparent>
                    <Icon name='profile' />
                    </Button>
                </Left>
                <Body>
                    {/* <Title>Header</Title> */}
                   <Text>What is Discussion</Text>
                </Body>
                <Right> 
                    <Button transparent>
                    <Icon name='pencil' />
                    </Button>
                </Right>
                </Header>
            </View>
            <Text>What is WhatIsDiscussion</Text>
            <DiscussedCard />
        </ScrollView> )}
}

export default WhatIsDiscussion;