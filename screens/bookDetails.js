import React from "react";
import {View, Text} from 'react-native';
import {icons, COLORS, images, SIZES, FONTS} from '../constants';

const BookDetails = ({route}) => {

  const {detailsData} = route.params;
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.black}}>
      <Text style={{fontSize: 40, color: 'white'}}>{detailsData.bookName}</Text>
    </View>
  )
}

export default BookDetails