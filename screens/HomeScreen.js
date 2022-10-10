import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {icons, COLORS, images, SIZES, FONTS} from '../constants';

const LineDivider = () => {
  return (
    <View
      style={{
        width: 1,
        paddingVertical: 18,
        marginLeft: 10
      }}>
        <View style={{flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}>

        </View>
      </View>
  );
};

const headerData = {
  username: 'Batricia Salfiora',
  points: 240,
};

const HomeScreen = ({navigation}) => {

  const bookOtherWordsForHome = {
    id: 1,
    bookName: "Other Words For Home",
    bookCover: images.other_words_for_home,
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: [
        "Romance", "Adventure", "Drama"
    ],
    readed: "12k",
    description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    navTintColor: "#000"
}

const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: images.the_metropolist,
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: [
        "Adventure", "Drama"
    ],
    readed: "13k",
    description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000"
}

const bookTheTinyDragon = {
    id: 3,
    bookName: "The Tiny Dragon",
    bookCover: images.the_tiny_dragon,
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: [
        "Drama", "Adventure", "Romance"
    ],
    readed: "13k",
    description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF"
}

const booksData = [
  {
    ...bookOtherWordsForHome,
    completion: '75%',
    lastRead: '3d 5h'

  },
  {
    ...bookTheMetropolis,
    completion: '23%',
    lastRead: '10d 5h',

  },
  {
    ...bookTheTinyDragon,
    completion: '48%',
    lastRead: '1d 2h'
  }

]

const booksCategories = [
  {
    id: 1,
    categoryName: 'Best Seller',
    books: [
      bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
    ]
  },
  {
    id: 2,
    categoryName: 'The Latest',
    books: [
       bookTheTinyDragon
    ]
  },
  {
    id: 3,
    categoryName: 'Coming Soon',
    books: [
       bookTheMetropolis, bookTheTinyDragon
    ]
  },

]


  const [header, setHeader] = useState(headerData);
  const [myBooks, setMyBooks] = useState(booksData);
  const [categories, setCategories] = (booksCategories);

  // function for profile (name, greetings and points)
  function profile(header) {
    return (
      <View style={{paddingHorizontal: SIZES.padding, height: 90 }}>
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

  function buttons() {
    return (
      <View style={{ justifyContent: 'center', paddingHorizontal: SIZES.padding, height: 70, marginTop: 40,}}>
                <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                    {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Claim</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* Get Point */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Get Point")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.point_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Get Point</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* My Card */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("My Card")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.card_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>My Card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    );
  }

  // My Books section function
  function books() {

    const renderItem = ({item, index}) => {
      return(
        <TouchableOpacity 
        style={{
          flex: 1, 
          marginLeft: index == 0 ? SIZES.padding : 0, 
          marginRight: SIZES.radius, 
          marginTop: 20}}
        onPress = {()=> navigation.navigate("Details", {detailsData: item})}>

          {/* book images */}
          <Image 
          source={item.bookCover}
          resizeMode= {"contain"}
          style={{width: 180, height: 250, borderRadius: 20}}
          />

          {/* book information section */}
          <View style={{marginTop: SIZES.radius, alignItems: 'center', flexDirection: 'row'}}>
            <Image 
            source={icons.clock_icon}
            resizeMode={'contain'}
            style={{
              width: 13,
              height: 13,
              tintColor: COLORS.lightGray
            }}
            />
            <Text style={{fontSize: 13, marginLeft: 5, color: COLORS.lightGray}}>{item.lastRead}</Text>

            <Image 
            source={icons.page_icon}
            resizeMode={'contain'}
            style={{
              width: 13,
              height: 13,
              tintColor: COLORS.lightGray,
              marginLeft: SIZES.radius
            }}
            />
            <Text style={{fontSize: 13, marginLeft: 5, color: COLORS.lightGray}}>{item.completion}</Text>

          </View>

        </TouchableOpacity>
      )
    }
    return(
      <View style={{paddingHorizontal: SIZES.padding}}>
        <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{...FONTS.h2, color: COLORS.white, fontWeight: 'bold'}}>My Books</Text>

          <TouchableOpacity
          onPress={() => console.log("see more")}>
            <Text style={{...FONTS.body3, color: COLORS.lightGray, textDecorationLine: 'underline'}}>see more</Text>
          </TouchableOpacity> 
        </View>

        <View>
          <FlatList 
          data={myBooks}
          renderItem = {renderItem}
          keyExtractor = {item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator = {false}
          />
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

      {books()}
    </View>

    // My Book Section

    // Books Categories Section
  );
};

export default HomeScreen;
