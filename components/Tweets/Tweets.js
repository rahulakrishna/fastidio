import React from 'react'
import {Text,View,ScrollView,StyleSheet} from 'react-native'
import {connect} from 'react-redux'

const styles=StyleSheet.create({
    'tweet':{
        borderWidth:1,
        borderColor:'#a0a0a0',
        margin:2,
        padding:5
    }
})

class Tweets extends React.Component{
    render(){
        return(
            <ScrollView>
                {this.props.tweets.map((tweet)=>(
                    <View key={tweet.id} style={styles.tweet}>
                        <Text>{tweet.text}</Text>
                    </View>
                ))}
            </ScrollView>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{

    }
}

function mapStateToProps(state) {
    return{
        tweets:state.tweets.data,
        error:state.tweets.error
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tweets)