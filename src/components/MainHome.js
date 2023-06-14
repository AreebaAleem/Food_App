import React, { useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {COLORS, Categories, Categories1, Categories2} from '../database/items';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
// import app from '../firebase';
// import * as app from '../firebase';
// import {getDatabase, ref, onValue} from 'firebase/database';
// import { useQuery, gql } from '@apollo/client';

// const COUNTRY_QUERY = gql`
//   query CountryQuery{
//     country (code:"AD") {
//       name
//       capital
//       emoji
//       code
//       currency
//       continent{
//         name
//       }
//     }
//   }

const MainHome = ({navigation}) => {
  const [currentSelected, setCurrentSelected] = useState ([0]);
  // const [currentSelected2, setCurrentSelected2] = useState ([]);
  // const [Categories1, setCategories1] = useState ([]);

  // useEffect (() => {
  //   const db = getDatabase (app);
  //   const dbRef = ref (db, 'FastFood/categories/3/products');

  //   onValue (dbRef, snapshot => {
  //     const data = snapshot.val ();
  //     if (data) {
  //       const categoryList = Object.values (data);
  //       setCategories3 (categoryList);
  //     }
  //   });
  // }, []);

  // const {data, loading} = useQuery (COUNTRY_QUERY);

  // useEffect (() => {
  //   console.log ('GraphQL ===', data);
  // });

  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected (index)}
      >
        <View
          style={{
            width: 120,
            height: 90,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: currentSelected == index
              ? COLORS.accent
              : COLORS.whitesmoke,
            borderRadius: 20,
            margin: 5,
            elevation: 5,
          }}
        >

          <View
            style={{
              width: 60,
              height: 60,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 15,
              color: COLORS.black,
              fontWeight: '600',
            }}
          >
            {item.name}
          </Text>

        </View>
      </TouchableOpacity>
    );
  };

  const renderCategories1 = ({item,index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.3}
        // style={{flex: 1, margin: 10}}
        onPress={() => setCurrentSelected (index)}
        
      >
        <View
          style={{
            width: 130,
            height: 150,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: COLORS.whitesmoke,
            borderRadius: 20,
            margin: 5,
            elevation: 5,
          }}
        >

          <View
            style={{
              width: 100,
              height: 100,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
              fontWeight: '600',
            }}
          >
            {item.name}
          </Text>

        </View>
      </TouchableOpacity>
    );
  };

  const renderCategories2 = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.3}
      onPress={() => setCurrentSelected (index)}
      >
        <View
          style={{
            width: 130,
            height: 150,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: COLORS.whitesmoke,
            borderRadius: 20,
            margin: 5,
            elevation: 5,
          }}
        >

          <View
            style={{
              width: 100,
              height: 100,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
              fontWeight: '600',
            }}
          >
            {item.name}
          </Text>

        </View>
      </TouchableOpacity>
    );
  };

  //   const renderItems = (data, index) => {
  //     useEffect (() => {
  //   const db = getDatabase (app);
  //   const dbRef = ref (db, 'FastFood');
  //   console.log ('Receiving Data');
  //   onValue (dbRef, (snapshot) => {
  //     let data = snapshot.val ();
  //     setCurrentSelected (data);
  //     console.log ('Testing');
  //     console.log ('Food App data ---> ', data);
  //   });
  // }, []);

  const renderItems = (data,index) => {
  return (
    <TouchableOpacity
      key={index}
      activeOpacity={0.9}
      style={{
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() =>
        navigation.push ('details', {
          name: data.name,
          price: data.price,
          image: data.image,
          isTopOfTheWeek: data.isTopOfTheWeek,
          navigation: navigation,
        })}
    >
      <View
        style={{
          width: '80%',
          height: 160,
          backgroundColor: COLORS.whitesmoke,
          borderRadius: 20,
          elevation: 4,
          position: 'relative',
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            marginBottom: 50,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              display: data.isTopOfTheWeek ? 'flex' : 'none',
            }}
          >
            <FontAwesome5
              name="star"
              style={{
                fontSize: 18,
                color: COLORS.accent,
              }}
            />

            <FontAwesome5
              name="heart"
              style={{
                fontSize: 18,
                color: COLORS.lightGray,
                marginLeft: 100,
              }}
            />

          </View>
          <Text
            style={{
              fontSize: 15,
              color: COLORS.black,
              fontWeight: 'bold',
              paddingTop: 10,
            }}
          >
            {data.name}
          </Text>
        </View>
        <View
          style={{
            width: 80,
            height: 80,
            marginRight: 10,
          }}
        >
          <Image
            source={data.image}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 85,
              height: 50,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: COLORS.black,
                fontWeight: 'bold',
              }}
            >
              {data.rating}

            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 100,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: COLORS.black,
                fontWeight: 'bold',
              }}
            >
              Rs.
              {data.price}
            </Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
            };

  return (
    <View
      style={{width: '100%', height: '100%', backgroundColor: COLORS.white}}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white,
            position: 'relative',
          }}
        >
          <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}
          >
            <TouchableOpacity>
              <MaterialIcons
                name="segment"
                style={{fontSize: 8, color: COLORS.black}}
              />
            </TouchableOpacity>
          </View>
          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 15,
                color: COLORS.black,
                fontWeight: '600',
              }}
            >
              FOOD
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.black,
                fontWeight: '600',
                letterSpacing: 2,
              }}
            >

              DELIVERY
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: COLORS.black,
                fontWeight: 'bold',
                alignContent: 'center',
                paddingTop: 10,
              }}
            >
              Choose your favorite food!
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <MaterialIcons
              name="search"
              style={{fontSize: 25, color: COLORS.black, opacity: 0.6}}
            />
            <TextInput
              placeholder="Search your favorite food"
              style={{
                color: COLORS.black,
                fontSize: 14,
                paddingVertical: 5,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.black + 20,
                width: '90%',
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <Text
            style={{
              paddingTop: 10,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.black,
              letterSpacing: 1,
            }}
          >
            Food Category
          </Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 40,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.black,
            }}
          >
            Popular Food
          </Text>
          <FlatList
            horizontal={true}
            data={Categories1}
            renderItem={renderCategories1}
            showsHorizontalScrollIndicator={false}
          />

          <TouchableOpacity
            style={{
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5,
            }}
          />
          <Text
            style={{
              paddingTop: 1,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.black,
              letterSpacing: 1,
            }}
          >
            Best Seller
          </Text>
          <FlatList
            horizontal={true}
            data={Categories2}
            renderItem={renderCategories2}
            showsHorizontalScrollIndicator={false}
          />

          <TouchableOpacity
            style={{
              margin: 20,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5,
            }}
          />
          <Text
            style={{
              paddingTop: 1,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.black,
              letterSpacing: 1,
            }}
          >
            Products in Selected Category!
          </Text>

          {Categories[currentSelected].items.map (renderItems)}

        </View>
      </ScrollView>
    </View>
  );
};

export default MainHome;
