import React, { Component } from 'react';
import { View,Text, Item, Icon,Header, Input } from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

 class Search extends Component {
     state={
        pokeSearch:"",
         onCall:true,
         data:{}
     }
     searchPoki=()=>{
        this.setState({onCall:true});
        var self=this;
        axios.get("https://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase()).then(
            function(response){
                // console.log(response.data);
                self.setState({data:response.data})
                self.setState({onCall:false})
            }
        ).catch(error=>{
            console.log(error);
        })
     }
     renderBody=()=>{
        if(this.state.onCall){
            return(
                <PokeLoader/>
            )
        }
        else{
            return(
                <SearchBody data={this.state.data}/>
            )
        }
     }
    render() {
        return (
            <View style={{flex:1}}>
            <Header searchBar rounded>
            <Item>
                <Icon name="ios-search" onPress={this.searchPoki}/>
                <Input
                 value={this.state.pokeSearch}
                placeholder="Search Pokemon"
                onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
                 />
            </Item>
            </Header>
               {this.renderBody()}
            </View>
        )
    }
}
export default Search;
