import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Left, Right, Button, Content, Body, Title, Footer, FooterTab, Icon, Form, Item, Input  } from 'native-base'

const HomeScreen = props => {
    return (
      <Container>
        <Header style={{ backgroundColor: '#343D52', height: 80, justifyContent: 'center', alignItems: 'center' }}>
            <Left style={{ marginRight: 15 }}>
                <Button transparent>
                    <Icon name='menu' style={{ marginRight: 15 }} />
                    <Icon type="FontAwesome" name='amazon' style={{ marginRight: 15 }}/>
                </Button>
            </Left>
            <Right>
                <Icon type="AntDesign" name="shoppingcart" style={{ color: 'white' }} />
            </Right>
        </Header>
        <View style={{height: 70, backgroundColor: '#343D52', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10}}>
            <TouchableOpacity style={{ backgroundColor: '#E4E4E8', flex: 1, borderRadius: 6, padding: 3, justifyContent: 'center', alignItems: "center", height: 50, marginRight: 5 }}>
                <Text>Shop by</Text>
                <Text style={{ fontWeight: 'bold' }}>Category</Text>
            </TouchableOpacity>
            <Form style={{flex: 3, borderRadius: 6, padding: 3, justifyContent: 'center', alignItems: "center", backgroundColor: 'white', height: 50}}>
                <Item>
                    <Icon type="Feather" name='search' />
                    <Input placeholder="Search" />
                </Item>
            </Form>
        </View>
        <Content style={{ backgroundColor: '#CFCFCF' }}>
            <View style={{ backgroundColor: 'white', height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10}}>
                <Text style={{ fontSize: 18 }}>Hello, Alexis</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, paddingHorizontal: 10 }}>Your Account</Text>
                    <Icon type="Ionicons" name="ios-arrow-forward" />
                </View>
            </View>
        </Content>
        <Footer>
            <FooterTab>
                <Button full>
                    <Text>Footer</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
}

export default HomeScreen
