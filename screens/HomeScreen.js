import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {icons, COLORS, images, SIZES, FONTS} from '../constants';

const headerData = {
  username: 'Batricia Salfiora',
  points: 240,
};



const HomeScreen = () => {
  const [header, setHeader] = useState(headerData);


  // function for profile (name, greetings and points)
  function profile(header) {
    return (
      <View style={{paddingHorizontal: SIZES.padding, flex: 0.1}}>
        {/* Greetings */}
        <Text style={{...FONTS.h3, color: COLORS.white, marginTop: 20}}>
          Good Morning
        </Text>
        {/* name and points */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{...FONTS.h2, color: COLORS.white, fontWeight: 'bold'}}>
            {header.username}
          </Text>
  
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              height: 40,
              paddingLeft: 3,
              paddingRight: SIZES.radius,
              borderRadius: 20,
            }}
            onPress={() => console.log('Points')}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  alignItems: 'center',
                  borderRadius: 25,
                }}>
                <Image
                  source={icons.cut_icon}
                  resizeMode="contain"
                  style={{width: 20, height: 20}}
                />
              </View>
              <Text style={{color: COLORS.white}}>{header.points} point</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // function for buttons (claim, get point, my card)

  function buttons(){
    return(
      <View style={{paddingHorizontal: SIZES.padding, marginTop: 50}}>
        <View style={{flexDirection: 'row', backgroundColor: COLORS.secondary, height: 70, borderRadius: SIZES.radius, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity>
          <Image 
          source={icons.claim_icon}
          resizeMode= "contain"
          style={{height: 30, width: 30}}
          />
          </TouchableOpacity>
          
        </View>
      </View>
    )
  }


  return (
    // Greetings, Username and Points Section

    // main view
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      {profile(header)}
      {/* Claim, Get Point, My Card Section */}

      {buttons()}
    </View>

    // My Book Section

    // Books Categories Section
  );
};

export default HomeScreen;
