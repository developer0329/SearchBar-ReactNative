import React, { Component } from 'react';
import {
  View,
  TextInput,
  ListView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Button from 'apsl-react-native-button'
import { connect } from 'react-redux';

import Constants from '../../constants';
import { searchAttempt } from '@actions/search';
import styles from './styles';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class SearchView extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dataSource: ds.cloneWithRows([]),
      searchKey: ''
    };
  }
  onPressSearchBtn(){
    this.props.searchAttempt(this.state.searchKey);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.products.success){
      this.setState({dataSource: ds.cloneWithRows(nextProps.products.products)})
    }
  }
  renderRow(item) {
    return (
      <TouchableOpacity onPress={() => alert(item.title) }>
        <View style={styles.listItem}>
          <View style={styles.rowContainer}>
            <Image
              style={styles.rowImage}
              source={{ uri: item.image }}
            />
            <View style={{paddingVertical: 10, flex: 1}}>
              <Text 
                numberOfLines={2}
                ellipsizeMode={'tail'}
                style={styles.rowDescText}>{item.title}</Text>
              <Text 
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={styles.rowPriceText}>$ {item.price}</Text>
            </View>
            
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row',            
        }}>
          <TextInput
            style={styles.searchInput}
            placeholder={'Search'}
            onChangeText={(searchKey) => this.setState({searchKey})}
            value={this.state.searchKey}
          />
          <Button
            style={styles.searchBtn}
            onPress={()=> this.onPressSearchBtn()}
            textStyle={{fontSize: 18}}>Search</Button>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

SearchView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    searchAttempt: param => dispatch(searchAttempt(param)),
  };
}
function mapStateToProps(state) {
  const products = state.get('searchReducer');
  return { products };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
